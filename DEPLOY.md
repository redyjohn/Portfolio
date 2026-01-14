# 部署指南

## 部署到 https://github.com/redyjohn/Portfolio

### 步驟 1: 初始化 Git 倉庫（如果還沒有）

```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### 步驟 2: 連接到 GitHub 倉庫

```bash
git remote add origin https://github.com/redyjohn/Portfolio.git
git branch -M main
git push -u origin main
```

### 步驟 3: 啟用 GitHub Pages

1. 前往你的 GitHub 倉庫：https://github.com/redyjohn/Portfolio
2. 點擊 **Settings**（設置）
3. 在左側選單中找到 **Pages**（頁面）
4. 在 **Source**（源）部分：
   - 選擇 **GitHub Actions** 作為部署來源
5. 保存設置

### 步驟 4: 觸發部署

當你推送代碼到 `main` 分支時，GitHub Actions 會自動：
- 構建你的網站
- 部署到 GitHub Pages

你可以：
- 推送新的提交：`git push`
- 或者手動觸發：在 GitHub 倉庫的 **Actions** 標籤頁中點擊 **Run workflow**

### 步驟 5: 訪問你的網站

部署完成後（通常需要 1-2 分鐘），你的網站將在以下地址可訪問：

**https://redyjohn.github.io/Portfolio/**

### 檢查部署狀態

1. 前往倉庫的 **Actions** 標籤頁
2. 查看最新的工作流運行狀態
3. 如果顯示綠色勾號 ✓，表示部署成功

### 常見問題

**Q: 部署失敗怎麼辦？**
- 檢查 Actions 標籤頁中的錯誤訊息
- 確認 `package.json` 和所有依賴都正確
- 確認 `vite.config.js` 中的 `base` 路徑為 `/Portfolio/`

**Q: 網站顯示 404？**
- 確認 GitHub Pages 設置中選擇了 **GitHub Actions** 作為源
- 等待幾分鐘讓部署完成
- 清除瀏覽器快取後重新載入

**Q: 如何更新網站內容？**
- 修改 `src/data/projects.js` 或其他文件
- 提交並推送更改：`git add . && git commit -m "Update content" && git push`
- 部署會自動觸發



