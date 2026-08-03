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

  /* =================================================================
   * 專題：AI 神經元 × 人腦神經元
   * Theme: Artificial neurons vs. biological neurons
   * 主線問題：「看到特定圖片就發放的單一神經元」在人腦與人工網路中
   *           各自是什麼？兩者的類比可以推到多遠？
   * 導讀請見 ai-neuron-brain-analogy.md
   * ================================================================= */

  /* ---------- A. 人腦的單一神經元選擇性 ---------- */
  {
    title: "Receptive fields, binocular interaction and functional architecture in the cat's visual cortex",
    authors: "Hubel, D. H., & Wiesel, T. N.",
    year: 1962,
    journal: "The Journal of Physiology, 160(1), 106–154",
    topic: "人腦單一神經元",
    tags: ["single-unit", "V1", "receptive-field", "hierarchy", "classic", "AI-brain"],
    summary:
      "貓 V1 的單一細胞對特定「朝向的線條」選擇性放電，並區分 simple / complex cell，提出由簡到繁的階層式建構假說。\n這是「特定刺激 → 特定神經元」最早的嚴謹證據，也是後來 Neocognitron 與 CNN 卷積+池化架構的直接靈感來源。要談 AI 與人腦的類比，這篇是起點。",
    link: "https://doi.org/10.1113/jphysiol.1962.sp006837",
    pdf: "",
  },
  {
    title: "Single Units and Sensation: A Neuron Doctrine for Perceptual Psychology?",
    authors: "Barlow, H. B.",
    year: 1972,
    journal: "Perception, 1(4), 371–394",
    topic: "人腦單一神經元",
    tags: ["neuron-doctrine", "sparse-coding", "grandmother-cell", "theory", "classic", "AI-brain"],
    summary:
      "提出「神經元學說」式的知覺理論：感知經驗對應到少數高階神經元的活動，而非大量神經元的平均。所謂 grandmother cell（祖母細胞）辯論由此定調。\nBarlow 主張的是「稀疏但非唯一」的編碼，常被後人簡化誤讀；讀本篇可校正對『一個概念一個神經元』的粗糙印象。",
    link: "https://doi.org/10.1068/p010371",
    pdf: "",
  },
  {
    title: "The Fusiform Face Area: A Module in Human Extrastriate Cortex Specialized for Face Perception",
    authors: "Kanwisher, N., McDermott, J., & Chun, M. M.",
    year: 1997,
    journal: "The Journal of Neuroscience, 17(11), 4302–4311",
    topic: "人腦單一神經元",
    tags: ["FFA", "face-perception", "fMRI", "functional-specialization", "classic", "AI-brain"],
    summary:
      "以 fMRI 找出梭狀迴面孔區 (FFA)：對人臉的反應顯著高於各類控制刺激，且不能用低階視覺特徵或注意力解釋。\n區域層次的「特定刺激 → 特定腦區」證據。後續 Dobs et al. (2022) 證明同樣的分化會在 AI 網路中自發出現，兩篇適合對照閱讀。",
    link: "https://doi.org/10.1523/JNEUROSCI.17-11-04302.1997",
    pdf: "",
  },
  {
    title: "Invariant visual representation by single neurons in the human brain",
    authors: "Quiroga, R. Q., Reddy, L., Kreiman, G., Koch, C., & Fried, I.",
    year: 2005,
    journal: "Nature, 435(7045), 1102–1107",
    topic: "人腦單一神經元",
    tags: ["concept-cell", "Jennifer-Aniston-neuron", "MTL", "invariance", "sparse-coding", "landmark", "AI-brain"],
    summary:
      "本專題的核心文獻。在癲癇病人的內側顳葉 (MTL) 植入電極，發現單一神經元會對「某個特定人物或地標」的各種不同照片一致發放——著名的 Jennifer Aniston 神經元、Halle Berry 神經元、比薩斜塔神經元。\n關鍵在於「不變性 (invariance)」：不同角度、髮型、服裝、甚至只是寫著名字的文字，都能觸發同一顆細胞；而換成別人的照片則幾乎不放電。作者主張這是一種稀疏、外顯、抽象的編碼，是把知覺轉為長期記憶的中介。\n這正是使用者問題裡「看到特定的圖片就有特定的神經元」的原始出處，也是所有 AI 類比論述的比較基準。",
    link: "https://doi.org/10.1038/nature03687",
    pdf: "",
  },
  {
    title: "Explicit Encoding of Multimodal Percepts by Single Neurons in the Human Brain",
    authors: "Quian Quiroga, R., Kraskov, A., Koch, C., & Fried, I.",
    year: 2009,
    journal: "Current Biology, 19(15), 1308–1313",
    topic: "人腦單一神經元",
    tags: ["concept-cell", "multimodal", "MTL", "abstraction", "AI-brain"],
    summary:
      "同一顆 MTL 概念細胞，不只對某人的照片放電，對「寫出來的名字」和「唸出來的聲音」也放電。跨模態、跨表徵形式的抽象概念編碼。\n這篇是與 AI 對照時最關鍵的一塊拼圖：CLIP 的多模態神經元 (Goh et al., 2021) 與 Claude 的「金門大橋」特徵 (Templeton et al., 2024) 展現的正是同一種跨模態一致性。",
    link: "https://www.sciencedirect.com/science/article/pii/S0960982209013773",
    pdf: "",
  },
  {
    title: "Concept cells: the building blocks of declarative memory functions",
    authors: "Quian Quiroga, R.",
    year: 2012,
    journal: "Nature Reviews Neuroscience, 13(8), 587–597",
    topic: "人腦單一神經元",
    tags: ["concept-cell", "declarative-memory", "review", "sparse-coding", "AI-brain"],
    summary:
      "概念細胞研究的權威回顧。整理選擇性、稀疏性、不變性的量化證據，並論證這些細胞的功能不是「辨識」而是「記憶」：建立概念間的聯結、支撐情節記憶與意識流。\n重要澄清：概念細胞不是祖母細胞。估計每個概念由約百萬分之一到萬分之一的 MTL 細胞群共同表徵，而且每顆細胞也會對數個有關聯的概念反應——是稀疏分散碼，不是一對一。",
    link: "https://doi.org/10.1038/nrn3251",
    pdf: "",
  },
  {
    title: "The Code for Facial Identity in the Primate Brain",
    authors: "Chang, L., & Tsao, D. Y.",
    year: 2017,
    journal: "Cell, 169(6), 1013–1028.e14",
    topic: "人腦單一神經元",
    tags: ["face-code", "axis-coding", "population-code", "IT-cortex", "decoding", "AI-brain"],
    summary:
      "獼猴面孔區細胞並非各自代表某張臉，而是各自編碼「臉部特徵空間」中的一個線性軸；約 200 顆細胞的反應就足以幾乎完美重建出受試者看到的臉。\n與概念細胞形成強烈對比，也是理解 AI 表徵的好模型：單一單元 ≈ 一個座標軸（方向），概念 = 高維空間中的向量。這與 mechanistic interpretability 的「特徵即方向」假設高度呼應。",
    link: "https://doi.org/10.1016/j.cell.2017.05.011",
    pdf: "",
  },
  {
    title: "A map of object space in primate inferotemporal cortex",
    authors: "Bao, P., She, L., McGill, M., & Tsao, D. Y.",
    year: 2020,
    journal: "Nature, 583(7814), 103–108",
    topic: "人腦單一神經元",
    tags: ["object-space", "IT-cortex", "topography", "population-code", "AI-brain"],
    summary:
      "把上述「軸編碼」推廣到整個下顳葉：IT 皮質是一張連續的「物體空間地圖」，網路特徵的前兩個主成分（尖銳 vs 圓滑、有生命 vs 無生命）就能預測腦區的空間排列。\n說明高階視覺的組織原則可能是幾何性的、連續的，而非一格一類的離散標籤。",
    link: "https://doi.org/10.1038/s41586-020-2350-5",
    pdf: "",
  },
  {
    title: "Semantic Tuning of Single Neurons in the Human Medial Temporal Lobe",
    authors: "(bioRxiv preprint)",
    year: 2025,
    journal: "bioRxiv, 2025.10.21.682935",
    topic: "人腦單一神經元",
    tags: ["concept-cell", "semantic-tuning", "embeddings", "closed-loop", "preprint", "AI-brain"],
    summary:
      "用語言模型的語意嵌入 (embeddings) 當作「概念距離」的度量，在錄製當下即時挑選語意相似度受控的新概念，畫出概念細胞的語意調諧曲線 (semantic tuning curve)。\n方法學上的轉折點：AI 表徵不再只是被拿來與大腦比較，而是成為設計神經科學實驗的工具。留意這是預印本，結論待同儕審查。",
    link: "https://doi.org/10.1101/2025.10.21.682935",
    pdf: "",
  },

  /* ---------- B. AI 網路裡的「神經元」 ---------- */
  {
    title: "Neocognitron: A self-organizing neural network model for a mechanism of pattern recognition unaffected by shift in position",
    authors: "Fukushima, K.",
    year: 1980,
    journal: "Biological Cybernetics, 36(4), 193–202",
    topic: "AI 神經元",
    tags: ["neocognitron", "CNN-precursor", "shift-invariance", "bio-inspired", "classic", "AI-brain"],
    summary:
      "直接把 Hubel & Wiesel 的 simple/complex cell 階層搬進機器：S-cell 抽取特徵、C-cell 賦予位置不變性，層層堆疊後高層單元對特定圖形（如手寫數字）選擇性反應。\nCNN 的直系祖先。它證明了「特定圖片 → 特定人工神經元」不是意外，而是階層式架構加上不變性池化的自然產物。",
    link: "https://doi.org/10.1007/BF00344251",
    pdf: "",
  },
  {
    title: "Building high-level features using large scale unsupervised learning",
    authors: "Le, Q. V., Ranzato, M., Monga, R., Devin, M., Chen, K., Corrado, G. S., Dean, J., & Ng, A. Y.",
    year: 2012,
    journal: "ICML 2012 (arXiv:1112.6209)",
    topic: "AI 神經元",
    tags: ["cat-neuron", "unsupervised", "sparse-autoencoder", "emergence", "landmark", "AI-brain"],
    summary:
      "著名的「Google 貓神經元」論文。用 1,000 台機器對 1,000 萬張未標註 YouTube 影像訓練九層稀疏自編碼器，事後檢查發現網路自己長出了對貓臉、人臉、人體高度選擇性的單一單元——完全沒有任何標籤告訴它「貓」是什麼。\n這是媒體上「AI 也有祖母細胞」說法的源頭。對照 Quiroga (2005)：選擇性可以在沒有監督訊號下從統計結構中自發浮現，這件事本身就對人腦如何獲得概念細胞有理論意涵。",
    link: "https://arxiv.org/abs/1112.6209",
    pdf: "",
  },
  {
    title: "Object Detectors Emerge in Deep Scene CNNs",
    authors: "Zhou, B., Khosla, A., Lapedriza, A., Oliva, A., & Torralba, A.",
    year: 2015,
    journal: "ICLR 2015 (arXiv:1412.6856)",
    topic: "AI 神經元",
    tags: ["emergence", "object-detector", "scene-recognition", "unit-visualization", "AI-brain"],
    summary:
      "只訓練網路做「場景分類」（臥室、街道…），卻在中間層長出對床、燈、人、車有明確選擇性的單元——物件偵測器是分類任務的副產品，不需要另外教。\n對應到腦：功能專化可能是任務最佳化的自然結果，而非天生的模組設定。與 Dobs et al. (2022) 是同一個論證脈絡。",
    link: "https://arxiv.org/abs/1412.6856",
    pdf: "",
  },
  {
    title: "Learning to Generate Reviews and Discovering Sentiment",
    authors: "Radford, A., Jozefowicz, R., & Sutskever, I.",
    year: 2017,
    journal: "arXiv:1704.01444",
    topic: "AI 神經元",
    tags: ["sentiment-neuron", "language-model", "single-unit", "causal-intervention", "AI-brain"],
    summary:
      "「情緒神經元」：4096 單元的 mLSTM 只被訓練來預測 Amazon 評論的下一個位元組，卻出現一個單一單元幾乎完美追蹤正負情緒，單靠它就能達到當時的 SOTA。\n重點在因果性：把該單元的值固定為正或負，模型就會生成對應情緒的文字。這比單純「相關」更接近神經科學的刺激-記錄-干擾三部曲，也是語言模型版的『概念細胞』最早案例。",
    link: "https://arxiv.org/abs/1704.01444",
    pdf: "",
  },
  {
    title: "Feature Visualization",
    authors: "Olah, C., Mordvintsev, A., & Schubert, L.",
    year: 2017,
    journal: "Distill",
    topic: "AI 神經元",
    tags: ["feature-visualization", "interpretability", "activation-maximization", "method", "AI-brain"],
    summary:
      "方法論基石：用梯度上升合成「最能讓某個單元興奮的圖像」，把人工神經元的偏好可視化。討論了正則化、多樣性、以及單元的多義性問題。\n方法上與神經科學的 Ponce et al. (2019)、Bashivan et al. (2019)「合成最佳刺激」完全同構——同一套邏輯分別用在矽神經元與生物神經元上。",
    link: "https://distill.pub/2017/feature-visualization/",
    pdf: "",
  },
  {
    title: "Network Dissection: Quantifying Interpretability of Deep Visual Representations",
    authors: "Bau, D., Zhou, B., Khosla, A., Oliva, A., & Torralba, A.",
    year: 2017,
    journal: "CVPR 2017 (arXiv:1704.05796)",
    topic: "AI 神經元",
    tags: ["network-dissection", "interpretability", "unit-level", "quantitative", "AI-brain"],
    summary:
      "把「某個單元代表什麼概念」變成可量化的問題：拿密集標註的概念資料集 (Broden) 對齊每個卷積單元的活化圖，算 IoU，統計整個網路有多少單元能對應到人類可命名的概念。\n讓「AI 有沒有某某神經元」從軼事式舉例，升級為可重複、可比較的測量。",
    link: "https://arxiv.org/abs/1704.05796",
    pdf: "",
  },
  {
    title: "Zoom In: An Introduction to Circuits",
    authors: "Olah, C., Cammarata, N., Schubert, L., Goh, G., Petrov, M., & Carter, S.",
    year: 2020,
    journal: "Distill",
    topic: "AI 神經元",
    tags: ["circuits", "mechanistic-interpretability", "curve-detector", "universality", "AI-brain"],
    summary:
      "提出三個主張：(1) 特徵是網路的基本單位；(2) 特徵之間由權重構成可讀的迴路；(3) 普適性——不同架構、不同訓練會長出相同的特徵（如曲線偵測器、高低頻偵測器）。\n第 (3) 點最值得心理學讀者注意：如果不同的網路、甚至生物視覺系統都收斂到同樣的低階特徵，那這些特徵反映的是自然影像的統計結構，而非任何特定實作。",
    link: "https://distill.pub/2020/circuits/zoom-in/",
    pdf: "",
  },
  {
    title: "Understanding the role of individual units in a deep neural network",
    authors: "Bau, D., Zhu, J.-Y., Strobelt, H., Lapedriza, A., Zhou, B., & Torralba, A.",
    year: 2020,
    journal: "PNAS, 117(48), 30071–30078",
    topic: "AI 神經元",
    tags: ["causal-intervention", "ablation", "GAN", "unit-level", "interpretability", "AI-brain"],
    summary:
      "不只看單元「對什麼有反應」，還做因果實驗：關掉分類網路中的某些單元，特定類別的辨識就崩壞；在 GAN 中開關對應「樹」的單元，生成影像裡的樹就會出現或消失。\n這是 AI 版的「損傷研究 (lesion study)」，把可解釋性從相關推進到因果，方法上直接對應神經心理學的病灶邏輯。",
    link: "https://doi.org/10.1073/pnas.1907375117",
    pdf: "",
  },
  {
    title: "Multimodal Neurons in Artificial Neural Networks",
    authors: "Goh, G., Cammarata, N., Voss, C., Carter, S., Petrov, M., Schubert, L., Radford, A., & Olah, C.",
    year: 2021,
    journal: "Distill",
    topic: "AI 神經元",
    tags: ["CLIP", "multimodal-neuron", "concept-cell-analogy", "typographic-attack", "landmark", "AI-brain"],
    summary:
      "本專題的另一支柱，也是「AI 概念細胞」最直接的證據。在 CLIP 中找到對同一概念的照片、素描、雕像、甚至寫著該詞的文字都會反應的單一神經元：蜘蛛人神經元、耶穌神經元、川普神經元、地區神經元、季節神經元、情緒神經元。\n作者明白地把它與 Quiroga 的概念細胞並列，主張這是抽象概念的跨模態不變表徵。\n附帶一個經典後果：typographic attack——在蘋果上貼一張寫著「iPod」的紙條，CLIP 就把它分類成 iPod。抽象化能力與脆弱性是一體兩面。",
    link: "https://distill.pub/2021/multimodal-neurons/",
    pdf: "",
  },
  {
    title: "Multimodal Neurons in Pretrained Text-Only Transformers",
    authors: "Schwettmann, S., Chowdhury, N., Klein, S., Bau, D., & Torralba, A.",
    year: 2023,
    journal: "ICCV 2023 Workshops (arXiv:2308.01544)",
    topic: "AI 神經元",
    tags: ["multimodal-neuron", "transformer", "cross-modal", "causal", "AI-brain"],
    summary:
      "把凍結的純文字 Transformer 接上視覺編碼器後，發現其內部本來就存在會被特定視覺概念觸發的「多模態神經元」，且這些神經元對影像描述的輸出有因果影響（消融後對應詞彙的機率下降）。\n意味著跨模態對齊不必重新學習表徵，只需把不同模態投影到既有的概念空間——對「概念是模態獨立的」這個心理學老問題是有趣的旁證。",
    link: "https://arxiv.org/abs/2308.01544",
    pdf: "",
  },
  {
    title: "Universal Neurons in GPT2 Language Models",
    authors: "Gurnee, W., Horsley, T., Guo, Z. C., Kheirkhah, T. R., Sun, Q., Hathaway, W., Nanda, N., & Bertsimas, D.",
    year: 2024,
    journal: "arXiv:2401.12181",
    topic: "AI 神經元",
    tags: ["universality", "individual-neurons", "GPT-2", "replication", "AI-brain"],
    summary:
      "用五個不同隨機種子訓練的 GPT-2 檢驗「普適性」：只有約 1–5% 的神經元在不同模型間穩定重現，這些少數的普適神經元往往有清楚可解釋的角色（如預測特定 token、抑制注意力頭）。\n對類比的降溫劑：大多數人工神經元既不普適也不單義，「找到一個某某神經元」在統計上可能是挑選偏誤。做跨系統比較時務必引用此文的節制立場。",
    link: "https://arxiv.org/abs/2401.12181",
    pdf: "",
  },
  {
    title: "Letting the neural code speak: Automated characterization of monkey visual neurons through human language",
    authors: "Lad, V., Franke, K., Rott Shaham, T., Ganguli, S., Tolias, A. S., Sanborn, S., & Karantzas, N.",
    year: 2026,
    journal: "arXiv:2605.12485",
    topic: "AI 神經元",
    tags: ["digital-twin", "closed-loop", "V1", "V4", "language-description", "preprint", "AI-brain"],
    summary:
      "用 V1/V4 的「數位孿生」模型建立閉環：把高低活化影像轉成密集描述 → 生成語意假設 → 合成驗證影像 → 在矽中檢驗。結果多數獼猴神經元的選擇性都能用一句可驗證的自然語言描述涵蓋（V1 是朝向與空間頻率，V4 則是形狀、顏色、紋理的組合）。\n報告在 V4 有 96.1% 的神經元被生成影像推上自然影像反應的 95 百分位以上。\n方向完全反轉：不再是「AI 像不像腦」，而是用 AI 可解釋性工具去自動描述真實神經元。留意這是預印本。",
    link: "https://arxiv.org/abs/2605.12485",
    pdf: "",
  },

  /* ---------- C. 編碼爭論：局部 vs 分散、單義 vs 多義 ---------- */
  {
    title: "On the Biological Plausibility of Grandmother Cells: Implications for Neural Network Theories in Psychology and Neuroscience",
    authors: "Bowers, J. S.",
    year: 2009,
    journal: "Psychological Review, 116(1), 220–251",
    topic: "編碼爭論",
    tags: ["grandmother-cell", "localist", "distributed", "PDP", "debate", "AI-brain"],
    summary:
      "正面挑戰 PDP／連結論的核心假設。Bowers 主張：單細胞紀錄的證據其實比較支持局部式 (localist) 表徵，被認為「生物上不合理」的反而是 PDP 模型學到的那種高度分散表徵。\n這是把 AI 表徵與腦表徵對照時最該先讀的一篇——它逼你講清楚「分散」到底是什麼意思。",
    link: "https://doi.org/10.1037/a0014462",
    pdf: "",
  },
  {
    title: "Locating object knowledge in the brain: Comment on Bowers's (2009) attempt to revive the grandmother cell hypothesis",
    authors: "Plaut, D. C., & McClelland, J. L.",
    year: 2010,
    journal: "Psychological Review, 117(1), 284–288",
    topic: "編碼爭論",
    tags: ["distributed", "PDP", "commentary", "debate", "AI-brain"],
    summary:
      "PDP 陣營的回應：稀疏且高度選擇性的反應，與分散式表徵並不矛盾；關鍵在於表徵是否由多個單元的模式共同承載、以及是否具備相似性結構所支持的類化能力。\n與 Bowers (2009) 對讀，可以清楚看到「局部 vs 分散」其實是一條連續光譜而非二選一。",
    link: "https://pubmed.ncbi.nlm.nih.gov/20063976/",
    pdf: "",
  },
  {
    title: "The importance of mixed selectivity in complex cognitive tasks",
    authors: "Rigotti, M., Barak, O., Warden, M. R., Wang, X.-J., Daw, N. D., Miller, E. K., & Fusi, S.",
    year: 2013,
    journal: "Nature, 497(7451), 585–590",
    topic: "編碼爭論",
    tags: ["mixed-selectivity", "PFC", "dimensionality", "population-code", "AI-brain"],
    summary:
      "前額葉神經元對多個任務變數做非線性混合的反應（混合選擇性），看似「雜亂」，實則提高表徵的維度，讓下游能以簡單線性讀出處理更多任務組合；混合選擇性下降時，猴子就會出錯。\n這是生物端的「多義神經元」：不可解讀的單一細胞反應可能是計算上的優點。與 AI 的 superposition 理論 (Elhage et al., 2022) 構成漂亮的雙向對照。",
    link: "https://doi.org/10.1038/nature12160",
    pdf: "",
  },
  {
    title: "Toy Models of Superposition",
    authors: "Elhage, N., Hume, T., Olsson, C., Schiefer, N., Henighan, T., … Olah, C.",
    year: 2022,
    journal: "Transformer Circuits Thread (arXiv:2209.10652)",
    topic: "編碼爭論",
    tags: ["superposition", "polysemanticity", "theory", "mechanistic-interpretability", "AI-brain"],
    summary:
      "解釋了為什麼多數人工神經元「看起來很雜」：當特徵稀疏時，網路會把遠多於神經元數量的特徵以近似正交的方向壓進同一個空間（疊加），代價是彼此干擾。因此多義性 (polysemanticity) 是常態，單義神經元才是特例。\n直接的結論：「找到一個 X 神經元」不代表 X 就是網路的表徵單位；表徵單位是方向，不是神經元。這個修正同樣值得帶回神經科學。",
    link: "https://arxiv.org/abs/2209.10652",
    pdf: "",
  },
  {
    title: "Towards Monosemanticity: Decomposing Language Models With Dictionary Learning",
    authors: "Bricken, T., Templeton, A., Batson, J., Chen, B., Jermyn, A., … Olah, C.",
    year: 2023,
    journal: "Transformer Circuits Thread",
    topic: "編碼爭論",
    tags: ["sparse-autoencoder", "dictionary-learning", "monosemanticity", "method", "AI-brain"],
    summary:
      "用稀疏自編碼器 (SAE) 把多義的神經元活動分解成大量單義的「特徵」，並證明這些特徵比原始神經元更可解釋、更能被因果操弄。\n若疊加理論成立，這就是找出正確分析單位的方法。方法學上，這相當於神經科學從單細胞紀錄轉向群體解碼所走過的路。",
    link: "https://transformer-circuits.pub/2023/monosemantic-features/index.html",
    pdf: "",
  },
  {
    title: "Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet",
    authors: "Templeton, A., Conerly, T., Marcus, J., Lindsey, J., Bricken, T., … Henighan, T.",
    year: 2024,
    journal: "Transformer Circuits Thread",
    topic: "編碼爭論",
    tags: ["sparse-autoencoder", "feature-steering", "multimodal", "Golden-Gate-Bridge", "large-model", "AI-brain"],
    summary:
      "在正式的大型模型 (Claude 3 Sonnet) 上抽出數千萬個特徵。著名的「金門大橋」特徵會被英文描述、日文韓文俄文的說法、以及大橋的圖片一致觸發——跨語言且跨模態，儘管模型主要以文字訓練。\n更關鍵的是因果操弄：把該特徵強制放大 10 倍，模型就開始堅稱自己是金門大橋 (Golden Gate Claude)。\n這是與 Quiroga (2009) 跨模態概念細胞最貼切的當代對照，而且干擾實驗在 AI 上做得到、在人腦上做不到。",
    link: "https://transformer-circuits.pub/2024/scaling-monosemanticity/",
    pdf: "",
  },
  {
    title: "Mixed selectivity: when neurons stopped looking like specialists",
    authors: "(Nature Reviews Neuroscience, Milestone/Review)",
    year: 2025,
    journal: "Nature Reviews Neuroscience",
    topic: "編碼爭論",
    tags: ["mixed-selectivity", "review", "population-code", "history", "AI-brain"],
    summary:
      "回顧「單一神經元是專才」這個觀點如何被混合選擇性與群體編碼取代的歷程。適合當作本專題爭論線的收尾閱讀，幫助把 1972 年的 Barlow 到 2020 年代的 superposition 串成一條線。",
    link: "https://www.nature.com/articles/s41583-025-01009-x",
    pdf: "",
  },

  /* ---------- D. AI 與大腦的定量對應 ---------- */
  {
    title: "Performance-optimized hierarchical models predict neural responses in higher visual cortex",
    authors: "Yamins, D. L. K., Hong, H., Cadieu, C. F., Solomon, E. A., Seibert, D., & DiCarlo, J. J.",
    year: 2014,
    journal: "PNAS, 111(23), 8619–8624",
    topic: "AI–大腦對應",
    tags: ["encoding-model", "IT-cortex", "V4", "goal-driven", "landmark", "AI-brain"],
    summary:
      "類比研究的分水嶺。只以「物體辨識表現」為目標最佳化的階層模型，未經任何神經資料約束，卻能高度預測獼猴 V4 與 IT 的單細胞反應——而且模型表現越好，對 IT 的預測越準。\n提出 goal-driven modeling 的核心論證：任務目標 + 架構限制 + 資料統計，就足以逼出腦一樣的表徵。這是「AI 像人腦」最有力的量化證據。",
    link: "https://doi.org/10.1073/pnas.1403112111",
    pdf: "",
  },
  {
    title: "Deep Supervised, but Not Unsupervised, Models May Explain IT Cortical Representation",
    authors: "Khaligh-Razavi, S.-M., & Kriegeskorte, N.",
    year: 2014,
    journal: "PLoS Computational Biology, 10(11), e1003915",
    topic: "AI–大腦對應",
    tags: ["RSA", "IT-cortex", "model-comparison", "representational-geometry", "AI-brain"],
    summary:
      "用表徵相似性分析 (RSA) 比較 37 個模型與人／猴 IT 的表徵幾何，發現只有深度監督式 CNN 的高層能逼近 IT 的表徵結構，且再經類別加權後可完全解釋。\n提供了與 Yamins et al. (2014) 互補的方法論：不比對單一神經元，而是比對「刺激之間的相似性結構」——這對心理學研究者往往更好操作。",
    link: "https://doi.org/10.1371/journal.pcbi.1003915",
    pdf: "",
  },
  {
    title: "Deep Neural Networks: A New Framework for Modeling Biological Vision and Brain Information Processing",
    authors: "Kriegeskorte, N.",
    year: 2015,
    journal: "Annual Review of Vision Science, 1, 417–446",
    topic: "AI–大腦對應",
    tags: ["review", "framework", "vision", "modeling", "AI-brain"],
    summary:
      "把深度網路定位為大腦資訊處理的理論語言的經典回顧，說明為何「工程上有效的模型」可以同時是「科學上可檢驗的假說」，以及需要哪些檢驗標準。適合作為本專題的入門總覽。",
    link: "https://doi.org/10.1146/annurev-vision-082114-035447",
    pdf: "",
  },
  {
    title: "Evolving Images for Visual Neurons Using a Deep Generative Network Reveals Coding Principles and Neuronal Preferences",
    authors: "Ponce, C. R., Xiao, W., Schade, P. F., Hartmann, T. S., Kreiman, G., & Livingstone, M. S.",
    year: 2019,
    journal: "Cell, 177(4), 999–1009.e10",
    topic: "AI–大腦對應",
    tags: ["closed-loop", "generative-network", "XDREAM", "IT-cortex", "activation-maximization", "AI-brain"],
    summary:
      "閉環實驗：以生成網路產生影像 → 記錄猴子 IT 神經元反應 → 用遺傳演算法演化出讓該神經元放電最強的圖像，不預設任何類別假設。演化出的合成影像常常比任何自然照片更能驅動該細胞，且呈現形狀、顏色、紋理的複雜組合。\n這是 AI 的 feature visualization (Olah et al., 2017) 直接搬到活體神經元上。要回答「這顆神經元到底喜歡什麼圖片」，這是目前最強的方法。",
    link: "https://doi.org/10.1016/j.cell.2019.04.005",
    pdf: "",
  },
  {
    title: "Neural population control via deep image synthesis",
    authors: "Bashivan, P., Kar, K., & DiCarlo, J. J.",
    year: 2019,
    journal: "Science, 364(6439), eaav9436",
    topic: "AI–大腦對應",
    tags: ["neural-control", "V4", "image-synthesis", "causal", "strong-test", "AI-brain"],
    summary:
      "把「模型像腦」推到最強的檢驗：用 CNN 模型合成影像，去精準控制猴子 V4 的神經活動——不僅能把目標神經元推超過任何自然影像所能引發的水準，還能在感受野重疊的情況下獨立操控整個群體（一個開、旁邊關）。\n若模型只是表面相似，這種操控不可能成功。這是類比論證中「預測 → 控制」的關鍵一步。",
    link: "https://doi.org/10.1126/science.aav9436",
    pdf: "",
  },
  {
    title: "Integrative Benchmarking to Advance Neurally Mechanistic Models of Human Intelligence",
    authors: "Schrimpf, M., Kubilius, J., Lee, M. J., Murty, N. A. R., Ajemian, R., & DiCarlo, J. J.",
    year: 2020,
    journal: "Neuron, 108(3), 413–423",
    topic: "AI–大腦對應",
    tags: ["Brain-Score", "benchmark", "model-comparison", "open-science", "AI-brain"],
    summary:
      "Brain-Score 平台：把「這個模型有多像大腦」變成可公開比較的分數，整合 V1、V2、V4、IT 的神經預測與行為一致性等上百項基準。\n實務價值高——要主張某模型「像人腦」，先去 Brain-Score 查它在哪些基準上像、哪些不像，避免用單一相關係數說故事。",
    link: "https://doi.org/10.1016/j.neuron.2020.07.040",
    pdf: "",
  },
  {
    title: "Convolutional Neural Networks as a Model of the Visual System: Past, Present, and Future",
    authors: "Lindsay, G. W.",
    year: 2021,
    journal: "Journal of Cognitive Neuroscience, 33(10), 2017–2031",
    topic: "AI–大腦對應",
    tags: ["review", "CNN", "visual-system", "critique", "history", "AI-brain"],
    summary:
      "平衡且好讀的回顧：CNN 從生物靈感到成為視覺系統模型的歷史、目前對得上與對不上的地方、以及未來方向。作者對過度詮釋保持警覺，是寫文獻回顧時很好的引用框架。",
    link: "https://doi.org/10.1162/jocn_a_01544",
    pdf: "",
  },
  {
    title: "Brain-like functional specialization emerges spontaneously in deep neural networks",
    authors: "Dobs, K., Martinez, J., Kell, A. J. E., & Kanwisher, N.",
    year: 2022,
    journal: "Science Advances, 8(11), eabl8913",
    topic: "AI–大腦對應",
    tags: ["functional-specialization", "face-processing", "emergence", "modularity", "AI-brain"],
    summary:
      "同時訓練網路做人臉辨識與一般物體辨識，網路會自發分離成兩個幾乎不重疊的子系統；而且只訓練其中一項的網路，做另一項會很差。\n對「大腦為何有 FFA 這種專門模組」給出計算層次的解答：專化不必預先寫死，它是最佳化兩個需求不同的任務時的自然結果。與 Kanwisher et al. (1997) 對讀效果最好。",
    link: "https://doi.org/10.1126/sciadv.abl8913",
    pdf: "",
  },
  {
    title: "The neuroconnectionist research programme",
    authors: "Doerig, A., Sommers, R. P., Seeliger, K., Richards, B., Ismael, J., Lindsay, G. W., Kording, K. P., Konkle, T., van Gerven, M. A. J., Kriegeskorte, N., & Kietzmann, T. C.",
    year: 2023,
    journal: "Nature Reviews Neuroscience, 24(7), 431–450",
    topic: "AI–大腦對應",
    tags: ["philosophy-of-science", "Lakatos", "framework", "review", "AI-brain"],
    summary:
      "以 Lakatos 的研究綱領觀點，主張不該用「現有某個 ANN 對不對」來評斷整個取徑，而該問這個綱領是否持續產出可否證的預測。\n寫論文討論「AI 與人腦的類比可以推到多遠」時，這篇提供最紮實的科學哲學框架，避免落入單純的「像／不像」爭論。",
    link: "https://doi.org/10.1038/s41583-023-00705-w",
    pdf: "",
  },

  /* ---------- E. 差異、反例與方法學警訊 ---------- */
  {
    title: "ImageNet-trained CNNs are biased towards texture; increasing shape bias improves accuracy and robustness",
    authors: "Geirhos, R., Rubisch, P., Michaelis, C., Bethge, M., Wichmann, F. A., & Brendel, W.",
    year: 2019,
    journal: "ICLR 2019 (arXiv:1811.12231)",
    topic: "模型與人腦差異",
    tags: ["texture-bias", "shape-bias", "divergence", "psychophysics", "AI-brain"],
    summary:
      "人類靠形狀辨識物體，ImageNet CNN 卻主要靠紋理：把貓的形狀貼上大象皮膚紋理，網路說是大象、人說是貓。\n提醒我們：即使模型能高度預測 IT 的反應，它所依賴的特徵仍可能與人類截然不同。相關性高 ≠ 機制相同。",
    link: "https://arxiv.org/abs/1811.12231",
    pdf: "",
  },
  {
    title: "Controversial stimuli: Pitting neural networks against each other as models of human cognition",
    authors: "Golan, T., Raju, P. C., & Kriegeskorte, N.",
    year: 2020,
    journal: "PNAS, 117(47), 29330–29337",
    topic: "模型與人腦差異",
    tags: ["controversial-stimuli", "model-comparison", "method", "falsification", "AI-brain"],
    summary:
      "方法學利器：合成「讓不同模型給出互相矛盾判斷」的影像，再問人類看到什麼——一次實驗就能有效地否證掉一批模型。\n比起「哪個模型相關係數高」，這是更接近實驗心理學精神的強推論設計，很適合借來設計自己的研究。",
    link: "https://doi.org/10.1073/pnas.1912334117",
    pdf: "",
  },
  {
    title: "Deep problems with neural network models of human vision",
    authors: "Bowers, J. S., Malhotra, G., Dujmović, M., Llera Montero, M., Tsvetkov, C., Biscione, V., … Blything, R.",
    year: 2023,
    journal: "Behavioral and Brain Sciences, 46, e385",
    topic: "模型與人腦差異",
    tags: ["critique", "target-article", "benchmark-critique", "debate", "AI-brain"],
    summary:
      "系統性批判：作者主張目前主流以「預測神經／行為資料的分數」為評判標準的做法，會讓明顯不像人類的模型也拿高分；真正該做的是用心理學的關鍵操弄逐項檢驗（如遮蔽、Gestalt、形狀優先）。\nBBS 標靶論文，附大量同儕評論與作者回應，是要平衡引用「AI 像人腦」時的必讀對照。",
    link: "https://doi.org/10.1017/S0140525X22002813",
    pdf: "",
  },
  {
    title: "Model metamers reveal divergent invariances between biological and artificial neural networks",
    authors: "Feather, J., Leclerc, G., Mądry, A., & McDermott, J. H.",
    year: 2023,
    journal: "Nature Neuroscience, 26, 2017–2034",
    topic: "模型與人腦差異",
    tags: ["metamer", "invariance", "divergence", "vision", "audition", "AI-brain"],
    summary:
      "合成「模型 metamer」——在模型某一層的活化與自然刺激完全相同的影像／聲音。若模型與人類的不變性相同，人類看到它們也該覺得是同一類；結果是從高層生成的 metamer 對人類完全無法辨識。\n最直接的反證之一：即便神經預測分數很高，模型仍學到大量人類沒有的「特異不變性」。談類比時應與 Yamins (2014)、Bashivan (2019) 並列引用。",
    link: "https://doi.org/10.1038/s41593-023-01442-0",
    pdf: "",
  },
];

// 供 index.html 讀取 / expose to the page
if (typeof window !== "undefined") window.LITERATURE = LITERATURE;
