// @ts-check    
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';


import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import remarkMermaid from 'remark-mermaidjs';
import rehypeKatex from 'rehype-katex';
import expressiveCode from 'astro-expressive-code';
// https://astro.build/config
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
            sidebar: [
                {
                    label: 'アートプロジェクト',
                    autogenerate: {directory: 'art'},
                },                
                {
                    label: 'THREE.js',
                    autogenerate: {directory: 'three'},
                },                
                {
                    label: 'GLSL',
                    autogenerate: {directory: 'glsl'},
                },                
                {
                    label: '各種アルゴリズム',
                    autogenerate: {directory: 'algorithm'},
                },                
                {
                    label: '数学',
                    autogenerate: {directory: 'math'},
                },                
                {
                    label: 'csound, P5jsなど',
                    autogenerate: {directory: 'accoustics'},
                },                
                {
                    label: 'html',
                    autogenerate: {directory: 'html'},
                },                
                {
                    label: 'TypeScript, JavaScript',
                    autogenerate: {directory: 'tsjs'},
                },                
                {
                    label: '技術レポート',
                    autogenerate: {directory: 'tech'},
                },                
                {
                    label: 'その他開発',
                    autogenerate: {directory: 'dev'},
                },                
                {
                    label: 'その他',
                    autogenerate: {directory: 'reports'},
                },                
                {
                    label: 'mdx',
                    autogenerate: {directory: 'mdx'},
                },                
            ],
        })
    ],
    markdown: {
        remarkPlugins: [remarkMath,remarkMermaid],
        rehypePlugins: [rehypeKatex],
    },
});

