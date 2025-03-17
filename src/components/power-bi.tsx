'use client'

import { PowerBIEmbed } from 'powerbi-client-react'

type Props = {
  embedUrl: string
}

export const PowerBi: React.FC<Props> = ({ embedUrl }) => {
  return (
    <div className="shrink grow rounded-2xl bg-white p-4 *:h-full ">
      <PowerBIEmbed
        embedConfig={{
          type: 'dashboard', // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          embedUrl,
          settings: {
            zoomLevel: 90,
            filterPaneEnabled: false,
            navContentPaneEnabled: false,
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
          },
        }}
        getEmbeddedComponent={(embeddedReport) => {
          ;(window as { report?: Report }).report =
            embeddedReport as unknown as Report
        }}
      />
    </div>
  )
}
