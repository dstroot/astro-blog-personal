import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import { remarkReadingTime } from './src/utils/readTime.ts'

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime],
    drafts: true,
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true,
    },
  },
  image: {
    domains: ['https://danstroot.imgix.net'],
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        experimentalThemes: {
          light: 'vitesse-light',
          dark: 'material-theme-palenight',
        },
        wrap: true,
      },
      drafts: true,
    }),
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
    }),
  ],
})
