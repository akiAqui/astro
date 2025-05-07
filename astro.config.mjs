// @ts-check    
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sidebar from './src/sidebar.js';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import remarkMermaid from 'remark-mermaidjs';
import rehypeKatex from 'rehype-katex';
import expressiveCode from 'astro-expressive-code';
// https://astro.build/config


console.debug('sidebar updated:', sidebar) // 無意味に見えても参照が必要

export default defineConfig({
  i18n: {
    locales: ["es", "en", "pt-br"],
    defaultLocale: "en",
  },
    server: {
      host: true, // または '0.0.0.0'
    },
    integrations: [// ここを最初に配置
        react(),
        expressiveCode(),
        mdx(), sitemap(), starlight({
            title: 'ドキュメント',
            social: {
                github: 'https://github.com/withastro/starlight',
            },
            sidebar: sidebar,
        })
    ],
    markdown: {
        remarkPlugins: [remarkMath,remarkMermaid],
        rehypePlugins: [rehypeKatex],
    },
});

