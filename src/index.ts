import type { Plugin } from 'vite'

export default (): Plugin => ({
  name: '@kevinmarrec/vite-plugin-dark-mode',
  transformIndexHtml(html) {
    return {
      html,
      tags: [
        {
          tag: 'script',
          injectTo: 'head',
          children: `\
(function () {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const setting = localStorage.getItem('vueuse-color-scheme') || 'auto'
  if (setting === 'dark' || (prefersDark && setting !== 'light'))
    document.documentElement.classList.toggle('dark', true)
})()`,
        },
      ],
    }
  },
})
