# @kevinmarrec/vite-plugin-dark-mode

## Description

Vite plugin to inject a script to set initial color scheme based on user preferences.

Meant to be used with [VueUse](https://vueuse.org/core/useDark/) to toggle the dark mode.

## Opinions

- Use `dark` as the class name for the dark mode.

- Use [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) CSS media feature to get operating system (or user agent) preferences.

- Use [vueuse-color-scheme](https://vueuse.org/core/useDark/#behavior) local storage key to get user preferences.
