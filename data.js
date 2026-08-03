/*
 * 文獻資料檔 / Literature data
 * ---------------------------------------------------------------
 * 要新增一篇文獻，就在下面的陣列裡複製一組 { ... } 貼上並修改即可。
 * To add a paper, copy one { ... } block below and edit the fields.
 *
 * 欄位說明 / Fields:
 *   title    文獻標題 (必填 required)
 *   authors  作者，字串 (e.g. "Kahneman, D., & Tversky, A.")
 *   year     年份 (number)
 *   journal  期刊 / 出版來源
 *   topic    主題分類 (用來做上方的分類篩選 — used for the filter chips)
 *   tags     關鍵字標籤陣列 (array of strings)
 *   summary  摘要 / 重點筆記 (支援換行)
 *   link     連結網址 (DOI 或文章網址，留空字串 "" 就不顯示按鈕)
 *   pdf      本地 PDF 路徑，例如 "papers/01.pdf" (沒有就留 "")
 */

const LITERATURE = [
  {
    title: "Prospect Theory: An Analysis of Decision under Risk",
    authors: "Kahneman, D., & Tversky, A.",
    year: 1979,
    journal: "Econometrica, 47(2), 263–291",
    topic: "判斷與決策",
    tags: ["decision-making", "cognitive-bias", "loss-aversion", "classic"],
    summary:
      "提出前景理論，說明人在不確定情境下的選擇會系統性偏離期望效用理論：對損失比對等量收益更敏感（損失規避），且以參考點來評估結果。奠定行為經濟學基礎。",
    link: "https://doi.org/10.2307/1914185",
    pdf: "",
  },
  {
    title: "Self-efficacy: Toward a Unifying Theory of Behavioral Change",
    authors: "Bandura, A.",
    year: 1977,
    journal: "Psychological Review, 84(2), 191–215",
    topic: "動機與人格",
    tags: ["self-efficacy", "social-cognitive", "motivation", "classic"],
    summary:
      "提出自我效能概念：個人對自己能否成功執行某行為的信念，會影響努力程度與面對困難時的堅持。四大來源：親身成就、替代經驗、言語說服、生理狀態。",
    link: "https://doi.org/10.1037/0033-295X.84.2.191",
    pdf: "",
  },
  {
    title:
      "Self-Determination Theory and the Facilitation of Intrinsic Motivation, Social Development, and Well-Being",
    authors: "Ryan, R. M., & Deci, E. L.",
    year: 2000,
    journal: "American Psychologist, 55(1), 68–78",
    topic: "動機與人格",
    tags: ["self-determination", "intrinsic-motivation", "well-being", "autonomy"],
    summary:
      "自我決定論核心整理：自主 (autonomy)、勝任 (competence)、關係 (relatedness) 三項基本心理需求被滿足時，內在動機與幸福感提升。區分內在／外在動機的連續光譜。",
    link: "https://doi.org/10.1037/0003-066X.55.1.68",
    pdf: "",
  },
  {
    title: "Ego Depletion: Is the Active Self a Limited Resource?",
    authors: "Baumeister, R. F., Bratslavsky, E., Muraven, M., & Tice, D. M.",
    year: 1998,
    journal: "Journal of Personality and Social Psychology, 74(5), 1252–1265",
    topic: "自我控制",
    tags: ["self-control", "ego-depletion", "willpower", "experiment"],
    summary:
      "提出自我耗損假說：意志力像有限資源，先前的自我控制會削弱後續任務的表現。近年有重複性爭議 (replication debate)，可作為方法學討論的教材。",
    link: "https://doi.org/10.1037/0022-3514.74.5.1252",
    pdf: "",
  },
  {
    title: "Flow: The Psychology of Optimal Experience",
    authors: "Csikszentmihalyi, M.",
    year: 1990,
    journal: "Harper & Row (book)",
    topic: "正向心理學",
    tags: ["flow", "positive-psychology", "engagement", "well-being"],
    summary:
      "提出心流 (flow) 概念：當挑戰與技能平衡、目標清晰、即時回饋時，人會進入高度專注且愉悅的最佳體驗狀態。與專注、幸福感研究高度相關。",
    link: "",
    pdf: "",
  },

  /* ---------------------------------------------------------------
   * AI 神經元 vs. 人類神經元
   * 以下皆刊於 JCR 影響因子 (IF) > 10 的期刊。
   * IF 為近年度 (2023–2024 JCR) 概略值，每年會變動，投稿前請以最新
   * JCR / 期刊官網公告為準。
   * ------------------------------------------------------------- */

  {
    title: "Dendritic action potentials and computation in human layer 2/3 cortical neurons",
    authors: "Gidon, A., Zolnik, T. A., Fidzinski, P., Bolduan, F., Papoutsi, A., Poirazi, P., Holtkamp, M., Vida, I., & Larkum, M. E.",
    year: 2020,
    journal: "Science, 367(6473), 83–87（IF ≈ 45）",
    topic: "AI 與人類神經元",
    tags: ["human-neuron", "dendrite", "XOR", "single-neuron-computation", "IF>10"],
    summary:
      "在癲癇手術取得的人類皮質切片中，發現第 2/3 層錐體細胞樹突具有一種前所未見的鈣離子動作電位 (dCaAP)，其反應曲線是「先升後降」的調諧型，而非單調遞增。\n" +
      "關鍵意義：單一顆人類神經元的樹突就能計算 XOR（互斥或）——這正是 1969 年 Minsky & Papert 證明單層感知器 (perceptron) 做不到、必須靠多層網路才能解的問題。\n" +
      "對比重點：人工神經元 = 加權和 + 單調激活函數；人類神經元 = 內建多層非線性運算單元。",
    link: "https://doi.org/10.1126/science.aax6239",
    pdf: "",
  },
  {
    title: "Single cortical neurons as deep artificial neural networks",
    authors: "Beniaguev, D., Segev, I., & London, M.",
    year: 2021,
    journal: "Neuron, 109(17), 2727–2739.e3（IF ≈ 15）",
    topic: "AI 與人類神經元",
    tags: ["single-neuron-computation", "deep-learning", "dendrite", "NMDA", "IF>10"],
    summary:
      "本主題最直接的「換算」研究：訓練 DNN 去擬合生物物理模型神經元在毫秒級的輸入／輸出對應關係，看要多深的網路才學得起來。\n" +
      "結果：一顆第 5 層皮質錐體細胞 (L5PC) 需要 5–8 層的時間卷積 DNN 才能複製；若移除 NMDA 受體，只要單一隱藏層就夠。\n" +
      "結論：一顆真實神經元的運算複雜度 ≈ 一個中型深度網路，而樹突 NMDA 非線性正是複雜度的主要來源。",
    link: "https://doi.org/10.1016/j.neuron.2021.07.002",
    pdf: "",
  },
  {
    title: "The neuroconnectionist research programme",
    authors: "Doerig, A., Sommers, R. P., Seeliger, K., Richards, B., Ismael, J., Lindsay, G. W., Kording, K. P., Konkle, T., van Gerven, M. A. J., Kriegeskorte, N., & Kietzmann, T. C.",
    year: 2023,
    journal: "Nature Reviews Neuroscience, 24, 431–450（IF ≈ 25）",
    topic: "AI 與人類神經元",
    tags: ["review", "neuroconnectionism", "brain-model-comparison", "philosophy-of-science", "IF>10"],
    summary:
      "整個「用人工神經網路當大腦理論」研究取向的旗艦回顧。借用 Lakatos 的科學哲學框架，把 neuroconnectionism 視為一個研究綱領：ANN 是一種可被證偽的「計算語言」，用來表述大腦如何運算的理論。\n" +
      "適合當作文獻回顧的骨架：整理了模型—大腦比較的方法（representational similarity、encoding model、brain-score）與常見批評。",
    link: "https://doi.org/10.1038/s41583-023-00705-w",
    pdf: "",
  },
  {
    title: "Backpropagation and the brain",
    authors: "Lillicrap, T. P., Santoro, A., Marris, L., Akerman, C. J., & Hinton, G.",
    year: 2020,
    journal: "Nature Reviews Neuroscience, 21, 335–346（IF ≈ 25）",
    topic: "AI 與人類神經元",
    tags: ["review", "backpropagation", "synaptic-plasticity", "learning-rule", "IF>10"],
    summary:
      "處理 AI 與大腦最核心的差異：反向傳播 (backprop) 在生物上不可行（需要權重對稱、全域誤差訊號）。\n" +
      "作者提出 NGRAD 框架：皮質的回饋連結可以誘發神經活動的差異，讓每個突觸用「局部」訊號近似誤差梯度，因此 backprop 的核心原理仍可能在腦中以另一種形式實現。",
    link: "https://doi.org/10.1038/s41583-020-0277-3",
    pdf: "",
  },
  {
    title: "Shared computational principles for language processing in humans and deep language models",
    authors: "Goldstein, A., Zada, Z., Buchnik, E., Schain, M., Price, A., Aubrey, B., ... Hasson, U.",
    year: 2022,
    journal: "Nature Neuroscience, 25(3), 369–380（IF ≈ 21）",
    topic: "AI 與人類神經元",
    tags: ["language", "GPT", "ECoG", "next-word-prediction", "IF>10"],
    summary:
      "9 位受試者聽 30 分鐘 podcast，同時以顱內電極 (ECoG) 記錄神經活動，與自迴歸語言模型 (GPT-2) 的表徵對比。\n" +
      "發現大腦與深度語言模型共享三項運算原則：(1) 以嵌入向量表徵語境化詞義；(2) 聽到詞之前就自發預測下一個詞；(3) 依預測誤差調整。這是「人腦神經訊號 vs. AI 模型內部表徵」直接對照的代表作。",
    link: "https://doi.org/10.1038/s41593-022-01026-4",
    pdf: "",
  },
  {
    title: "Driving and suppressing the human language network using large language models",
    authors: "Tuckute, G., Sathe, A., Srikant, S., Taliaferro, M., Wang, M., Schrimpf, M., Kay, K., & Fedorenko, E.",
    year: 2024,
    journal: "Nature Human Behaviour, 8（IF ≈ 21）",
    topic: "AI 與人類神經元",
    tags: ["language", "fMRI", "encoding-model", "causal-control", "IF>10"],
    summary:
      "從「相關」推進到「因果控制」：先用 1,000 個句子的 fMRI 反應訓練 GPT 編碼模型，再讓模型去挑選預測會「最大化」或「最小化」語言網路活動的新句子，然後在新受試者身上驗證。\n" +
      "結果模型挑的句子確實能驅動／抑制人腦語言區，代表模型已抓到該腦區的功能調諧特性；意外度 (surprisal) 與句法合法性是主要決定因素。",
    link: "https://doi.org/10.1038/s41562-023-01783-7",
    pdf: "",
  },
  {
    title: "Using goal-driven deep learning models to understand sensory cortex",
    authors: "Yamins, D. L. K., & DiCarlo, J. J.",
    year: 2016,
    journal: "Nature Neuroscience, 19(3), 356–365（IF ≈ 21）",
    topic: "AI 與人類神經元",
    tags: ["review", "visual-cortex", "CNN", "encoding-model", "classic", "IF>10"],
    summary:
      "此領域的奠基性回顧。說明用「目標驅動」方式（只給行為目標如物體辨識，不去擬合神經資料）訓練出的階層式卷積網路，其中間層竟能預測 V4、IT 等高階視覺區的單一神經元反應。\n" +
      "確立了「以任務最佳化模型作為感覺皮質模型」的方法學，是後續所有 AI–大腦對比研究的起點。",
    link: "https://doi.org/10.1038/nn.4244",
    pdf: "",
  },
  {
    title: "A deep learning framework for neuroscience",
    authors: "Richards, B. A., Lillicrap, T. P., Beaudoin, P., Bengio, Y., Bogacz, R., Christensen, A., ... Kording, K. P.",
    year: 2019,
    journal: "Nature Neuroscience, 22(11), 1761–1770（IF ≈ 21）",
    topic: "AI 與人類神經元",
    tags: ["framework", "objective-function", "learning-rule", "architecture", "IF>10"],
    summary:
      "提出以深度學習的三要素——目標函數 (objective function)、學習規則 (learning rule)、網路架構 (architecture)——作為系統神經科學的分析層次。\n" +
      "主張與其逐一描述單一神經元的調諧特性，不如去問「大腦在最佳化什麼、用什麼規則、在什麼架構上」，為 AI 與大腦的對比提供共同語彙。",
    link: "https://doi.org/10.1038/s41593-019-0520-2",
    pdf: "",
  },
  {
    title: "A critique of pure learning and what artificial neural networks can learn from animal brains",
    authors: "Zador, A. M.",
    year: 2019,
    journal: "Nature Communications, 10, 3770（IF ≈ 15）",
    topic: "AI 與人類神經元",
    tags: ["innate-structure", "genomic-bottleneck", "learning-efficiency", "perspective", "IF>10"],
    summary:
      "反方觀點，適合放進討論的平衡論述。主張動物大部分行為不是靠學習演算法習得，而是天生寫在基因組裡的高度結構化連結；因為連結圖太複雜無法明文編碼，必須經過「基因組瓶頸」壓縮。\n" +
      "對 AI 的啟示：ANN 缺的不是更多資料，而是這種先天的架構先驗 (innate priors)，這也是人腦能少量樣本快速學習的原因。",
    link: "https://doi.org/10.1038/s41467-019-11786-6",
    pdf: "",
  },
  {
    title: "Human-like object concept representations emerge naturally in multimodal large language models",
    authors: "Du, C., Fu, K., Wen, B., Sun, Y., Peng, J., Wei, W., ... He, H.",
    year: 2025,
    journal: "Nature Machine Intelligence, 7, 860–875（IF ≈ 19）",
    topic: "AI 與人類神經元",
    tags: ["LLM", "concept-representation", "fMRI", "semantic-space", "IF>10"],
    summary:
      "蒐集 LLM 與多模態 LLM 對 1,854 個自然物件的 470 萬次三元組相似性判斷，萃取出 66 維嵌入空間。\n" +
      "該空間穩定、可預測、且維度可被人類解讀，語意聚類方式與人類心理表徵相近；並與 EBA、PPA、RSC、FFA 等腦區的神經活動型態顯著對齊。\n" +
      "結論：模型的概念表徵與人類並非相同，但共享基本結構。適合探討「AI 是否自發長出類人概念系統」。",
    link: "https://doi.org/10.1038/s42256-025-01049-z",
    pdf: "",
  },
  {
    title: "Constructing artificial neurons with functional parameters comprehensively matching biological values",
    authors: "Fu, S., Gao, H., Wang, S., Wang, X., Woodard, T., Wang, Z., Kong, J., Lovley, D. R., & Yao, J.",
    year: 2025,
    journal: "Nature Communications, 16（IF ≈ 15）",
    topic: "AI 與人類神經元",
    tags: ["neuromorphic", "memristor", "artificial-neuron", "bioelectronics", "IF>10"],
    summary:
      "硬體層面的對比。現有人工神經元的訊號振幅與能耗通常比生物神經元高一個數量級；本研究以蛋白質奈米線憶阻器做出的人工神經元，在約 60 mV、1.7 nA 就會切換，訊號振幅、脈衝能耗、時間特性與頻率響應全都落在生物範圍內。\n" +
      "意義：首次讓人工神經元在「參數量級」上與真實神經元對得上，可望直接與活細胞溝通。",
    link: "https://doi.org/10.1038/s41467-025-63640-7",
    pdf: "",
  },
];

// 供 index.html 讀取 / expose to the page
if (typeof window !== "undefined") window.LITERATURE = LITERATURE;
