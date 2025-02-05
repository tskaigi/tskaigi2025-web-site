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
mainブランチにpushすると、自動的に本番リリースされます。

```bash
git chechout develop
git pull origin develop
git checkout main
git merge develop
git push origin main
```
