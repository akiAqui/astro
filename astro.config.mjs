// @ts-check    
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
//import sidebar from './src/sidebar.js';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
//import remarkMermaid from 'remark-mermaidjs';
import rehypeKatex from 'rehype-katex';
import expressiveCode from 'astro-expressive-code';
// https://astro.build/config


//console.debug('sidebar updated:', sidebar) // 無意味に見えても参照が必要

export default defineConfig({
    site: 'http://ahoraria.uk',
//    base: '/docs/',
//    build: {
//        outDir: new URL('./dist/docs/',import.meta.url)
//    },
//    i18n: {
//        locales: ["es", "en", "pt-br"],
//        defaultLocale: "en",
//    },
    server: {
        host: true, // または '0.0.0.0'
        allowedHosts:['ahoraria.uk'],
    },
    integrations: [// ここを最初に配置
        react(),
        expressiveCode(),
        mdx(), sitemap(), starlight({
            title: 'ドキュメント',
//            sidebar: sidebar

            sidebar: [
                {
                    label: 'art projects',
                    autogenerate:
                    {
                        directory: 'art',
                    },
                },
                {
                    label: 'THREE.js',
                    autogenerate:
                    {
                        directory: 'three',
                    },
                },
                {
                    label: 'GLSL',
                    autogenerate:
                    {
                        directory: 'glsl',
                    },
                },
                {
                    label: 'アルゴリズム',
                    autogenerate:
                    {
                        directory: 'algorithm',
                    },
                },
                {
                    label: '数学',
                    autogenerate:
                    {
                        directory: 'math',
                    },
                },
                {
                    label: '音響',
                    autogenerate:
                    {
                        directory: 'accoustics',
                    },
                },
                {
                    label: '流体力学',
                    autogenerate:
                    {
                        directory: 'hydrodynamics',
                    },
                },                
                {
                    label: 'HTML',
                    autogenerate:
                    {
                        directory: 'html',
                    },
                },
                {
                    label: 'Typescript',
                    autogenerate:
                    {
                        directory: 'tsjs',
                    },
                },
                
                {
                    label: 'ネットワーク',
                    autogenerate:
                    {
                        directory: 'network',
                    },
                },
                {
                    label: 'その他技術',
                    autogenerate:
                    {
                        directory: 'tech',
                    },
                },
                
                {
                    label: '開発',
                    autogenerate:
                    {
                        directory: 'dev',
                    },
                },
                
                {
                    label: 'その他',
                    autogenerate:
                    {
                        directory: 'reports',
                    },
                },
                {
                    label: 'emacs',
                    autogenerate:
                    {
                        directory: 'emacs',
                    },
                },
                
                {
                    label: '使い方',
                    autogenerate:
                    {
                        directory: 'mdx',
                    },
                },
                
                {
                    label: '',
                    autogenerate:
                    {
                        directory: '',
                    },
                },
                



            ],

        })
    ],
    markdown: {
        remarkPlugins: [remarkMath,remarkMermaid],
        rehypePlugins: [rehypeKatex],
    },
});

