// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://optimisationblindness.org',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  markdown: {
    syntaxHighlight: false,
    smartypants: true,
  },
});
