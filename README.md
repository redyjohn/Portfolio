# 作品集網站

一個現代化的作品集展示網站，使用 React + Vite 構建，部署在 GitHub Pages 上。

## 功能特色

- 📱 響應式設計，適配各種設備
- 🎨 現代化的 UI 設計
- 🖼️ 作品縮圖展示
- 📄 點擊查看詳細作品簡報
- 🏷️ 技術標籤展示
- ⚡ 快速載入與流暢動畫

## 技術棧

- **React 18** - 前端框架
- **Vite** - 構建工具
- **CSS3** - 樣式設計

## 本地開發

### 安裝依賴

```bash
npm install
```

### 啟動開發伺服器

```bash
npm run dev
```

### 構建生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

## 部署到 GitHub Pages

本專案已配置為部署到：**https://github.com/redyjohn/Portfolio**

### 快速部署步驟

1. **初始化並推送代碼**：
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git remote add origin https://github.com/redyjohn/Portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **啟用 GitHub Pages**：
   - 前往 https://github.com/redyjohn/Portfolio/settings/pages
   - 在 **Source** 選擇：**GitHub Actions**
   - 保存設置

3. **自動部署**：
   - 推送代碼到 `main` 分支會自動觸發部署
   - 查看部署狀態：https://github.com/redyjohn/Portfolio/actions

4. **訪問網站**：
   - 部署完成後訪問：**https://redyjohn.github.io/Portfolio/**

詳細部署說明請參考 [DEPLOY.md](./DEPLOY.md)

## 自定義作品

編輯 `src/data/projects.js` 文件來添加或修改你的作品：

```javascript
{
  id: 1,
  name: '作品名稱',
  shortDescription: '簡短描述',
  technologies: ['技術1', '技術2'],
  thumbnail: '圖片URL',
  presentation: [
    {
      type: 'heading',
      content: '標題'
    },
    {
      type: 'paragraph',
      content: '段落內容'
    },
    {
      type: 'list',
      items: ['項目1', '項目2']
    }
  ]
}
```

## 許可證

MIT

