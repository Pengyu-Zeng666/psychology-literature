# 心理學文獻整理 · Psychology Literature

一個純靜態、可瀏覽與搜尋的心理學文獻整理網站。無需後端、無需建置工具，打開 `index.html` 即可使用。

## 功能

- 🔍 即時搜尋：標題、作者、期刊、關鍵字標籤、摘要
- 🏷️ 主題分類篩選（依 `topic` 欄位自動產生）
- 🌗 自動深色 / 淺色模式
- 📄 每篇可放原文連結（DOI/URL）與本地 PDF
- 📱 響應式，手機也好讀

## 如何新增一篇文獻

所有資料都在 [`data.js`](./data.js)。複製一組 `{ ... }` 貼上並修改欄位即可：

```js
{
  title: "文獻標題",
  authors: "Author, A., & Author, B.",
  year: 2024,
  journal: "期刊名, 卷(期), 頁碼",
  topic: "主題分類",            // 會出現在上方篩選列
  tags: ["keyword1", "keyword2"],
  summary: "摘要或重點筆記，可換行。",
  link: "https://doi.org/...",  // 沒有就填 ""
  pdf: "papers/01.pdf",         // 沒有就填 ""
},
```

存檔後重新整理頁面就會看到。

## 本地預覽

```bash
# 任選一種
python3 -m http.server 8000     # 然後開 http://localhost:8000
# 或直接用瀏覽器打開 index.html
```

## 檔案結構

```
.
├── index.html   # 版面、樣式、搜尋與篩選邏輯
├── data.js      # 文獻資料（你主要編輯這裡）
├── papers/      # （可選）放本地 PDF
└── README.md
```

## 部署

純靜態站，可直接部署到 GitHub Pages、Vercel、Netlify 等。
GitHub Pages：Settings → Pages → Source 選 `main` 分支即可。
