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
    title: "The Role of Self-compassion in Romantic Relationships",
    authors: "Neff, K. D., & Beretvas, S. N.",
    year: 2013,
    journal: "Self and Identity, 12(1), 78–98",
    topic: "人際與親密關係",
    tags: ["self-compassion", "romantic-relationships", "dyadic-data", "self-esteem", "attachment"],
    summary:
      "問題：對自己慈悲會不會讓人變得自我中心、忽略伴侶？並比較自我疼惜 vs. 自尊 vs. 依附風格，何者更能預測關係中的實際行為。\n\n方法：104 對伴侶（交往平均約 4 年）。關鍵設計是配對資料——本人自陳自我疼惜（Self-Compassion Scale, 26 題），而「在關係中的行為表現」由伴侶評定，藉此避開共同方法變異。另測關係滿意度與關係中的真實感／表達意見，並納入 Rosenberg 自尊與成人依附作為比較變項；也請伴侶反過來評估對方的自我疼惜程度。分析看的是增值效度：控制自尊與依附後，自我疼惜是否仍能獨立預測伴侶回報的行為。\n\n結果：自我疼惜高者被伴侶描述為更能情感連結、接納、支持自主，且較少疏離、控制與言語／肢體攻擊；其預測力優於自尊與依附風格。伴侶對其自我疼惜程度的評估與自陳相符，顯示這是可被觀察的特質。\n\n限制：橫斷面相關研究，非因果；以自陳量表為主；美國社區伴侶樣本，跨文化外推需保守。",
    link: "https://doi.org/10.1080/15298868.2011.639548",
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
];

// 供 index.html 讀取 / expose to the page
if (typeof window !== "undefined") window.LITERATURE = LITERATURE;
