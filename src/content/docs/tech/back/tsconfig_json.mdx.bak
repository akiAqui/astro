---
title: tsconfig.jsonについて
description: 本当はノートに書いた方がいいのかな？
---
### tsconfig.json

```json
{
    "compilerOptions": {

        // ECMAScript 2020の機能を使用可能に
        "target": "ES2020",

        // クラスフィールドの定義方法を最新の仕様に準拠
        "useDefineForClassFields": true,

        // モジュールシステムとしてESModulesを使用
        "module": "ESNext",

        // 使用可能なライブラリ定義を指定
        "lib": ["ES2020", "DOM", "DOM.Iterable"],

        // node_modules内の型チェックをスキップして処理を高速化
        "skipLibCheck": true,

        // Viteのバンドラーに最適化されたモジュール解決を使用
        "moduleResolution": "bundler",

        // .tsファイルの直接インポートを許可
        "allowImportingTsExtensions": true,

        // JSONファイルのインポートを許可
        "resolveJsonModule": true,

        // ファイル単位でのモジュール化を強制
        "isolatedModules": true,

        // JavaScriptファイルの出力を行わない（Viteが処理するため）
        "noEmit": true,

        // 厳格な型チェックを有効化
        "strict": true,

        // 未使用のローカル変数をエラーに
        "noUnusedLocals": true,

        // 未使用のパラメータをエラーに
        "noUnusedParameters": true,

        // switch文でのフォールスルーをエラーに
        "noFallthroughCasesInSwitch": true,

        // Viteの型定義を使用可能に
        "types": ["vite/client"],

        // モジュール解決の基準となるディレクトリを指定
        "baseUrl": ".",

        // パスエイリアスの設定（@/でsrcディレクトリを参照可能に）
        "paths": {
            "@/*": ["src/*"]
        }
    },

    // コンパイル対象のファイルを指定
    "include": ["src"]
}

```
