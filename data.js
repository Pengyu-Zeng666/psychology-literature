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

  /* ---------------------------------------------------------------
   * AI × 神經科學：奠基經典
   * 注意：本區塊不受「IF > 10」條件限制。多數為 1940–2000 年代的
   * 奠基之作，當年沒有 IF 制度，或發表於 IF 偏低但領域內必讀的期刊
   * (如 J Physiol、PLoS Comput Biol)。每筆的 journal 欄位已標註 IF 狀態。
   * ------------------------------------------------------------- */

  {
    title: "Pyramidal neuron as two-layer neural network",
    authors: "Poirazi, P., Brannon, T., & Mel, B. W.",
    year: 2003,
    journal: "Neuron, 37(6), 989–999（IF ≈ 15）",
    topic: "AI×神經科學經典",
    tags: ["dendrite", "single-neuron-computation", "two-layer", "classic", "IF>10"],
    summary:
      "Beniaguev (2021) 的直接前身，也是「一顆神經元等於幾層網路」這條研究線的起點。\n" +
      "用海馬迴 CA1 錐體細胞的詳細分室模型，發現其放電率可以用一個簡單公式預測：把細胞的物理結構對應到一個「兩層」抽象神經網路——末端樹突各自是獨立的 sigmoid 次單元 (subunit)，再由胞體加總。\n" +
      "首次把生物神經元明確翻譯成人工網路的語言。",
    link: "https://doi.org/10.1016/S0896-6273(03)00149-1",
    pdf: "",
  },
  {
    title: "Computational subunits in thin dendrites of pyramidal cells",
    authors: "Polsky, A., Mel, B. W., & Schiller, J.",
    year: 2004,
    journal: "Nature Neuroscience, 7(6), 621–627（IF ≈ 21）",
    topic: "AI×神經科學經典",
    tags: ["dendrite", "subunit", "electrophysiology", "classic", "IF>10"],
    summary:
      "Poirazi (2003) 的實驗驗證：用雙光子影像加上多點局部施藥，證實同一條細樹突內的輸入會 sigmoid 式加總，不同樹突之間則近似線性相加。\n" +
      "即「樹突 = 獨立運算次單元」的直接生理證據，把兩層模型從模擬推到實測。",
    link: "https://doi.org/10.1038/nn1253",
    pdf: "",
  },
  {
    title: "Dendritic computation",
    authors: "London, M., & Häusser, M.",
    year: 2005,
    journal: "Annual Review of Neuroscience, 28, 503–532（IF ≈ 12）",
    topic: "AI×神經科學經典",
    tags: ["review", "dendrite", "single-neuron-computation", "classic", "IF>10"],
    summary:
      "樹突運算的標準回顧文獻，引用數極高。系統整理樹突能執行哪些運算：方向選擇性、重合偵測、邏輯運算、增益調控等，並討論「單一神經元究竟該視為一個點還是一個網路」。\n" +
      "要論證「人工神經元把生物神經元簡化過頭」時，這篇是最常被引用的依據。",
    link: "https://doi.org/10.1146/annurev.neuro.28.061604.135703",
    pdf: "",
  },
  {
    title: "A logical calculus of the ideas immanent in nervous activity",
    authors: "McCulloch, W. S., & Pitts, W.",
    year: 1943,
    journal: "Bulletin of Mathematical Biophysics, 5, 115–133（經典，早於 IF 制度）",
    topic: "AI×神經科學經典",
    tags: ["artificial-neuron", "foundational", "logic", "classic"],
    summary:
      "人工神經元的誕生。把神經元抽象成「全有全無」的二值邏輯閘：加權輸入超過閾值就發放。並證明這種單元組成的網路可以計算任何命題邏輯函數。\n" +
      "整個類神經網路領域的第一篇論文——今天 ANN 中「加權和 + 閾值」的形式就是從這裡來的，也是所有「AI 神經元 vs. 真實神經元」對比的原點。",
    link: "https://doi.org/10.1007/BF02478259",
    pdf: "",
  },
  {
    title: "The perceptron: A probabilistic model for information storage and organization in the brain",
    authors: "Rosenblatt, F.",
    year: 1958,
    journal: "Psychological Review, 65(6), 386–408（IF ≈ 18）",
    topic: "AI×神經科學經典",
    tags: ["perceptron", "learning-rule", "foundational", "classic", "IF>10"],
    summary:
      "感知器 (perceptron) 原始論文——而且就發表在心理學旗艦期刊 Psychological Review，是心理學與 AI 交會的歷史證據。\n" +
      "在 McCulloch-Pitts 神經元上加入「可學習的權重」與收斂的學習規則，主張大腦的資訊儲存是機率式、分散式的。\n" +
      "其局限（無法解 XOR）後來被 Minsky & Papert (1969) 指出，而 Gidon et al. (2020) 證明人類單一神經元反而做得到——形成跨越 60 年的對照。",
    link: "https://doi.org/10.1037/h0042519",
    pdf: "",
  },
  {
    title: "Receptive fields, binocular interaction and functional architecture in the cat's visual cortex",
    authors: "Hubel, D. H., & Wiesel, T. N.",
    year: 1962,
    journal: "The Journal of Physiology, 160(1), 106–154（IF < 10，1981 諾貝爾生醫獎）",
    topic: "AI×神經科學經典",
    tags: ["visual-cortex", "receptive-field", "simple-complex-cells", "foundational", "classic"],
    summary:
      "發現貓初級視覺皮質的簡單細胞 (simple cell) 與複雜細胞 (complex cell)：簡單細胞對特定方位的線段反應，複雜細胞則對位置有一定容忍度。\n" +
      "這個「特徵偵測 → 位置不變性」的階層結構，直接啟發 Fukushima 的 Neocognitron，再演變成今天 CNN 的「卷積層 + 池化層」。是生物發現形塑 AI 架構最明確的一條線。",
    link: "https://doi.org/10.1113/jphysiol.1962.sp006837",
    pdf: "",
  },
  {
    title: "Neocognitron: A self-organizing neural network model for a mechanism of pattern recognition unaffected by shift in position",
    authors: "Fukushima, K.",
    year: 1980,
    journal: "Biological Cybernetics, 36, 193–202（IF < 10）",
    topic: "AI×神經科學經典",
    tags: ["CNN", "neocognitron", "architecture", "classic"],
    summary:
      "把 Hubel & Wiesel 的簡單／複雜細胞直接實作成人工網路：S-cell 對應簡單細胞做特徵偵測，C-cell 對應複雜細胞做位置容忍。\n" +
      "這就是卷積神經網路的原型，比 LeCun 的 LeNet 早了近十年。研究 AI 與大腦的關係時，這是「神經科學啟發 AI」最乾淨的案例。",
    link: "https://doi.org/10.1007/BF00344251",
    pdf: "",
  },
  {
    title: "Neural networks and physical systems with emergent collective computational abilities",
    authors: "Hopfield, J. J.",
    year: 1982,
    journal: "PNAS, 79(8), 2554–2558（IF ≈ 9，2024 諾貝爾物理獎）",
    topic: "AI×神經科學經典",
    tags: ["hopfield-network", "associative-memory", "attractor", "classic"],
    summary:
      "Hopfield 網路：用物理學的能量地形觀點，說明簡單神經元互連後如何湧現出「聯想記憶」——從不完整的線索收斂到完整記憶模式（吸引子）。\n" +
      "把記憶視為動力系統的吸引子，這個觀念同時影響了神經科學（吸引子網路模型）與 AI。2024 年 Hopfield 與 Hinton 因此獲諾貝爾物理獎。",
    link: "https://doi.org/10.1073/pnas.79.8.2554",
    pdf: "",
  },
  {
    title: "Learning representations by back-propagating errors",
    authors: "Rumelhart, D. E., Hinton, G. E., & Williams, R. J.",
    year: 1986,
    journal: "Nature, 323, 533–536（IF ≈ 50）",
    topic: "AI×神經科學經典",
    tags: ["backpropagation", "learning-rule", "hidden-layer", "classic", "IF>10"],
    summary:
      "反向傳播演算法的經典論文，讓多層網路的隱藏層能學到有用的內部表徵，突破了 Minsky & Papert 的批評。\n" +
      "同時也是 AI 與大腦最大的分歧點：backprop 需要權重對稱與全域誤差訊號，生物上難以實現。這正是 Lillicrap et al. (2020) 那篇 Nature Reviews Neuroscience 要處理的問題。",
    link: "https://doi.org/10.1038/323533a0",
    pdf: "",
  },
  {
    title: "Emergence of simple-cell receptive field properties by learning a sparse code for natural images",
    authors: "Olshausen, B. A., & Field, D. J.",
    year: 1996,
    journal: "Nature, 381, 607–609（IF ≈ 50）",
    topic: "AI×神經科學經典",
    tags: ["sparse-coding", "unsupervised-learning", "V1", "efficient-coding", "classic", "IF>10"],
    summary:
      "只給演算法一個目標——用稀疏的方式重建自然影像——完全不給任何神經資料，結果自動長出與 V1 簡單細胞幾乎一樣的感受野（局部、帶方位、帶頻率選擇性）。\n" +
      "首次證明大腦的神經特性可以從「對自然環境統計結構的最佳化」推導出來，是 Yamins & DiCarlo「目標驅動模型」路線的思想源頭。",
    link: "https://doi.org/10.1038/381607a0",
    pdf: "",
  },
  {
    title: "Performance-optimized hierarchical models predict neural responses in higher visual cortex",
    authors: "Yamins, D. L. K., Hong, H., Cadieu, C. F., Solomon, E. A., Seibert, D., & DiCarlo, J. J.",
    year: 2014,
    journal: "PNAS, 111(23), 8619–8624（IF ≈ 9）",
    topic: "AI×神經科學經典",
    tags: ["CNN", "IT-cortex", "V4", "goal-driven", "encoding-model", "classic"],
    summary:
      "現代「深度網路 vs. 大腦」對比的奠基實證研究。訓練一個在物體辨識上達到人類水準的階層網路，完全不用神經資料做約束，卻能高度預測猴子 V4 與 IT 皮質的神經反應——且模型的辨識效能愈好，對神經反應的預測就愈準。\n" +
      "確立了核心論點：任務效能與腦相似度會一起提升。IF 略低於 10，但這條線上不可能略過的一篇。",
    link: "https://doi.org/10.1073/pnas.1403112111",
    pdf: "",
  },
  {
    title: "Deep supervised, but not unsupervised, models may explain IT cortical representation",
    authors: "Khaligh-Razavi, S.-M., & Kriegeskorte, N.",
    year: 2014,
    journal: "PLoS Computational Biology, 10(11), e1003915（IF < 10）",
    topic: "AI×神經科學經典",
    tags: ["RSA", "IT-cortex", "model-comparison", "benchmark", "classic"],
    summary:
      "與 Yamins (2014) 同年、互為印證的另一條路線：用表徵相似性分析 (RSA) 一次比較 37 個模型對 IT 皮質表徵幾何的解釋力。\n" +
      "結論是只有以百萬張標註影像做監督式訓練的深度網路最接近大腦；其他模型都抓不到大腦顯著的「有生命／無生命」與「臉／非臉」區分。是模型–大腦比較的方法學範本。",
    link: "https://doi.org/10.1371/journal.pcbi.1003915",
    pdf: "",
  },
  {
    title: "Representational similarity analysis – connecting the branches of systems neuroscience",
    authors: "Kriegeskorte, N., Mur, M., & Bandettini, P.",
    year: 2008,
    journal: "Frontiers in Systems Neuroscience, 2, 4（IF < 10）",
    topic: "AI×神經科學經典",
    tags: ["RSA", "methodology", "brain-model-comparison", "classic"],
    summary:
      "提出表徵相似性分析 (RSA) 方法：不直接比對模型單元與神經元（兩者根本無法一一對應），而是比較「刺激兩兩之間的相似性結構」。\n" +
      "這解決了 AI 與大腦對比最根本的技術障礙，讓 fMRI、單細胞紀錄與網路模型能放在同一個空間比較。IF 低，但幾乎所有相關研究都會用到，方法學必讀。",
    link: "https://doi.org/10.3389/neuro.06.004.2008",
    pdf: "",
  },
  {
    title: "Deep learning",
    authors: "LeCun, Y., Bengio, Y., & Hinton, G.",
    year: 2015,
    journal: "Nature, 521, 436–444（IF ≈ 50）",
    topic: "AI×神經科學經典",
    tags: ["review", "deep-learning", "foundational", "classic", "IF>10"],
    summary:
      "三位圖靈獎得主合寫的深度學習權威回顧。說明多層表徵學習的原理、CNN 與 RNN 的運作，以及與大腦的關聯與差距。\n" +
      "適合當作跨領域讀者的技術背景補充——寫給神經科學或心理學讀者的方法段落時，這是標準引用來源。",
    link: "https://doi.org/10.1038/nature14539",
    pdf: "",
  },
];

// 供 index.html 讀取 / expose to the page
if (typeof window !== "undefined") window.LITERATURE = LITERATURE;
