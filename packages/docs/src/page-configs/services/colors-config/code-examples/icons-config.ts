export const iconsConfigCode = `
import { createVuestic, createIconsConfig } from 'vuestic-ui'

createApp(App)
  .use(createVuestic({
    config: {
      colors: {
        primary: '#ff00ff',
        'player-icon': '#aaa',
        success: '#0fb'
      },
      icons: createIconsConfig({ 
        aliases: [
          {
            name: 'prev',
            to: 'fa4-prev',
            color: 'player-icon'
          },
          {
            name: 'next',
            to: 'fa4-next',
            color: 'player-icon'
          },
          {
            name: 'pause',
            to: 'fa4-pause',
            color: 'player-icon'
          },
          {
            name: 'play',
            to: 'fa4-play'
            color: 'success'
          }
        ],
        fonts: [...]
      })
    }
  }))
  .mount('#app')
`
