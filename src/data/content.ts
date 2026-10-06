import type { Tr } from './i18n'

const asset = (p: string) => `${import.meta.env.BASE_URL}assets/${p}`

export const MARK = asset('mi2-mark.png')
export const LOGO_FULL = asset('mi2-logo-full.jpg')
/** PolyU campus aerial — full-width bottom banner background */
export const BOTTOM = asset('bottom.jpg')

export const EMAIL = 'jungsun.yoo@polyu.edu.hk'

/** Footer contact block — kept in English across all languages. */
export const FOOTER_CONTACT =
  'MI² Lab · Molecular Imaging & Intelligence Laboratory, Tel: +852 3400 8654, Fax: +852 2362 4365, Web: www.polyu.edu.hk/hti, PI Office: Y905, Lab: Y1101, Y1104, Lee Shau Kee Building, Department of Health Technology and Informatics, The Hong Kong Polytechnic University, Hung Hom, Kowloon, Hong Kong SAR, China'

export const SCHOOL_LOGOS = [
  { src: asset('school/polyu.png'), alt: 'The Hong Kong Polytechnic University' },
  { src: asset('school/fhss.png'), alt: 'Faculty of Health and Social Sciences' },
  { src: asset('school/hti.png'), alt: 'Department of Health Technology and Informatics' },
]

export const INTRO: Tr = {
  en: 'Integrating artificial intelligence, molecular probe development, and molecular imaging to advance disease diagnosis, prediction, and therapy.',
  zh: '融合人工智能、分子探針開發與分子影像，推動疾病的診斷、預測與治療。',
  ko: '인공지능, 분자 프로브 개발, 분자 영상을 융합하여 질병의 진단, 예측 및 치료를 발전시킵니다.',
}

export type TabId = 'news' | 'about' | 'people' | 'research' | 'resources' | 'join'

export const TABS: { id: TabId }[] = [
  { id: 'news' },
  { id: 'about' },
  { id: 'people' },
  { id: 'research' },
  { id: 'resources' },
  { id: 'join' },
]

export const TAB_IDS = TABS.map((t) => t.id)

/* ---------------- Hero slideshow ---------------- */

export interface HeroSlide {
  image: string
  title: Tr
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: asset('hero/group.jpg'),
    title: { en: 'The MI² Lab Family', zh: 'MI² Lab 團隊合影', ko: 'MI² Lab 단체 사진' },
  },
  {
    image: asset('hero/aocmp.jpg'),
    title: {
      en: 'We won the bid — AOCMP 2028 comes to Hong Kong SAR, China!',
      zh: '我們成功申辦——AOCMP 2028 中國香港見！',
      ko: '유치 성공 — AOCMP 2028, 중국 홍콩에서 만나요!',
    },
  },
  {
    image: asset('hero/icml.jpg'),
    title: {
      en: 'Presenting our AI research at ICML 2026, Seoul',
      zh: '於首爾 ICML 2026 發表我們的 AI 研究',
      ko: '서울 ICML 2026에서 AI 연구 발표',
    },
  },
  {
    image: asset('hero/rgc.jpg'),
    title: {
      en: 'Our project awarded the RGC Collaborative Research Equipment Grant (2025/26)',
      zh: '我們的項目榮獲研資局協作研究設備補助金（2025/26）',
      ko: '우리 프로젝트, RGC 협업 연구 장비 보조금(2025/26) 선정',
    },
  },
  {
    image: asset('hero/drugclaw.jpg'),
    title: {
      en: 'DrugClaw: our open-source AI agent for drug discovery',
      zh: 'DrugClaw：我們的開源藥物研發 AI 智能體',
      ko: 'DrugClaw: 신약 개발을 위한 오픈소스 AI 에이전트',
    },
  },
  {
    image: asset('hero/zebang-graduation.jpg'),
    title: {
      en: 'Congratulations to Dr. ZeBang He on his graduation',
      zh: '熱烈祝賀 ZeBang He 博士畢業',
      ko: 'ZeBang He 박사의 졸업을 축하합니다',
    },
  },
  {
    image: asset('hero/gerald-farewell.jpg'),
    title: {
      en: 'Farewell and best wishes to Dr. Gerald Cheng',
      zh: '歡送 Gerald Cheng 博士，祝前程似錦',
      ko: 'Gerald Cheng 박사의 새로운 출발을 응원합니다',
    },
  },
  {
    image: asset('hero/mid-autumn.jpg'),
    title: {
      en: 'Celebrating the Mid-Autumn Festival together',
      zh: '共慶中秋佳節',
      ko: '함께하는 추석 축하',
    },
  },
  {
    image: asset('hero/group-2.jpg'),
    title: {
      en: 'MI² Lab on the PolyU campus',
      zh: 'MI² Lab 在理大校園',
      ko: 'PolyU 캠퍼스의 MI² Lab',
    },
  },
]

/* ---------------- People ---------------- */

export interface Person {
  name: string
  role: Tr
  /** one entry per degree/school ("Degree, School full name") — rendered as separate lines */
  degrees?: string[]
  photo: string
  email?: string
  /** official profile page — when set, the whole card links to it (new tab) */
  profileUrl?: string
}

const ROLE_PHD: Tr = { en: 'PhD Student', zh: '博士生', ko: '박사과정 학생' }

export const PRINCIPAL_INVESTIGATOR: Person[] = [
  {
    name: 'Prof. Jung Sun Yoo',
    role: {
      en: 'Associate Head (HTI) & Associate Professor',
      zh: 'HTI 副系主任兼副教授',
      ko: 'HTI 부학과장 겸 부교수',
    },
    degrees: ['BSc & PhD, Seoul National University'],
    photo: asset('people/jung-sun-yoo.jpg'),
    email: 'jungsun.yoo@polyu.edu.hk',
    profileUrl: 'https://www.polyu.edu.hk/hti/people/academic-staff/prof-yoo-jung-sun/',
  },
]

export const POSTDOCS: Person[] = [
  {
    name: 'Dr. Kate Inyoung Oh',
    role: { en: 'Postdoctoral Fellow', zh: '博士後研究員', ko: '박사후 연구원' },
    degrees: ['PhD, The University of Hong Kong'],
    photo: asset('people/inyoung-oh.jpg'),
    email: 'i.y.oh@polyu.edu.hk',
  },
]

export const PHD_STUDENTS: Person[] = [
  {
    name: 'Hongzhao Chen',
    role: ROLE_PHD,
    degrees: ['MSc, The Chinese University of Hong Kong', 'BEng, Dongguan University of Technology'],
    photo: asset('people/hongzhao-chen.jpg'),
    email: 'hongzhao.chen@connect.polyu.hk',
  },
  {
    name: 'Hexiao Ding',
    role: ROLE_PHD,
    degrees: ['BSc, Sun Yat-sen University'],
    photo: asset('people/hexiao-ding.jpg'),
    email: 'hexiao.ding@connect.polyu.hk',
  },
  {
    name: 'Yunlin Mao',
    role: ROLE_PHD,
    degrees: ['MSc, Sun Yat-sen University', 'BSc, Sun Yat-sen University'],
    photo: asset('people/yunlin-mao.jpg'),
    email: 'yunlin.mao@connect.polyu.hk',
  },
  {
    name: 'Jing Lan',
    role: ROLE_PHD,
    degrees: ['BSc, Conservatoire national des arts et métiers'],
    photo: asset('people/jing-lan.jpg'),
    email: 'jing-hti.lan@connect.polyu.hk',
  },
]

export const DHSC_STUDENTS: Person[] = [
  {
    name: 'Nga Chun (Sam) Ng',
    role: { en: 'DHSc Student', zh: 'DHSc 學生', ko: 'DHSc 학생' },
    degrees: ['MPhil, The Hong Kong University of Science and Technology'],
    photo: asset('people/nga-chun-ng.jpg'),
  },
]

export interface AlumniEntry {
  name: string
  note?: string
}

export interface AlumniGroup {
  labelKey: 'people.alumniPolyU' | 'people.alumniSNU'
  /** names & institutions stay in English */
  entries: AlumniEntry[]
  /** extra muted line, e.g. student assistants */
  footnote?: Tr
}

export const ALUMNI_GROUPS: AlumniGroup[] = [
  {
    labelKey: 'people.alumniPolyU',
    entries: [
      { name: 'ZeBang He', note: 'PhD, PolyU HTI' },
      { name: 'Gerald Wai Yeung Cheng', note: 'Postdoctoral Fellow, 2023–2026' },
      { name: 'Minfeng Yang', note: 'PhD 2023 → Assistant Professor, School of Public Health, Nantong University' },
      { name: 'Arpan Mahanty', note: 'PhD 2023 → Postdoctoral Scholar, Case Western Reserve University' },
      { name: 'Ngai Nick Alex Wong', note: 'PhD 2021 → Postdoctoral Fellow, PolyU HTI' },
      { name: 'Chung Ting Teddy Tang', note: 'DHSc 2022 · Medical Physicist, Queen Elizabeth Hospital' },
    ],
    footnote: {
      en: 'Student assistants: Ka Wing Wan, Chun Yin Ivan Wong, Lap San Linus Lee, Chun Lok Wesley Sin, Chun Kin Isaac Wong, Ching Wai Au, Chun Ki Sung.',
      zh: '學生助理：Ka Wing Wan、Chun Yin Ivan Wong、Lap San Linus Lee、Chun Lok Wesley Sin、Chun Kin Isaac Wong、Ching Wai Au、Chun Ki Sung。',
      ko: '학생 조교: Ka Wing Wan, Chun Yin Ivan Wong, Lap San Linus Lee, Chun Lok Wesley Sin, Chun Kin Isaac Wong, Ching Wai Au, Chun Ki Sung.',
    },
  },
  {
    labelKey: 'people.alumniSNU',
    entries: [
      { name: 'Ga Ram Kim', note: 'MSc' },
      { name: 'Min Su Kang', note: 'research assistant' },
      { name: 'So Jeong Kim', note: 'research assistant' },
      { name: 'Wan Kim', note: 'internship' },
      { name: 'Gyu Hyeon Kim', note: 'internship' },
      { name: 'Juyeon Bae', note: 'internship' },
      { name: 'Jong Ahn Lee', note: 'internship' },
      { name: 'Juhwan Yoon', note: 'internship' },
      { name: 'Jung Hee Kim', note: 'internship' },
    ],
  },
]

/* ---------------- Research ---------------- */

export interface Pillar {
  index: string
  title: Tr
  description: Tr
}

export const PILLARS: Pillar[] = [
  {
    index: '01',
    title: { en: 'Artificial Intelligence', zh: '人工智能', ko: '인공지능' },
    description: {
      en: 'Learning systems for biomedical discovery, multimodal reasoning, and clinically meaningful prediction.',
      zh: '面向生物醫學發現、多模態推理及具臨床意義預測的學習系統。',
      ko: '생의학 발견, 멀티모달 추론, 임상적으로 의미 있는 예측을 위한 학습 시스템.',
    },
  },
  {
    index: '02',
    title: { en: 'Molecular Probe Development', zh: '分子探針開發', ko: '분자 프로브 개발' },
    description: {
      en: 'Data-guided design and validation of molecular probes and radiopharmaceutical candidates.',
      zh: '以數據指導分子探針及放射性藥物候選物的設計與驗證。',
      ko: '데이터 기반의 분자 프로브 및 방사성의약품 후보 설계·검증.',
    },
  },
  {
    index: '03',
    title: { en: 'Molecular Imaging', zh: '分子影像', ko: '분자 영상' },
    description: {
      en: 'Quantitative imaging methods connecting biological processes with diagnosis and therapy.',
      zh: '連結生物過程與診斷、治療的定量影像方法。',
      ko: '생물학적 과정을 진단 및 치료와 연결하는 정량적 영상 기법.',
    },
  },
]

export interface SelectedPublication {
  image: string
  title: string
  venueLine: string
  href?: string
}

export const SELECTED_PUBLICATIONS: SelectedPublication[] = [
  { image: asset("selected/m3ad2.png"), href: "https://arxiv.org/abs/2508.01819", title: "Decoding the Alzheimer's Continuum: Interpretable Multi-Gate Routing for Diagnosis and Transition Prediction", venueLine: "MICCAI \u00b7 2026" },
  { image: asset("selected/saban-dti.png"), href: "https://arxiv.org/abs/2509.14788", title: "Structure-Aware Contrastive Learning with Fine-Grained Binding Representations for Drug Discovery", venueLine: "ICASSP \u00b7 2026" },
  { image: asset("selected/react-kd.png"), href: "https://arxiv.org/abs/2508.02104", title: "REACT-KD: Region-Aware Cross-Modal Topological Knowledge Distillation for Interpretable Medical Image Classification", venueLine: "IEEE BIBM \u00b7 2025" },
  { image: asset("selected/deepmolm.png"), href: "https://arxiv.org/abs/2601.14732", title: "DeepMoLM: Leveraging Visual and Geometric Structural Information for Molecule-Text Modeling", venueLine: "IEEE BIBM \u00b7 2026" },
  { image: asset("selected/chemhypermag.png"), href: "https://arxiv.org/abs/2607.18332", title: "ChemHyperMag: Magnetic Laplacian Based Hypergraph Contrastive Learning for Molecular ADMET Predictions", venueLine: "ICML AI4Physics Workshop \u00b7 2026" },
  { image: asset("selected/drugclaw.png"), title: "DrugClaw: Autonomous Agent for Drug Intelligence", venueLine: "Open Source \u00b7 2026", href: "https://drugclaw.com" },
]

export interface AllPublication {
  year: number
  /** authors + title, wording preserved from the source list */
  text: string
  venue: string
}
export const ALL_PUBLICATIONS: AllPublication[] = [
  { year: 2026, text: 'Yufeng Jiang, Hexiao Ding, Hongzhao Chen, Jing Lan, Xinzhi Teng, Gerald W. Y. Cheng, Zongxi Li, Haoran Xie, Jung Sun Yoo, Jing Cai. Decoding the Alzheimer\'s Continuum: Interpretable Multi-Gate Routing for Diagnosis and Transition Prediction.', venue: 'MICCAI' },
  { year: 2026, text: 'Jing Lan, Hexiao Ding, Hongzhao Chen, Yufeng Jiang, Nga-Chun Ng, Gwing Kei Yip, Gerald W. Y. Cheng, Yunlin Mao, Jing Cai, Liang-Ting Lin, Jung Sun Yoo. Structure-Aware Contrastive Learning with Fine-Grained Binding Representations for Drug Discovery.', venue: 'ICASSP' },
  { year: 2026, text: 'Jing Lan, Hexiao Ding, Hongzhao Chen, Yufeng Jiang, Nga-Chun Ng, Gwing Kei Yip, Gerald W. Y. Cheng, Yunlin Mao, Jing Cai, Liang-Ting Lin, Jung Sun Yoo. DeepMoLM: Leveraging Visual and Geometric Structural Information for Molecule-Text Modeling.', venue: 'IEEE BIBM' },
  { year: 2026, text: 'Hexiao Ding, Hongzhao Chen, Jing Lan, Yufeng Jiang, Zihong Luo, Zehua Xiong, Tianlong Ruan, Yunlin Mao, Nga Chun Ng, Gwing Kei Yip, Gerald W. Y. Cheng, Kate Inyoung Oh, Jing Cai, Liang-Ting Lin, Jung Sun Yoo. ChemHyperMag: Magnetic Laplacian Based Hypergraph Contrastive Learning for Molecular ADMET Predictions.', venue: 'ICML AI4Physics Workshop' },
  { year: 2025, text: 'Hongzhao Chen, Hexiao Ding, Yufeng Jiang, Jing Lan, Ka Chun Li, Gerald W. Y. Cheng, Nga Chun Ng, Yao Pu, Jing Cai, Liang-Ting Lin, Jung Sun Yoo. REACT-KD: Region-Aware Cross-Modal Topological Knowledge Distillation for Interpretable Medical Image Classification.', venue: 'IEEE BIBM' },
  { year: 2025, text: 'Jing Lan, Hexiao Ding, Hongzhao Chen, Yufeng Jiang, Nga-Chun Ng, Gerald W. Y. Cheng, Zongxi Li, Jing Cai, Liang-Ting Lin, Jung Sun Yoo. Contrastive Multi-Task Learning with Solvent-Aware Augmentation for Drug Discovery.', venue: 'arXiv preprint' },
  { year: 2023, text: 'ZeBang He, Alex Ngai Nick Wong, Jung Sun Yoo. Co-ERA-Net: Co-supervision and Enhanced Region Attention for Accurate Segmentation in COVID-19 Chest Infection Images.', venue: 'Bioengineering, 10, 928' },
  { year: 2022, text: 'Minfeng Yang, Arpan Mahanty, Chunjing Jin, Alex Ngai Nick Wong, Jung Sun Yoo. Label-free metabolic imaging for sensitive and robust monitoring of anti-CD47 immunotherapy response in triple-negative breast cancer.', venue: 'Journal for ImmunoTherapy of Cancer, 10, e005199' },
  { year: 2022, text: 'Alex Ngai Nick Wong, ZeBang He, Ka Long Leung, Curtis Chun Kit To, Chun Yin Wong, Sze Chuen Cesar Wong, Jung Sun Yoo, Cheong Kin Ronald Chan, Angela Zaneta Chan, Maribel D. Lacambra, Martin Ho Yin Yeung. Current Developments of Artificial Intelligence in Digital Pathology and its Future Clinical Applications in Gastrointestinal Cancers.', venue: 'Cancers, 14, 3780' },
  { year: 2022, text: 'Martin Ho Yin Yeung, Ka Long Leung, Lai Yuen Choi, Jung Sun Yoo, Susan Yung, Pui-Kin So, Chi-Ming Wong. Lipidomic Analysis Reveals the Protection Mechanism of GLP-1 Analogue Dulaglutide on High-Fat Diet-Induced Chronic Kidney Disease in Mice.', venue: 'Frontiers in Pharmacology, 12, 777395' },
  { year: 2020, text: 'Minfeng Yang, In Young Oh, Arpan Mahanty, Wei-Lin Jin, Jung Sun Yoo. Immunotherapy for Glioblastoma: Current State, Challenges, and Future Perspectives.', venue: 'Cancers, 12, 2334' },
  { year: 2019, text: 'Nunzio Denora, Chaedong Lee, Rosa Maria Iacobazzi, Ji Young Choi, In Ho Song, Jung Sun Yoo, Yuanzhe Piao, Antonio Lopalco, Francesco Leonetti, Byung Chul Lee, Sang Eun Kim. TSPO-targeted NIR-fluorescent ultra-small iron oxide nanoparticles for glioblastoma imaging.', venue: 'European Journal of Pharmaceutical Sciences, 139, 105047' },
  { year: 2018, text: 'Chaedong Lee, Ga Ram Kim, Juhwan Yoon, Sang Eun Kim, Jung Sun Yoo, Yuanzhe Piao. In Vivo delineation of glioblastoma by targeting tumor-associated macrophages with near-infrared fluorescent silica-coated iron oxide nanoparticles in orthotopic xenografts for surgical guidance.', venue: 'Scientific Reports, 8, 11122' },
  { year: 2017, text: 'Bo Quan, Chaedong Lee, Jung Sun Yoo, Yuanzhe Piao. Facile scalable synthesis of highly monodisperse small silica nanoparticles using alkaline buffer solution and its application for efficient lymph node mapping.', venue: 'Journal of Materials Chemistry B, 5, 586-594' },
  { year: 2016, text: 'Min Su Lee, Hyun Soo Park, Byung Chul Lee, Jae Ho Jung, Jung Sun Yoo, Sang Eun Kim. Identification of Angiogenesis Rich-Viable Myocardium using RGD Dimer based SPECT after Myocardial Infarction.', venue: 'Scientific Reports, 6, 27520' },
  { year: 2016, text: 'Haeyun Jang, Chaedong Lee, Gi-Eun Nam, Bo Quan, Hyuck Jae Choi, Jung Sun Yoo, Yuanzhe Piao. In Vivo Magnetic Resonance and Fluorescence Dual Imaging of Tumor Sites by using Dye-Doped Silica-Coated Iron Oxide Nanoparticles.', venue: 'Journal of Nanoparticle Research, 18(2), 41' },
  { year: 2015, text: 'Jung Sun Yoo, Jonghwan Lee, Jae Ho Jung, Byung Seok Moon, Soonhag Kim, Byung Chul Lee, Sang Eun Kim. SPECT/CT Imaging of High-Risk Atherosclerotic Plaques using Integrin-Binding RGD Dimer Peptides.', venue: 'Scientific Reports, 5, 11752' },
  { year: 2015, text: 'Satoshi Arai, Madoka Suzuki, Sung-Jin Park, Jung Sun Yoo, Lu Wang, Nam-Young Kang, Hyung-Ho Ha, Young-Tae Chang. Mitochondria-targeted Fluorescent Thermometer Monitors Intracellular Temperature Gradient.', venue: 'Chemical Communications, 51, 8044-8047' },
  { year: 2014, text: 'Jung Sun Yoo, Kwang-Sup Soh. A Transformative Approach to Cancer Metastasis: Primo Vascular System as a Novel Microenvironment for Cancer Stem Cells.', venue: 'Cancer Cell & Microenvironment, 1, e142' },
  { year: 2014, text: 'Jung Sun Yoo, Raj Kumar Das, Zhi Yen Jow, Young-Tae Chang. In Vivo Detection of Macrophage Recruitment in Hind-limb Ischemia using a Targeted Near-Infrared Fluorophore.', venue: 'PLoS ONE, 9(7), e103721' },
  { year: 2014, text: 'Jung Sun Yoo, Sung-Chan Lee, Zhi Yen Jow, Pamela Yun Xiang Koh, Young-Tae Chang. A Macrophage-Specific Fluorescent Probe for Intraoperative Lymph Node Staging.', venue: 'Cancer Research, 74(1), 44-55' },
  { year: 2013, text: 'Jaekwan Lim, Sungwoo Lee, Zhendong Su, Hong Bae Kim, Jung Sun Yoo, Kwang-Sup Soh, Sungchul Kim, Yeon Hee Ryu. Primo Vascular System Accompanying a Blood Vessel from Tumor Tissue and a Method to Distinguish It from the Blood or the Lymph System.', venue: 'Evidence-Based Complementary and Alternative Medicine, 2013, 949245' },
  { year: 2011, text: 'Jung Sun Yoo, Hong Bae Kim, Nayoun Won, Jiwon Bang, Sungjee Kim, Saeyoung Ahn, Byung-Cheon Lee, Kwang-Sup Soh. Evidence for an Additional Metastatic Route: In vivo Imaging of Cancer Cells in the Primo-Vascular System around Tumors and Organs.', venue: 'Molecular Imaging and Biology, 13(3), 471-480' },
  { year: 2010, text: 'Vasilis Ntziachristos, Jung Sun Yoo, Gooitzen M. van Dam. Current Concepts and Future Perspectives on Surgical Optical Imaging in Cancer.', venue: 'Journal of Biomedical Optics, 15(6), 066024' },
  { year: 2010, text: 'Ping An, Jingxing Dai, Zhendong Su, Jung Sun Yoo, Rongmei Qu, Sung-Woo Lee, Ki-Hoon Eom, Kyang-Hee Bae, Hesheng Luo, Kwang-Sup Soh. Putative Primo-vascular System in Mesentery of Rats.', venue: 'Journal of Acupuncture and Meridian Studies, 3(4), 232-240' },
  { year: 2010, text: 'Jung Sun Yoo, Nayoun Won, Hong Bae Kim, Jiwon Bang, Sungjee Kim, Saeyoung Ahn, Kwang-Sup Soh. In vivo Imaging of Cancer Cells with Electroporation of Quantum Dots and Multispectral Imaging.', venue: 'Journal of Applied Physics, 107(12), 124702' },
  { year: 2010, text: 'Jung Sun Yoo, M. Hossein Ayati, Hong Bae Kim, Wei-bo Zhang, Kwang-Sup Soh. Characterization of the Primo-Vascular System in the Abdominal Cavity of Lung Cancer Mouse Model and Its Differences from the Lymphatic System.', venue: 'PLoS ONE, 5(4), e9940' },
  { year: 2009, text: 'Jung Sun Yoo, George Themelis, Kwang-Sup Soh, Ralf Schulz, Vasilis Ntziachristos. Real-time Intraoperative Fluorescence Imaging System using Light-absorption Correction.', venue: 'Journal of Biomedical Optics, 14(6), 064124' },
  { year: 2009, text: 'Jung Sun Yoo, Hong Bae Kim, Vyacheslav Ogay, Byung-Cheon Lee, Saeyoung Ahn, Kwang-Sup Soh. Bonghan Ducts as Possible Pathways for Cancer Metastasis.', venue: 'Journal of Acupuncture and Meridian Studies, 2(2), 118-123' },
  { year: 2008, text: 'George Themelis, Jung Sun Yoo, Vasilis Ntziachristos. Multispectral Imaging using Multiple-bandpass Filters.', venue: 'Optics Letters, 33(9), 1023-1025' },
  { year: 2008, text: 'Jung Sun Yoo, Min Su Kim, Vyacheslav Ogay, Kwang-Sup Soh. In vivo Visualization of Bonghan Ducts inside Blood Vessels of Mice by using an Alcian Blue Staining Method.', venue: 'Indian Journal of Experimental Biology, 46(5), 336-339' },
  { year: 2008, text: 'Byung-Cheon Lee, Jung Sun Yoo, Ku Youn Baik, Baeckkyoung Sung, Jawoong Lee, Kwang-Sup Soh. Development of a Fluorescence Stereomicroscope and Observation of Bong-Han Corpuscles inside Blood Vessels.', venue: 'Indian Journal of Experimental Biology, 46(5), 330-335' },
  { year: 2008, text: 'Baeckkyoung Sung, Min Su Kim, Byung-Cheon Lee, Jung Sun Yoo, Sang-Hee Lee, Youn-Joong Kim, Ki-Woo Kim, Kwang-Sup Soh. Measurement of Flow Speed in the Channels of Novel Threadlike Structures on the Surfaces of Mammalian Organs.', venue: 'Naturwissenschaften, 95(2), 117-124' },
  { year: 2007, text: 'Su Hong, Jung Sun Yoo, Ju Young Hong, Byung-Cheon Lee, Kwang-Sup Soh, Sang-Hee Lee, Youn-Joong Kim, Dae-In Kang, Byung Soo Ahn, Hee-Jong Woo. Immunohistochemical and Electron Microscopic Study of the Meridian-like System on the Surface of Internal Organs of Rats.', venue: 'Acupuncture & Electro-Therapeutics Research, 32(3/4), 195-210' },
  { year: 2007, text: 'Jung Sun Yoo, Min Su Kim, Baeckkyoung Sung, Byung-Cheon Lee, Kwang-Sup Soh, Sang-Hee Lee, Youn-Joong Kim, Harald Dobberstein. Cribriform Structure with Channels in the Acupuncture Meridian-like System on the Organ Surfaces of Rabbits.', venue: 'Acupuncture & Electro-Therapeutics Research, 32(1/2), 130-132' },
  { year: 2007, text: 'Jung Sun Yoo, Hyeon-Min Johng, Tae-Jong Yoon, Hak-Soo Shin, Byung-Cheon Lee, Changhoon Lee, Byung Soo Ahn, Dae-In Kang, Jin-Kyu Lee, Kwang-Sup Soh. In vivo Fluorescence Imaging of Threadlike Tissues (Bonghan Ducts) inside Lymphatic Vessels with Nanoparticles.', venue: 'Current Applied Physics, 7(4), 342-348' },
  { year: 2007, text: 'Byung-Cheon Lee, Jung Sun Yoo, Vyacheslav Ogay, Ki Woo Kim, Harald Dobberstein, Kwang-Sup Soh, Byung-Soo Chang. Electron Microscopic Study of Novel Threadlike Structures on the Surfaces of Mammalian Organs.', venue: 'Microscopy Research and Technique, 70(1), 34-43' },
  { year: 2007, text: 'Hyeon-Min Johng, Jung Sun Yoo, Tae-Jong Yoon, Hak-Soo Shin, Byung-Cheon Lee, Changhoon Lee, Jin-Kyu Lee, Kwang-Sup Soh. Use of Magnetic Nanoparticles to Visualize Threadlike Structures inside Lymphatic Vessels of Rats.', venue: 'Evidence-Based Complementary and Alternative Medicine, 4(1), 77-82' },
  { year: 2006, text: 'Yong-Yui Han, Joon-Mo Yang, Jung Sun Yoo, Vyacheslav Ogay, Jung-Dae Kim, Min-Su Kim, Byung-Cheon Lee, Ku-Youn Baik, Sang-Hyun Park, Kwang-Sup Soh. Measurement of the Optical Properties of In-vitro Organ-Surface Bonghan Corpuscles of Rats.', venue: 'Journal of the Korean Physical Society, 49(6), 2239-2246' },
  { year: 2006, text: 'Changhoon Lee, Jung Sun Yoo, Joonhyung Kwon, Kwang-Sup Soh. Study on the flow through the organ surface Bonghan duct by using nanoparticles.', venue: 'Journal of the Korean Society of Jungshin Science, 10(2), 49-55' },
  { year: 2005, text: 'Byung-Cheon Lee, Jung Sun Yoo, Ku Youn Baik, Ki Woo Kim, Kwang-Sup Soh. Novel Threadlike Structures (Bonghan Ducts) inside Lymphatic Vessels of Rabbits Visualized with a Janus Green B Staining Method.', venue: 'Anatomical Record-Advances in Integrative Anatomy and Evolutionary Biology, 286B(01), 1-7' },
  { year: 2005, text: 'Baeckkyoung Sung, Vyacheslav Ogay, Jung Sun Yoo, Hyung Suk Yu, Byung-Cheon Lee, Chan Chung, Guhung Jung, Kwang-Sup Soh. UV-A-Induced Activation of Bonghan Granules in Motion.', venue: 'Journal of International Society of Life Information Science, 23(02), 297-301' },
  { year: 2005, text: 'Jung Sun Yoo, Kihwan Choi, Ku Youn Baik, Doo Soo Chung, Kwang-Sup Soh. Liquid-Phase Microextraction Method in Capillary Electrophoresis to Detect Adrenaline in Bonghan Liquid.', venue: 'Journal of International Society of Life Information Science, 23(02), 292-296' },
  { year: 2005, text: 'Hak-Soo Shin, Hyeon-Min Johng, Byung-Cheon Lee, Sung-Il Cho, Ku Youn Baik, Jung Sun Yoo, Kwang-Sup Soh. Feulgen Reaction Study of Novel Threadlike Structures (Bonghan Ducts) on the Surface of Mammalian Organs.', venue: 'Anatomical Record-Advances in Integrative Anatomy and Evolutionary Biology, 284B(01), 35-40' },
  { year: 2005, text: 'Byung-Cheon Lee, Jung Sun Yoo, Eun Sung Park, Yeo Sung Yoon, Hak-Soo Shin, Kwang-Sup Soh. Histological features of Bonghan Corpuscles on the Surface of Rabbit Internal Organs.', venue: 'Journal of International Society of Life Information Science, 23(01), 95-99' },
  { year: 2004, text: 'Hyeon-Min Johng, Hak-Soo Shin, Jung Sun Yoo, Byung-Cheon Lee, Ku-Youn Baik, Soyeun Kim, Kwang-Sup Soh. Bonghan Ducts on the Surface of Rat Liver.', venue: 'Journal of International Society of Life Information Science, 22(2), 469-472' },
]


export const TECHNIQUES: Tr[] = [
  { en: 'Multi-modal & multi-task learning', zh: '多模態與多任務學習', ko: '멀티모달 및 멀티태스크 학습' },
  { en: 'Knowledge distillation', zh: '知識蒸餾', ko: '지식 증류' },
  { en: 'Contrastive & prompt learning', zh: '對比學習與提示學習', ko: '대조 학습 및 프롬프트 학습' },
  {
    en: 'LLM fine-tuning & alignment (SFT, DPO, LoRA/QLoRA)',
    zh: '大語言模型微調與對齊（SFT、DPO、LoRA/QLoRA）',
    ko: 'LLM 미세조정 및 정렬 (SFT, DPO, LoRA/QLoRA)',
  },
  {
    en: 'Agentic AI (autonomous agents, RAG, multi-LLM routing)',
    zh: '智能體 AI（自主代理、RAG、多 LLM 路由）',
    ko: '에이전틱 AI(자율 에이전트, RAG, 멀티 LLM 라우팅)',
  },
  {
    en: '3D medical image analysis (PET/CT, MRI)',
    zh: '3D 醫學影像分析（PET/CT、MRI）',
    ko: '3D 의료 영상 분석(PET/CT, MRI)',
  },
  {
    en: 'Molecular representation & pharmacokinetic modeling',
    zh: '分子表徵與藥代動力學建模',
    ko: '분자 표현 및 약물동태학 모델링',
  },
]

export const APPLICATION_AREAS: Tr[] = [
  { en: "Alzheimer's disease", zh: '阿茲海默症', ko: '알츠하이머병' },
  { en: 'Hepatocellular carcinoma', zh: '肝細胞癌', ko: '간세포암' },
  { en: 'Head and neck cancer', zh: '頭頸癌', ko: '두경부암' },
  { en: 'Nasopharyngeal carcinoma', zh: '鼻咽癌', ko: '비인두암' },
  { en: 'Cancer immunotherapy', zh: '癌症免疫治療', ko: '암 면역치료' },
]

/* ---------------- Resources ---------------- */

export interface ResourceItem {
  name: string
  description: Tr
  /** card cover image */
  image: string
  href: string
}

export const RESOURCES: ResourceItem[] = [
  {
    name: 'DrugClaw',
    description: {
      en: 'Autonomous agent for drug intelligence. Open source.',
      zh: '藥物情報自主代理。開源項目。',
      ko: '의약품 인텔리전스를 위한 자율 에이전트. 오픈 소스.',
    },
    image: asset('resources/drugclaw.jpg'),
    href: 'https://drugclaw.com',
  },
  {
    name: 'MMedFD',
    description: {
      en: 'Real-world healthcare benchmark for multi-turn full-duplex ASR.',
      zh: '面向多輪全雙工自動語音識別的真實醫療場景基準。',
      ko: '다중 턴 전이중 ASR을 위한 실제 의료 환경 벤치마크.',
    },
    image: asset('resources/mmedfd.jpg'),
    href: 'https://huggingface.co/datasets/HanselZz/MMedFD',
  },
]

/* ---------------- Values (About) ---------------- */

export interface ValueItem {
  title: Tr
  text: Tr
}

export const VALUES: ValueItem[] = [
  {
    title: { en: 'Research excellence', zh: '卓越研究', ko: '연구 우수성' },
    text: {
      en: 'we are committed to conducting research of the highest quality and impact.',
      zh: '我們致力於開展最高質量與影響力的研究。',
      ko: '최고 수준의 품질과 영향력을 갖춘 연구를 수행합니다.',
    },
  },
  {
    title: { en: 'Research training', zh: '研究培訓', ko: '연구 교육' },
    text: {
      en: 'we are dedicated to training the next generation of scientists and engineers.',
      zh: '我們致力於培養下一代科學家與工程師。',
      ko: '차세대 과학자와 엔지니어 양성에 헌신합니다.',
    },
  },
  {
    title: { en: 'Inclusiveness', zh: '包容多元', ko: '포용성' },
    text: {
      en: 'we welcome a range of views and promote a supportive research culture of mutual respect.',
      zh: '我們歡迎不同觀點，倡導互相尊重、互相支持的研究文化。',
      ko: '다양한 관점을 환영하며 상호 존중과 지원의 연구 문화를 장려합니다.',
    },
  },
  {
    title: { en: 'Interdisciplinarity', zh: '跨學科协作', ko: '학제간 융합' },
    text: {
      en: 'we are an interdisciplinary group and welcome researchers from diverse academic backgrounds.',
      zh: '我們是跨學科團隊，歡迎來自不同學術背景的研究者。',
      ko: '다양한 학문 배경의 연구자를 환영하는 학제간 연구 그룹입니다.',
    },
  },
  {
    title: { en: 'Making a difference', zh: '創造改變', ko: '변화 창출' },
    text: {
      en: 'we are driven by the desire to create positive change and improve the lives of people suffering from disease.',
      zh: '我們以創造正面改變、改善疾病患者的生活為動力。',
      ko: '질병으로 고통받는 사람들의 삶을 개선하고 긍정적 변화를 만들고자 합니다.',
    },
  },
]

/* ---------------- Patents (Research) ---------------- */

export interface PatentItem {
  /** full citation paragraph, localized */
  text: Tr
}

/** Newest first (2022 → 2007) */
export const PATENTS: PatentItem[] = [
  {
    text: {
      en: 'Ho Yin Martin Yeung, Ngai Nick Alex Wong, Jung Sun Yoo, Cheong Kin Ronald Chan, Ka Fai To. Systems, Methods and Workflow for Processing Whole Slide Imaging for Disease Detection: The Hong Kong Polytechnic University, The Chinese University of Hong Kong. Application #63/366,019, June 08, 2022, US Provisional Patent Application, Application for China.',
      zh: 'Ho Yin Martin Yeung, Ngai Nick Alex Wong, Jung Sun Yoo, Cheong Kin Ronald Chan, Ka Fai To. 用於疾病檢測的全切片影像處理系統、方法與工作流程：香港理工大學、香港中文大學。申請號 63/366,019，2022 年 6 月 8 日，美國臨時專利申請，中國專利申請。',
      ko: 'Ho Yin Martin Yeung, Ngai Nick Alex Wong, Jung Sun Yoo, Cheong Kin Ronald Chan, Ka Fai To. 질병 검출을 위한 홀 슬라이드 이미징 처리 시스템, 방법 및 워크플로: 홍콩 이공대학교, 홍콩 중문대학교. 출원번호 63/366,019, 2022년 6월 8일, 미국 가특허 출원, 중국 특허 출원.',
    },
  },
  {
    text: {
      en: 'Jung Sun Yoo, Ngai Nick Alex Wong. An Intraoperative Imaging Technique to Specifically Visualize Peripheral Nerves using Spectral Reflectance and Deep Neural Networks: The Hong Kong Polytechnic University. Application #63/265,158, December 09, 2021, US Provisional Patent Application, Application for China; Stage 1 Registration in Hong Kong, September 09, 2023.',
      zh: 'Jung Sun Yoo, Ngai Nick Alex Wong. 一種利用光譜反射與深度神經網絡特異性可視化外周神經的術中成像技術：香港理工大學。申請號 63/265,158，2021 年 12 月 9 日，美國臨時專利申請，中國專利申請；香港第一階段登記，2023 年 9 月 9 日。',
      ko: 'Jung Sun Yoo, Ngai Nick Alex Wong. 스펙트럴 반사율과 심층 신경망을 이용해 말초신경을 특이적으로 시각화하는 수술 중 영상 기술: 홍콩 이공대학교. 출원번호 63/265,158, 2021년 12월 9일, 미국 가특허 출원, 중국 특허 출원; 홍콩 1단계 등록, 2023년 9월 9일.',
    },
  },
  {
    text: {
      en: 'Jung Sun Yoo, Tae-Rin Lee. System and Method for Quantifying Cell and/or Drug Transfer Efficiently in Microvessel and Surrounding Tissue: Advanced Institutes of Convergence Technology. Application #PCT/KR2017/008951, Grant #WO 2018/034507/A1, February 22, 2018, PCT Patent.',
      zh: 'Jung Sun Yoo, Tae-Rin Lee. 定量評估微血管及周圍組織中細胞／藥物遞送效率的系統與方法：韓國融合技術研究院（AICT）。申請號 PCT/KR2017/008951，授權號 WO 2018/034507/A1，2018 年 2 月 22 日，PCT 國際專利。',
      ko: 'Jung Sun Yoo, Tae-Rin Lee. 미세혈관 및 주변 조직에서 세포/약물 전달 효율을 정량화하는 시스템 및 방법: 차세대융합기술연구원. 출원번호 PCT/KR2017/008951, 등록번호 WO 2018/034507/A1, 2018년 2월 22일, PCT 특허.',
    },
  },
  {
    text: {
      en: 'Tae-Rin Lee, Jung Sun Yoo. System and Method for Quantitatively Estimating Delivering Efficiency of Cells and/or Drugs in Microvessels and Tissue: Advanced Institutes of Convergence Technology. KR Patent 10-1909447, October 12, 2018, Republic of Korea.',
      zh: 'Tae-Rin Lee, Jung Sun Yoo. 定量估算微血管與組織中細胞／藥物遞送效率的系統與方法：韓國融合技術研究院。韓國專利 10-1909447，2018 年 10 月 12 日，大韓民國。',
      ko: 'Tae-Rin Lee, Jung Sun Yoo. 미세혈관 및 조직 내 세포/약물 전달 효율을 정량적으로 추정하는 시스템 및 방법: 차세대융합기술연구원. 대한민국 특허 10-1909447, 2018년 10월 12일.',
    },
  },
  {
    text: {
      en: 'Jung Sun Yoo, Tae-Rin Lee. Non-label Imaging System for Selective Microscopy of Peripheral Nerve: Seoul National University R&DB Foundation, Advanced Institutes of Convergence Technology. Application #PCT/KR2017/001823 (February 20, 2017), Grant #WO 2017/142376 A1, August 24, 2017, PCT Patent.',
      zh: 'Jung Sun Yoo, Tae-Rin Lee. 用於外周神經選擇性顯微成像的無標記成像系統：首爾大學產學合作基金會、韓國融合技術研究院。申請號 PCT/KR2017/001823（2017 年 2 月 20 日），授權號 WO 2017/142376 A1，2017 年 8 月 24 日，PCT 國際專利。',
      ko: 'Jung Sun Yoo, Tae-Rin Lee. 말초신경 선택적 현미 영상을 위한 무라벨 영상 시스템: 서울대학교 산학협력단, 차세대융합기술연구원. 출원번호 PCT/KR2017/001823(2017년 2월 20일), 등록번호 WO 2017/142376 A1, 2017년 8월 24일, PCT 특허.',
    },
  },
  {
    text: {
      en: 'Jung Sun Yoo, Tae-Rin Lee. Label-free Imaging System for Specific Detection of Peripheral Nerve: Seoul National University R&DB Foundation, Advanced Institutes of Convergence Technology. KR Patent 10-1790988, October 26, 2017, Republic of Korea.',
      zh: 'Jung Sun Yoo, Tae-Rin Lee. 用於特異性檢測外周神經的無標記成像系統：首爾大學產學合作基金會、韓國融合技術研究院。韓國專利 10-1790988，2017 年 10 月 26 日，大韓民國。',
      ko: 'Jung Sun Yoo, Tae-Rin Lee. 말초신경의 특이적 검출을 위한 무라벨(Label-free) 영상 시스템: 서울대학교 산학협력단, 차세대융합기술연구원. 대한민국 특허 10-1790988, 2017년 10월 26일.',
    },
  },
  {
    text: {
      en: 'Seong-Tae Han, Jung Sun Yoo. Device for Stimulating the Growth of Hair and Skin Tissue: Korea Electrotechnology Research Institute. KR Patent 10-1773983, August 28, 2017, Republic of Korea.',
      zh: 'Seong-Tae Han, Jung Sun Yoo. 促進毛髮與皮膚組織生長的裝置：韓國電氣技術研究院。韓國專利 10-1773983，2017 年 8 月 28 日，大韓民國。',
      ko: 'Seong-Tae Han, Jung Sun Yoo. 모발 및 피부 조직의 성장을 촉진하는 장치: 한국전기기술연구원. 대한민국 특허 10-1773983, 2017년 8월 28일.',
    },
  },
  {
    text: {
      en: 'Kwang-Sup Soh, Jung Sun Yoo, Jaekwan Lim. A Method for Imaging Metastasis of Cancer via Primo-vessel: Seoul National University R&DB Foundation, Mobase Co., Ltd. KR Patent 10-1218798, December 28, 2012, Republic of Korea.',
      zh: 'Kwang-Sup Soh, Jung Sun Yoo, Jaekwan Lim. 一種經原始管（Primo-vessel）對癌症轉移進行成像的方法：首爾大學產學合作基金會、Mobase 公司。韓國專利 10-1218798，2012 年 12 月 28 日，大韓民國。',
      ko: 'Kwang-Sup Soh, Jung Sun Yoo, Jaekwan Lim. 프리모관(Primo-vessel)을 통한 암 전이 영상 방법: 서울대학교 산학협력단, Mobase Co., Ltd. 대한민국 특허 10-1218798, 2012년 12월 28일.',
    },
  },
  {
    text: {
      en: 'Kwang-Sup Soh, Byung-Cheon Lee, Jung Sun Yoo, Ku-Youn Baik, Sung-Il Cho. Visualizing Agent Comprising a Janus Green B and Visualizing Method by Using the Same: Seoul National University R&DB Foundation. KR Patent 10-0950246, March 23, 2010, Republic of Korea; US Patent US20090155171A1, June 18, 2009, United States.',
      zh: 'Kwang-Sup Soh, Byung-Cheon Lee, Jung Sun Yoo, Ku-Youn Baik, Sung-Il Cho. 含 Janus Green B 的顯影劑及其顯影方法：首爾大學產學合作基金會。韓國專利 10-0950246，2010 年 3 月 23 日，大韓民國；美國專利 US20090155171A1，2009 年 6 月 18 日，美國。',
      ko: 'Kwang-Sup Soh, Byung-Cheon Lee, Jung Sun Yoo, Ku-Youn Baik, Sung-Il Cho. Janus Green B를 포함하는 시각화제 및 이를 이용한 시각화 방법: 서울대학교 산학협력단. 대한민국 특허 10-0950246, 2010년 3월 23일; 미국 특허 US20090155171A1, 2009년 6월 18일, 미국.',
    },
  },
  {
    text: {
      en: 'Kwang-Sup Soh, Hyeon-Min Johng, Hak-Soo Shin, Chunho Choi, Jung Sun Yoo, Young-Zoon Yoon, Changhoon Lee, Sung-Il Cho. Visualizing Agent Comprising a Magnetic Nanoparticle and Visualizing Method by Using the Same: Seoul National University R&DB Foundation. KR Patent 10-0875989, December 18, 2008, Republic of Korea.',
      zh: 'Kwang-Sup Soh, Hyeon-Min Johng, Hak-Soo Shin, Chunho Choi, Jung Sun Yoo, Young-Zoon Yoon, Changhoon Lee, Sung-Il Cho. 含磁性納米顆粒的顯影劑及其顯影方法：首爾大學產學合作基金會。韓國專利 10-0875989，2008 年 12 月 18 日，大韓民國。',
      ko: 'Kwang-Sup Soh, Hyeon-Min Johng, Hak-Soo Shin, Chunho Choi, Jung Sun Yoo, Young-Zoon Yoon, Changhoon Lee, Sung-Il Cho. 자성 나노입자를 포함하는 시각화제 및 이를 이용한 시각화 방법: 서울대학교 산학협력단. 대한민국 특허 10-0875989, 2008년 12월 18일.',
    },
  },
  {
    text: {
      en: 'Kwang-Sup Soh, Byung-Cheon Lee, Jung Sun Yoo, Changhoon Lee, Hyeon-Min Johng, Min Su Kim. Visualizing Method by Using the Alcian Blue: Seoul National University R&DB Foundation, Mobase Co., Ltd. KR Patent 10-0753899, August 24, 2007, Republic of Korea.',
      zh: 'Kwang-Sup Soh, Byung-Cheon Lee, Jung Sun Yoo, Changhoon Lee, Hyeon-Min Johng, Min Su Kim. 使用阿爾新藍（Alcian Blue）的顯影方法：首爾大學產學合作基金會、Mobase 公司。韓國專利 10-0753899，2007 年 8 月 24 日，大韓民國。',
      ko: 'Kwang-Sup Soh, Byung-Cheon Lee, Jung Sun Yoo, Changhoon Lee, Hyeon-Min Johng, Min Su Kim. Alcian Blue를 이용한 시각화 방법: 서울대학교 산학협력단, Mobase Co., Ltd. 대한민국 특허 10-0753899, 2007년 8월 24일.',
    },
  },
]

/* ---------------- Facilities (Resources) ---------------- */

export interface Facility {
  /** empty string when tbd (no photo yet) */
  photo: string
  /** facility / room name — kept in English */
  name: string
  description: Tr
  /** portrait photo → letterbox with object-contain on white instead of cover-crop */
  portrait?: boolean
  /** planned acquisition — photo area renders a TBD placeholder badge */
  tbd?: boolean
}

export const FACILITIES_INTRO: Tr = {
  en: 'The Translational Imaging Laboratory (Y1104) is dedicated to in vivo preclinical imaging, with state-of-the-art modalities for visualizing tissue samples and animal models.',
  zh: 'Translational Imaging Laboratory（Y1104）專注於活體臨床前影像，配備先進影像模態，用於組織樣本與動物模型的可視化。',
  ko: 'Translational Imaging Laboratory(Y1104)는 생체 내 전임상 영상 전용 시설로, 조직 샘플과 동물 모델을 시각화하는 최첨단 모달리티를 갖추고 있습니다.',
}

export const FACILITIES: Facility[] = [
  {
    photo: asset('facilities/y1101-lab.jpg'),
    name: 'HTI Research Laboratory (Y1101)',
    description: {
      en: 'HTI Research Laboratory (Y1101, Lee Shau Kee Building, PolyU) is well suited for biological and chemical experiments. Centrifuges, incubators, biosafety cabinets and other equipment enable safe, up-to-standard sample manipulation. These wet lab facilities allow our lab to prepare reagents and samples for imaging studies in a high-quality manner.',
      zh: 'HTI 研究實驗室（Y1101，李兆基樓，理大）適合開展生物與化學實驗。離心機、培養箱、生物安全櫃等設備確保樣本操作安全合規。這些濕實驗室設施使本實驗室能夠高質量地製備影像研究所需的各類試劑與樣本。',
      ko: 'HTI 연구실(Y1101, Lee Shau Kee Building, PolyU)은 생물학·화학 실험에 적합합니다. 원심분리기, 배양기, 생물안전작업대 등의 장비를 갖추어 안전하고 규격에 맞는 시료 조작이 가능하며, 이러한 습식 실험실 설비를 통해 영상 연구에 필요한 시약과 샘플을 고품질로 준비할 수 있습니다.',
    },
  },
  {
    photo: asset('facilities/y1104-lab.jpg'),
    name: 'Translational Imaging Laboratory (Y1104)',
    description: {
      en: 'Translational Imaging Laboratory (Y1104, Lee Shau Kee Building, PolyU) is dedicated to in vivo preclinical imaging studies. Equipment such as the multiphoton confocal microscope for intravital microscopy, IVIS SpectrumCT, MSOT and others enables our lab to visualize tissue samples and animal models in multiple aspects. These state-of-the-art imaging modalities ensure the quality of in vivo imaging research, with clinical translation as the final goal.',
      zh: '轉化影像實驗室（Y1104，李兆基樓，理大）專注於活體臨床前影像研究，配備活體顯微用多光子共聚焦顯微鏡、IVIS SpectrumCT、MSOT 等設備，可從多個維度對組織樣本與動物模型進行可視化。這些先進影像模態保障活體影像研究的質量，以臨床轉化為最終目標。',
      ko: '중개 영상 실험실(Y1104, Lee Shau Kee Building, PolyU)은 생체 내 전임상 영상 연구 전용 시설입니다. 생체 내 현미경용 다중광자 공초점 현미경, IVIS SpectrumCT, MSOT 등의 장비로 조직 샘플과 동물 모델을 다양한 측면에서 시각화하며, 최첨단 영상 모달리티로 생체 내 영상 연구의 질을 보장하고 최종적으로 임상 중개를 목표로 합니다.',
    },
  },
  {
    photo: asset('facilities/a1r-mp-plus.jpg'),
    name: 'Nikon A1R MP+ Multiphoton Confocal Microscope',
    portrait: true,
    description: {
      en: 'The Nikon A1R MP+ multiphoton confocal microscope (Y1104a In vivo Imaging Laboratory) is our choice for imaging deep inside living animals. Its hybrid scanning head design makes Z-stack imaging at a high S/N ratio possible, allowing both high-speed and high-quality scanning, so our researchers can image deep dynamics in vivo. Configuration — Scan Head: A1R MP+ (Nikon) · Laser Unit: Chameleon Vision II (Coherent) · Microscope: Eclipse Ni-E (Nikon).',
      zh: 'Nikon A1R MP+ 多光子共聚焦顯微鏡（Y1104a 活體影像實驗室）是我們深入活體動物內部成像的主力設備。混合掃描頭設計實現高信噪比 Z 軸層掃，兼具高速與高質量掃描，使研究者能夠觀察活體深部動態。配置——掃描頭：A1R MP+（Nikon）· 雷射器：Chameleon Vision II（Coherent）· 顯微鏡：Eclipse Ni-E（Nikon）。',
      ko: 'Nikon A1R MP+ 다중광자 공초점 현미경(Y1104a 생체 내 영상 실험실)은 살아있는 동물 내부 깊은 곳을 영상화하는 장비입니다. 하이브리드 스캐닝 헤드 설계로 높은 S/N 비의 Z-스택 이미징이 가능하며 고속·고품질 스캐닝을 모두 지원해, 연구자들이 생체 내 심부의 동적 변화를 관찰할 수 있습니다. 구성 — 스캔 헤드: A1R MP+(Nikon) · 레이저: Chameleon Vision II(Coherent) · 현미경: Eclipse Ni-E(Nikon).',
    },
  },
  {
    photo: '',
    name: 'Animal PET/SPECT/CT',
    tbd: true,
    description: {
      en: 'Animal PET/SPECT/CT — planned acquisition. Details will be announced once the system is installed.',
      zh: '小動物 PET/SPECT/CT——計劃購置中，設備到位後公布詳情。',
      ko: '소동물 PET/SPECT/CT — 도입 예정. 시스템 설치 후 자세한 내용을 안내합니다.',
    },
  },
]

/* ---------------- Research heritage (OIGTM) ---------------- */

export interface HeritageItem {
  title: Tr
  summary: Tr
  /** collaborator names & institutions — kept in English */
  collaborators?: string
}

export const HERITAGE_INTRO: Tr = {
  en: 'Before MI², the group built its imaging expertise as the Optical Imaging Group for Translational Medicine. These themes remain part of our research foundation.',
  zh: '在 MI² 之前，團隊以 Optical Imaging Group for Translational Medicine 的身份建立了影像技術實力。這些主題至今仍是我們研究基礎的一部分。',
  ko: 'MI² 이전, 본 그룹은 Optical Imaging Group for Translational Medicine으로서 영상 전문성을 쌓았습니다. 이러한 주제들은 지금도 우리 연구의 기반이 됩니다.',
}

export const HERITAGE_ITEMS: HeritageItem[] = [
  {
    title: { en: 'Fluorescence Molecular Imaging', zh: '熒光分子影像', ko: '형광 분자 영상' },
    summary: {
      en: 'Fluorescent imaging for intraoperative guidance, diagnosis and prognostication of cardiovascular disease and cancer; multimodal strategies combining PET/SPECT.',
      zh: '用於術中引導以及心血管疾病與癌症診斷和預後評估的熒光影像；結合 PET/SPECT 的多模態策略。',
      ko: '수술 중 가이드 및 심혈관 질환·암의 진단과 예후 판단을 위한 형광 영상; PET/SPECT를 결합한 멀티모달 전략.',
    },
    collaborators: 'Prof. Won Woo Lee, Prof. Byung-Chul Lee (SNU Bundang Hospital)',
  },
  {
    title: { en: 'Label-free In Vivo Imaging', zh: '無標記活體影像', ko: '무표지 생체 내 영상' },
    summary: {
      en: 'Spectral reflectance imaging for label-free intraoperative tissue identification.',
      zh: '用於術中無標記組織識別的光譜反射影像。',
      ko: '수술 중 무표지 조직 식별을 위한 분광 반사 영상.',
    },
    collaborators: 'Prof. Changsoon Kim (SNU)',
  },
  {
    title: {
      en: 'Nanomedicine with Intravital Imaging',
      zh: '納米醫學與活體影像',
      ko: '나노의학과 생체 내 영상',
    },
    summary: {
      en: 'High-resolution intravital and whole-body fluorescence imaging of nanoprobes/nanodrugs for cancer and macrophage targeting.',
      zh: '針對癌症及巨噬細胞靶向的納米探針/納米藥物高分辨率活體與全身熒光影像。',
      ko: '암 및 대식세포 타겟팅을 위한 나노프로브·나노약물의 고해상도 생체 내 및 전신 형광 영상.',
    },
    collaborators: 'Prof. Yuanzhe Piao (SNU), Dr. Tae-Rin Lee (AICT), Prof. Pilhan Kim (KAIST)',
  },
  {
    title: {
      en: 'Artificial Intelligence in Biomedical Imaging',
      zh: '生物醫學影像中的人工智能',
      ko: '생의학 영상에서의 인공지능',
    },
    summary: {
      en: 'Deep learning for peripheral nerve segmentation, label-free immune-cell characterization, low-dose fast MPI-SPECT.',
      zh: '用於周圍神經分割、無標記免疫細胞表徵及低劑量快速 MPI-SPECT 的深度學習。',
      ko: '말초신경 분할, 무표지 면역세포 특성화, 저선량 고속 MPI-SPECT를 위한 딥러닝.',
    },
    collaborators:
      'Dr. Xiaoming Wu (PolyU Computing), Dr. Minsik Lee (Hanyang), Dr. Boom Ting Kung & Dr. Ting Kung Au Yong (QEH), Prof. Jing Cai (PolyU HTI)',
  },
  {
    title: {
      en: 'Immunotherapy Response Monitoring',
      zh: '免疫治療反應監測',
      ko: '면역치료 반응 모니터링',
    },
    summary: {
      en: 'In vivo identification of immune components to assess immunotherapy outcomes using optical/molecular imaging and deep learning.',
      zh: '利用光學/分子影像與深度學習在活體內識別免疫成分，評估免疫治療效果。',
      ko: '광학·분자 영상과 딥러닝을 활용해 생체 내 면역 구성요소를 식별하여 면역치료 결과를 평가.',
    },
  },
]

export const HERITAGE_IMAGES = [
  {
    photo: asset('research/lymph-node-fluorescence.jpg'),
    caption: {
      en: 'Fluorescence imaging of lymph node metastasis',
      zh: '淋巴結轉移的熒光影像',
      ko: '림프절 전이의 형광 영상',
    } as Tr,
  },
  {
    photo: asset('research/mpi-spect-deep-learning.jpg'),
    caption: {
      en: 'Deep-learning reconstruction of MPI-SPECT images',
      zh: 'MPI-SPECT 影像的深度學習重建',
      ko: 'MPI-SPECT 영상의 딥러닝 재구성',
    } as Tr,
  },
]

/* ---------------- Join ---------------- */

export interface JoinSection {
  title: Tr
  text: Tr
}

export const JOIN_SECTIONS: JoinSection[] = [
  {
    title: { en: 'Graduate study', zh: '研究生課程', ko: '대학원 과정' },
    text: {
      en: 'We welcome enquiries from prospective MPhil and PhD students interested in AI for healthcare, molecular imaging, and drug discovery. Details on programmes and supervision [To be confirmed].',
      zh: '歡迎對醫療人工智能、分子影像及藥物研發感興趣的準 MPhil 及 PhD 學生查詢。課程及指導安排詳情[待確認]。',
      ko: '의료 AI, 분자 영상, 신약 개발에 관심 있는 MPhil 및 PhD 지원자의 문의를 환영합니다. 프로그램 및 지도 관련 세부 사항은 [확인 예정].',
    },
  },
  {
    title: {
      en: 'Visiting researchers and academics',
      zh: '訪問研究人員及學者',
      ko: '방문 연구자 및 학자',
    },
    text: {
      en: 'We are happy to discuss short-term and long-term visits for researchers working in related areas. Visit arrangements and funding [To be confirmed].',
      zh: '我們樂意與相關領域的研究人員商討短期或長期訪問安排。訪問安排及資助詳情[待確認]。',
      ko: '관련 분야 연구자의 단기 및 장기 방문을 기꺼이 논의합니다. 방문 일정 및 재정 지원은 [확인 예정].',
    },
  },
  {
    title: { en: 'Postdoctoral researchers', zh: '博士後研究人員', ko: '박사후 연구원' },
    text: {
      en: 'Postdoctoral openings will be advertised here as positions become available. Current openings [To be confirmed].',
      zh: '博士後職位空缺將於此公布。目前空缺情況[待確認]。',
      ko: '박사후 연구원 채용 공고는 자리가 생기는 대로 이곳에 게시됩니다. 현재 공개된 자리는 [확인 예정].',
    },
  },
]

