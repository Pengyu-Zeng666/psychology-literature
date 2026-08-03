# 三篇重點文獻：摘要與取得方式

主題：AI 神經元 vs. 人類神經元。三篇皆刊於 IF > 10 期刊。

> **關於摘要的可信度**：整理當下無法直接連線至出版社網站（egress policy 阻擋），
> 摘要內容經由搜尋來源重建。Gidon et al. (2020) 為逐字原文（已核對）；
> 另兩篇為結構化重點整理，非逐字引用。引用進論文前請至 DOI 頁面核對原文。

---

## 1. Gidon et al. (2020) — 人類單一神經元可解 XOR

**Dendritic action potentials and computation in human layer 2/3 cortical neurons**

Gidon, A., Zolnik, T. A., Fidzinski, P., Bolduan, F., Papoutsi, A., Poirazi, P.,
Holtkamp, M., Vida, I., & Larkum, M. E. (2020).
*Science, 367*(6473), 83–87. https://doi.org/10.1126/science.aax6239

PMID: 31896716

### Abstract（逐字原文）

> The active electrical properties of dendrites shape neuronal input and output
> and are fundamental to brain function. However, our knowledge of active
> dendrites has been almost entirely acquired from studies of rodents. In this
> work, we investigated the dendrites of layer 2 and 3 (L2/3) pyramidal neurons
> of the human cerebral cortex ex vivo. In these neurons, we discovered a class
> of calcium-mediated dendritic action potentials (dCaAPs) whose waveform and
> effects on neuronal output have not been previously described. In contrast to
> typical all-or-none action potentials, dCaAPs were graded; their amplitudes
> were maximal for threshold-level stimuli but dampened for stronger stimuli.
> These dCaAPs enabled the dendrites of individual human neocortical pyramidal
> neurons to classify linearly nonseparable inputs—a computation conventionally
> thought to require multilayered networks.

### 中文摘要

樹突的主動電學特性形塑神經元的輸入與輸出，是腦功能的根本，但既有知識幾乎全來自
齧齒類研究。本研究以離體 (ex vivo) 方式檢驗人類大腦皮質第 2/3 層錐體神經元的樹突，
發現一類前所未描述的鈣媒介樹突動作電位 (dCaAP)。

與典型「全有全無」的動作電位相反，dCaAP 是**分級的 (graded)**：振幅在閾值刺激時最大，
刺激愈強反而被抑制愈多——亦即反應函數呈倒 U 形調諧，而非單調遞增。

這個特性使**單一顆**人類新皮質錐體神經元的樹突就能分類**線性不可分**的輸入，
而這種運算過去被認為必須靠多層網路才做得到。

### 為什麼對「AI vs. 人類神經元」關鍵

Minsky & Papert (1969) 證明單層感知器無法計算 XOR，這是當年 AI 寒冬的導火線，
也是深度學習必須「疊很多層」的理論起點。本研究顯示人類神經元靠樹突的非單調反應
曲線，在單細胞層次就跨過了這道門檻。

換句話說：人工神經元 = 加權和 + 單調激活函數（ReLU、sigmoid 都是單調的）；
人類神經元 = 內建非單調、可解線性不可分問題的運算單元。兩者不是同一種東西。

### 取得全文

- 出版社（付費／機構訂閱）：https://www.science.org/doi/10.1126/science.aax6239
- PubMed 摘要：https://pubmed.ncbi.nlm.nih.gov/31896716/
- 模型程式碼（ModelDB，免費）：https://modeldb.science/260178
- 第三方實作：https://github.com/YigitDemirag/dCaAP

---

## 2. Doerig et al. (2023) — neuroconnectionism 研究綱領

**The neuroconnectionist research programme**

Doerig, A., Sommers, R. P., Seeliger, K., Richards, B., Ismael, J.,
Lindsay, G. W., Kording, K. P., Konkle, T., van Gerven, M. A. J.,
Kriegeskorte, N., & Kietzmann, T. C. (2023).
*Nature Reviews Neuroscience, 24*, 431–450.
https://doi.org/10.1038/s41583-023-00705-w

PMID: 37253949

### 摘要重點（結構化整理，非逐字）

**問題意識**：受生物啟發的人工神經網路 (ANN) 已被廣泛用來建模行為與神經資料，
作者稱此取向為 **neuroconnectionism（神經聯結論）**。ANN 一方面被譽為目前最好的
大腦訊息處理模型，另一方面又被批評無法解釋基本認知功能。

**核心主張**：爭論「某幾個現行 ANN 成功或失敗」是評估這個取向的錯誤方式。作者借用
科學哲學、特別是 **Lakatos** 的觀點——科學研究綱領的硬核 (hard core) 往往不可直接
證偽，應該用它**產生新洞見的能力**來評估。

**框架**：據此把 neuroconnectionism 定位為一個總體研究綱領，以 ANN 作為一種
「**計算語言 (computational language)**」，用來表述關於大腦運算、且可被證偽的理論。
論文說明該綱領的硬核、底層計算框架，以及用來檢驗特定神經科學假說的工具。

**縱向回顧**：檢視歷來與當前的 neuroconnectionist 研究計畫如何回應各種挑戰，
主張這個綱領是**高度進步的 (progressive)**，持續產生其他途徑無法企及的大腦運作洞見。

### 為什麼值得當文獻回顧骨架

這篇把「模型與大腦如何比較」的方法學整理得最完整：representational similarity
analysis (RSA)、encoding models、Brain-Score 等，以及對每種方法的常見批評與回應。
寫 intro 或 discussion 時可以直接沿用它的分類架構。

### 取得全文

- 出版社（付費／機構訂閱）：https://www.nature.com/articles/s41583-023-00705-w
- **arXiv 預印本（免費全文）**：https://arxiv.org/abs/2209.03718
- 作者實驗室 PDF（免費）：https://konklab.fas.harvard.edu/Papers/Doerig_2023_NRN.pdf

---

## 3. Du et al. (2025) — 多模態 LLM 自發長出類人概念空間

**Human-like object concept representations emerge naturally in multimodal large
language models**

Du, C., Fu, K., Wen, B., Sun, Y., Peng, J., Wei, W., Gao, Y., Wang, S.,
Zhang, C., Li, J., Qiu, S., Chang, L., & He, H. (2025).
*Nature Machine Intelligence, 7*, 860–875.
https://doi.org/10.1038/s42256-025-01049-z

### 摘要重點（結構化整理，非逐字）

**方法**：結合行為與神經影像分析，探討 LLM／多模態 LLM (MLLM) 的物件概念表徵與
人類認知的關係。向模型蒐集 **470 萬次三元組判斷** (triplet judgments，即
「A、B、C 中哪一個與其他兩個最不像」)，用以推導能捕捉 **1,854 個自然物件**
相似性結構的低維嵌入空間。

**結果**：得到的 **66 維**嵌入空間穩定 (stable)、具預測力 (predictive)，
且展現出與人類心理表徵相近的語意聚類 (semantic clustering)。這些維度可被人類解讀
(interpretable)，顯示 LLM 與 MLLM 發展出了類人的物件概念表徵。

**神經對齊**：模型嵌入與多個腦區的神經活動型態顯著對齊，包括
EBA（extrastriate body area，紋外身體區）、
PPA（parahippocampal place area，海馬旁迴場所區）、
RSC（retrosplenial cortex，壓後皮質）、
FFA（fusiform face area，梭狀迴臉孔區）。

**結論**：模型的物件表徵與人類並非完全相同，但共享反映人類概念知識關鍵面向的
基本結構。

### 研究設計上的巧妙處

三元組判斷法 (triplet odd-one-out) 原本是人類認知心理學的既有典範，已有大規模
人類資料集 (THINGS)。作者對模型施以「同一套人類實驗程序」，因此模型與人類的
嵌入空間可以直接對比——這是方法學上很乾淨的設計，值得借鑑。

### 取得全文

- 出版社（付費／機構訂閱）：https://www.nature.com/articles/s42256-025-01049-z
- **arXiv 預印本（免費全文，v3 為 2025-06 更新版）**：https://arxiv.org/abs/2407.01067

---

## 三篇如何串成一條線

| 層次 | 論文 | 回答的問題 |
|---|---|---|
| 單細胞 | Gidon 2020 | 一顆人類神經元的運算能力有多強？→ 已超過單層感知器 |
| 方法論 | Doerig 2023 | 我們憑什麼說 ANN 是大腦的模型？→ 把 ANN 當可證偽的理論語言 |
| 系統／表徵 | Du 2025 | 大型模型的內部表徵像人腦嗎？→ 概念空間結構相近、與視覺腦區對齊 |

由下而上：Gidon 說明生物神經元比人工神經元複雜得多（**差異**）；
Du 說明即使基本單元不同，**系統層次**的表徵仍會收斂到相似結構（**相似**）；
Doerig 提供判準，說明這種「單元不同但表徵相似」的對比在科學上該怎麼評估。

這正好是一篇回顧性論文的論證骨架。
