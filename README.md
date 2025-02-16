# TSKaigi 2025 Web Site

## Setup

```bash
# Install pnpm
npm install -g pnpm

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Lint and Format

Biomeを使用しています。VSCodeを使っている場合、拡張機能をインストールしてください。
https://marketplace.visualstudio.com/items?itemName=biomejs.biome

```bash
# Lint and format
pnpm check:fix
```

## 本番リリース
mainブランチが変更されると自動的に本番リリースされます。
1. main <- developのPRを作成
2. 最低1人のレビューをもらう
3. PRをマージする

https://github.com/tskaigi/tskaigi2025-web-site/compare/main...develop
