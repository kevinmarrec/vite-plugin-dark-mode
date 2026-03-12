import type { Plugin } from 'vite'

export default (): Plugin => ({
  name: '@kevinmarrec/vite-plugin-dark-mode',
  transformIndexHtml() {
    return [
      {
        tag: 'script',
        injectTo: 'head',
        children: `\
(function () {
  const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches
  const setting = localStorage.getItem('vueuse-color-scheme') || 'auto'
  if (setting === 'dark' || (prefersDark && setting !== 'light'))
    document.documentElement.classList.add('dark')
})()`,
      },
    ]
  },
})
