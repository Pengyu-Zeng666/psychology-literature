# 心理學文獻整理 · Psychology Literature

一個純靜態、可瀏覽與搜尋的心理學文獻整理網站。無需後端、無需建置工具，打開 `index.html` 即可使用。

## 功能

- 🔍 即時搜尋：標題、作者、期刊、關鍵字標籤、摘要
- 🏷️ 主題分類篩選（依 `topic` 欄位自動產生）
- 🌗 自動深色 / 淺色模式
- 📄 每篇可放原文連結（DOI/URL）與本地 PDF
- 📱 響應式，手機也好讀

## 專題：AI 神經元 × 人腦神經元

收錄 41 篇專題文獻，回答「看到特定圖片就發放的單一神經元，在人腦與人工網路中各自是什麼、類比能推到多遠」。
導讀與閱讀路徑見 [`ai-neuron-brain-analogy.md`](./ai-neuron-brain-analogy.md)，文獻本身在網站上以下列標籤篩選：

- `人腦單一神經元`（9）— Hubel & Wiesel、FFA、Quiroga 的概念細胞、Tsao 的臉部軸編碼
- `AI 神經元`（12）— Google 貓神經元、Network Dissection、CLIP 多模態神經元、情緒神經元
- `編碼爭論`（7）— 祖母細胞辯論、混合選擇性、疊加 (superposition) 與稀疏自編碼器
- `AI–大腦對應`（9）— Yamins、Brain-Score、神經活動控制、功能專化的自發浮現
- `模型與人腦差異`（4）— 紋理偏誤、model metamers、對基準測量本身的批判

專題文獻在 `data.js` 中另有 `AI-brain` 標籤，搜尋此關鍵字可一次列出全部。

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
├── index.html                    # 版面、樣式、搜尋與篩選邏輯
├── data.js                       # 文獻資料（你主要編輯這裡）
├── ai-neuron-brain-analogy.md    # 專題導讀：AI 神經元 × 人腦神經元
├── papers/                       # （可選）放本地 PDF
└── README.md
```

## 部署

純靜態站，可直接部署到 GitHub Pages、Vercel、Netlify 等。
GitHub Pages：Settings → Pages → Source 選 `main` 分支即可。
