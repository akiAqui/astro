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
    integrations: [// ここを最初に配置
        react(),
        expressiveCode(),
        mdx(), sitemap(), starlight({
            title: 'ドキュメント',
            social: {
                github: 'https://github.com/withastro/starlight',
            },
            sidebar: [
                { label: '補間法',link: '/algorithm/interpolation.mdx'},
                {
                    label: 'THREE.js',
                    autogenerate: {directory: 'three'},
                },                
                {
                    label: '各種アルゴリズム',
                    autogenerate:
                      {
                        directory: 'algorithm',
                        exclude: [interpolation]
                      },
                },                
                {
                    label: '技術レポート',
                    autogenerate: {directory: 'tech'},
                },                
                {
                    label: '開発関連書類',
                    autogenerate: {directory: 'dev'},
                },                
                {
                    label: 'その他',
                    autogenerate: {directory: 'reports'},
                },                
                {
                    label: 'etc',
                    autogenerate: {directory: 'etc'},
                },                
            ],
        })
    ],
    markdown: {
        remarkPlugins: [remarkMath,remarkMermaid],
        rehypePlugins: [rehypeKatex],
    },
});

