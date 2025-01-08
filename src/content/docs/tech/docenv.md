---
title: 個人ドキュメント環境の構築
description: node.js/npm/astro/starlight/serveの利用
---

## 利用技術
- node.js
- npm
- astro/starlight
```bash
> npm create astro@latest .
```
- serveの利用
```bash
> npm install -g serve
> npm run build
> serve dist/ -l 8080
```

## 記憶すべきこと
```bash
> ~/astro %tree --gitignore
tree --gitignore
.
├── README.md
├── astro.config.mjs
├── package-lock.json
├── package.json
├── public
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── houston.webp
│   ├── content
│   │   └── docs
│   │       ├── algorithm
│   │       │   ├── morphing.md
│   │       │   └── num_integration.md
│   │       ├── index.mdx
│   │       ├── index.mdx.old
│   │       ├── reports
│   │       │   └── eng-variation-mistake.md
│   │       └── tech
│   │           ├── #animation.md#
│   │           ├── #docenv.md#
│   │           ├── animation.md
│   │           ├── docenv.md
│   │           ├── pc_env.md
│   │           ├── pjsetup.md
│   │           ├── tsconfig_json.md
│   │           ├── typescript.md
│   │           └── vite_conf_ts.md
│   ├── content.config.ts
│   └── layouts
│       └── BaseLayout.astro
└── tsconfig.json

9 directories, 23 files
```

### astro.config.mjs

```javascript
// @ts-check    
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    markdown: {
        layout: './src/layouts/BaseLayout.astro', // デフォルトレイアウト
    },
    integrations: [
 	starlight({
	    title: '書庫',
	    social: {
		github: 'https://github.com/withastro/starlight',
	    },
	    sidebar: [
		{
		    label: 'メディア系',
                    autogenerate: {directory: 'algorithm'},
		},                
		{
		    label: '技術レポート',
                    autogenerate: {directory: 'tech'},
		},                
		{
		    label: 'その他レポート',
                    autogenerate: {directory: 'reports'},
		},                
	    ],
	}),
    ],
});

```
