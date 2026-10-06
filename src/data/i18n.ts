export type Lang = 'en' | 'zh' | 'ko'

/** Trilingual string */
export interface Tr {
  en: string
  zh: string
  ko: string
}

export const LANG_LABELS: { id: Lang; short: string; name: string }[] = [
  { id: 'en', short: 'EN', name: 'English' },
  { id: 'zh', short: '中', name: '繁體中文' },
  { id: 'ko', short: '한', name: '한국어' },
]

const tr = (en: string, zh: string, ko: string): Tr => ({ en, zh, ko })

/**
 * UI string dictionary — every entry must exist in all three languages.
 * Names, degrees, paper titles, venues and institutional addresses stay in English
 * and therefore do not appear here.
 */
export const UI = {
  /* tabs / nav */
  'tabs.news': tr('News', '新聞', '뉴스'),
  'tabs.about': tr('About', '關於', '소개'),
  'tabs.people': tr('People', '成員', '구성원'),
  'tabs.research': tr('Research', '研究', '연구'),
  'tabs.resources': tr('Resources', '資源', '리소스'),
  'tabs.join': tr('Join', '加入我們', '합류'),

  /* common */
  'common.tbc': tr('[To be confirmed]', '[待確認]', '[확인 예정]'),
  'common.photoToBeAdded': tr('Photo to be added', '照片待補充', '사진 추후 추가'),

  /* hero */

  /* section headings */
  'news.title': tr('News & Updates', '新聞與動態', '뉴스 및 소식'),
  'about.title': tr('About', '關於', '소개'),
  'people.title': tr('Our People', '我們的團隊', '구성원'),
  'research.title': tr('Research', '研究', '연구'),
  'resources.title': tr('Resources', '資源', '리소스'),
  'resources.subtitle': tr(
    'Software, datasets, and laboratory facilities of our group.',
    '本實驗室的軟件、數據集與實驗設施。',
    '우리 연구실의 소프트웨어, 데이터셋 및 연구 시설.',
  ),
  'join.title': tr('Join us', '加入我們', '함께하기'),
  'join.subtitle': tr(
    'Opportunities for students, researchers and visitors.',
    '學生、研究人員及訪問學者的機會。',
    '학생, 연구자 및 방문 학자를 위한 기회입니다.',
  ),

  /* news panel */
  'news.tag': tr('News', '新聞', '뉴스'),
  'news.recent': tr('Recent News', '最新動態', '최근 소식'),
  'news.previous': tr('Previous News', '過往新聞', '지난 소식'),
  'news.more': tr('More News', '更多新聞', '더 많은 뉴스'),
  'news.close': tr('Close', '關閉', '닫기'),

  /* bottom banner */
  'bottom.backToNews': tr('Back to News', '返回新聞', '뉴스로 돌아가기'),
  'bottom.about': tr('About us', '關於我們', '소개'),
  'bottom.people': tr('Our People', '團隊成員', '구성원'),
  'bottom.research': tr('Research', '研究方向', '연구'),
  'bottom.join': tr('Join us', '加入我們', '합류 안내'),

  /* about panel */
  'about.lead2': tr(
    'Our researchers integrate expertise across artificial intelligence, biomedical engineering, molecular imaging, and clinical translation.',
    '我們的研究團隊融合人工智能、生物醫學工程、分子影像及臨床轉化等領域的專業知識。',
    '우리 연구진은 인공지능, 생의학 공학, 분자 영상 및 임상 변환에 걸친 전문성을 통합하고 있습니다.',
  ),
  'about.learnMore': tr(
    'Learn more about our research',
    '深入了解我們的研究',
    '연구 자세히 보기',
  ),
  'about.values': tr('Our Values', '我們的價值觀', '우리의 가치'),
  'about.location': tr('Our Location', '我們的位置', '위치'),
  'about.history': tr('Our History', '我們的歷史', '연혁'),
  'about.historyText': tr(
    'The lab was founded by Prof. Jung Sun Yoo and was previously known as the Optical Imaging Group for Translational Medicine (OIGTM), established at Seoul National University and relocated to The Hong Kong Polytechnic University in 2016. It now continues as MI² — Molecular Imaging & Intelligence Laboratory, extending its optical and molecular imaging heritage with artificial intelligence.',
    '本實驗室由 Jung Sun Yoo 教授創立，前身為 Optical Imaging Group for Translational Medicine（OIGTM），始建於 Seoul National University，2016 年遷至香港理工大學。現以 MI² — Molecular Imaging & Intelligence Laboratory 延續發展，在光學與分子影像的傳承上結合人工智能。',
    '본 연구실은 Jung Sun Yoo 교수가 설립했으며, 전신은 Seoul National University에서 시작되어 2016년 The Hong Kong Polytechnic University로 이전한 Optical Imaging Group for Translational Medicine(OIGTM)입니다. 현재는 MI² — Molecular Imaging & Intelligence Laboratory로서 광학·분자 영상의 유산을 인공지능으로 확장하고 있습니다.',
  ),

  /* people panel */
  'people.pi': tr('Principal Investigator', '首席研究員', '연구책임자'),
  'people.postdoc': tr('Postdoctoral Fellow', '博士後研究員', '박사후 연구원'),
  'people.phd': tr('PhD Students', '博士生', '박사과정 학생'),
  'people.dhsc': tr('DHSc Student', 'DHSc 學生', 'DHSc 학생'),
  'people.viewProfile': tr('View PolyU profile →', '查看理大官方主頁 →', 'PolyU 공식 프로필 →'),
  'people.collaborators': tr('Collaborators', '合作夥伴', '협력자'),
  'people.alumniPolyU': tr('Alumni — PolyU', '校友 — PolyU', '동문 — PolyU'),
  'people.alumniSNU': tr(
    'Alumni — Seoul National University',
    '校友 — Seoul National University',
    '동문 — Seoul National University',
  ),

  /* research panel */
  'research.spansNote': tr(
    'Our work spans three pillars.',
    '我們的工作涵蓋三大支柱。',
    '우리의 연구는 세 가지 축에 걸쳐 있습니다.',
  ),
  'research.pillarsHeading': tr('Our research pillars', '研究支柱', '연구의 세 축'),
  'research.selectedHeading': tr('Selected Publications', '精選論著', '대표 논문'),
  'research.allHeading': tr('All Publications', '全部論著', '전체 논문'),
  'research.techniques': tr('Techniques we use', '我們使用的技術', '활용 기법'),
  'research.applications': tr('Application areas', '應用領域', '응용 분야'),
  'research.heritageHeading': tr(
    'Research heritage (OIGTM)',
    '研究傳承（OIGTM）',
    '연구 계보 (OIGTM)',
  ),
  'research.collaborators': tr('Collaborators:', '合作者：', '협력자:'),

  /* resources panel */
  'resources.visitSite': tr('Visit site →', '前往網站 →', '웹사이트 방문 →'),
  'resources.software': tr('Software', '軟件', '소프트웨어'),
  'resources.facilities': tr('Facilities', '實驗設施', '연구 시설'),
  'resources.tbd': tr('TBD', '待定', '추후 공개'),

  /* join panel */
  'join.contact': tr('Contact us', '聯絡我們', '문의하기'),
  'join.copyEmail': tr('Copy email', '複製郵箱', '이메일 복사'),
  'join.copied': tr('Copied ✓', '已複製 ✓', '복사됨 ✓'),
} as const

export type UiKey = keyof typeof UI
