import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'

const typographyVariants = cva('font-normal text-base text-current', {
  variants: {
    variant: {
      div: 'text-foreground',
      h1: 'scroll-m-20 font-semibold text-4xl tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight first:mt-0',
      h3: 'scroll-m-20 font-semibold text-2xl tracking-tight',
      h4: 'scroll-m-20 font-semibold text-xl tracking-tight',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      ul: 'my-6 ml-6 list-disc [&>li]:mt-2',
      code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm',
      small: 'font-medium text-sm leading-none',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      // variants not as comp
      lead: 'text-muted-foreground text-xl',
      large: 'text-lg',
      muted: 'text-muted-foreground text-sm',
    },
  },
  defaultVariants: {
    variant: 'div',
  },
})

type Props = VariantProps<typeof typographyVariants> &
  React.PropsWithChildren<{
    asChild?: boolean
    className?: string
  }>

const variantsToComp = {
  lead: 'p',
  large: 'div',
  muted: 'p',
}

export const Typography: React.FC<Props> = ({
  variant,
  className,
  asChild,
  ...props
}) => {
  const variantToComp = Object.keys(variantsToComp).includes(variant || '')
    ? variantsToComp[variant as keyof typeof variantsToComp]
    : variant || 'div'

  const Comp = asChild ? Slot : variantToComp

  return (
    <Comp
      data-slot="text"
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  )
}
