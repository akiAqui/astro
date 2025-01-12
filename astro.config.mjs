// @ts-check    
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';


import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
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
                {
                    label: 'THREE.js',
                    autogenerate: {directory: 'three'},
                },                
                {
                    label: 'メディア操作',
                    autogenerate: {directory: 'algorithm'},
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
                    label: 'その他ト',
                    autogenerate: {directory: 'reports'},
                },                
                {
                    label: 'temporary',
                    autogenerate: {directory: 'tmp'},
                },                
            ],
        })
    ],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
    },
});

