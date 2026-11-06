import { cleanSlug, getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

// 블로그 카테고리. 글 frontmatter 의 `category` 값과 이름이 같아야 합니다.
export const categories = [
  { text: '신용·카드', description: '신용점수 관리, 체크카드와 신용카드 쓰는 법', icon: 'tabler:credit-card' },
  { text: '저축·투자 기초', description: '예금·적금, 파킹통장, ISA·연금저축 개념', icon: 'tabler:pig-money' },
  { text: '대출', description: '금리 종류, 상환 방식, 전세대출 절차', icon: 'tabler:building-bank' },
  { text: '보험', description: '실손보험, 자동차보험, 보험 고르는 기준', icon: 'tabler:shield-check' },
  { text: '세금·월급', description: '월급명세서, 4대보험, 연말정산 기초', icon: 'tabler:receipt-tax' },
  {
    text: 'Korea Life Guide',
    description: 'English guides for foreigners: Korean apps, payments, banking and daily life',
    icon: 'tabler:world',
  },
].map((category) => ({ ...category, href: getPermalink(cleanSlug(category.text), 'category') }));

// 외국인용 영어 글 카테고리. 이 카테고리의 글과 목록은 영어 화면(메뉴·버튼)으로 보여 줍니다.
export const EN_CATEGORY = 'Korea Life Guide';
export const enCategoryHref = getPermalink(cleanSlug(EN_CATEGORY), 'category');
export const isEnglishCategory = (title?: string) => title === EN_CATEGORY;

export const headerData = {
  links: [
    {
      text: '전체 글',
      href: getBlogPermalink(),
    },
    ...categories.map(({ text, href }) => ({ text, href })),
    {
      text: '소개',
      href: getPermalink('/about'),
    },
  ],
  actions: [],
};

export const headerDataEn = {
  links: [
    { text: 'Korea Life Guide', href: enCategoryHref },
    { text: 'Free Tools', href: 'https://en-datatool.zinnote.kr/' },
    { text: '한국어 (Korean)', href: getBlogPermalink() },
  ],
  actions: [],
};

export const footerDataEn = {
  links: [
    {
      title: 'Guides',
      links: [
        { text: 'Korea Life Guide', href: enCategoryHref },
        { text: 'Free Tools for Life in Korea', href: 'https://en-datatool.zinnote.kr/' },
      ],
    },
    {
      title: 'Site',
      links: [
        { text: 'ZIN Money (Korean)', href: getBlogPermalink() },
        { text: 'RSS', href: getAsset('/rss.xml') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms (KO)', href: getPermalink('/terms') },
    { text: 'Privacy (KO)', href: getPermalink('/privacy') },
  ],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `
    © ${new Date().getFullYear()} ZIN Money · General information only. Not financial advice.
  `,
};

export const footerData = {
  links: [
    {
      title: '카테고리',
      links: [{ text: '전체 글', href: getBlogPermalink() }, ...categories.map(({ text, href }) => ({ text, href }))],
    },
    {
      title: '사이트',
      links: [
        { text: '소개', href: getPermalink('/about') },
        { text: '면책 고지', href: getPermalink('/disclaimer') },
        { text: 'IT 가이드 (ZIN 노트)', href: 'https://zinnote.kr' },
        { text: 'RSS 구독', href: getAsset('/rss.xml') },
      ],
    },
  ],
  secondaryLinks: [
    { text: '이용약관', href: getPermalink('/terms') },
    { text: '개인정보처리방침', href: getPermalink('/privacy') },
    { text: '면책 고지', href: getPermalink('/disclaimer') },
  ],
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `
    © ${new Date().getFullYear()} ZIN 머니 · 이 블로그의 글은 일반 정보이며, 금융 상품 가입이나 투자를 권유하지 않습니다.
  `,
};
