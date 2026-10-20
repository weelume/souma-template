import type { SiteTemplate } from '../../types'
export const soumaTemplate: SiteTemplate = { ...{
  "id": "souma",
  "gitUrl": "https://github.com/weelume/souma-template",
  "name": "Souma · 日常瑜伽与正念",
  "localizedNames": {
    "en": "Souma · Yoga & mindful movement"
  },
  "sceneId": "corporate-site",
  "listed": false,
  "tags": [
    "瑜伽",
    "正念生活",
    "森林绿",
    "中英文",
    "PC / iPad / H5"
  ],
  "summary": "把练习带入生活：森林光影首屏、练习计划、口袋工作室、会员故事、订阅展示、FAQ 与双语日志。",
  "accentColor": "#293c2e",
  "cover": "/templates/souma/screenshots/desktop-home.webp",
  "screenshots": [
    {
      "src": "/templates/souma/screenshots/desktop-home.webp",
      "alt": "Souma desktop home",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/souma/screenshots/desktop-practice.webp",
      "alt": "Souma desktop practice",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/souma/screenshots/desktop-blog.webp",
      "alt": "Souma desktop blog",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/souma/screenshots/desktop-contact.webp",
      "alt": "Souma desktop contact",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/souma/screenshots/tablet-home.webp",
      "alt": "Souma tablet home",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/souma/screenshots/tablet-practice.webp",
      "alt": "Souma tablet practice",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/souma/screenshots/tablet-blog.webp",
      "alt": "Souma tablet blog",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/souma/screenshots/tablet-contact.webp",
      "alt": "Souma tablet contact",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/souma/screenshots/mobile-home.webp",
      "alt": "Souma mobile home",
      "device": "mobile",
      "width": 390,
      "height": 844
    },
    {
      "src": "/templates/souma/screenshots/mobile-practice.webp",
      "alt": "Souma mobile practice",
      "device": "mobile",
      "width": 390,
      "height": 844
    },
    {
      "src": "/templates/souma/screenshots/mobile-blog.webp",
      "alt": "Souma mobile blog",
      "device": "mobile",
      "width": 390,
      "height": 844
    },
    {
      "src": "/templates/souma/screenshots/mobile-contact.webp",
      "alt": "Souma mobile contact",
      "device": "mobile",
      "width": 390,
      "height": 844
    }
  ]
}, surfaces: [{ id: 'site', name: '瑜伽与正念官网', platform: 'pc', locales: ['zh','en'], pages: [
{ slug: "", title: "首页", localizedTitles: { en: "Home" }, load: () => import('./pages/HomePage') },
{ slug: "download", title: "下载应用", localizedTitles: { en: "Get the app" }, load: () => import('./pages/DownloadPage') },
{ slug: "blog", title: "练习日志", localizedTitles: { en: "Journal" }, load: () => import('./pages/BlogPage') },
{ slug: "blog/a-little-space", title: "为自己留一点空间", localizedTitles: { en: "A little space for yourself" }, load: () => import('./pages/ArticlePage') },
{ slug: "blog/morning-rhythm", title: "温柔开启清晨", localizedTitles: { en: "A gentler morning" }, load: () => import('./pages/ArticlePage') },
{ slug: "blog/evening-pause", title: "柔软的结尾", localizedTitles: { en: "A softer landing" }, load: () => import('./pages/ArticlePage') },
{ slug: "contact", title: "联系我们", localizedTitles: { en: "Contact" }, load: () => import('./pages/ContactPage') },
{ slug: "privacy", title: "隐私政策", localizedTitles: { en: "Privacy policy" }, load: () => import('./pages/PolicyPage') },
{ slug: "terms", title: "使用条款", localizedTitles: { en: "Terms of use" }, load: () => import('./pages/PolicyPage') },
{ slug: "cookies", title: "Cookie 政策", localizedTitles: { en: "Cookie policy" }, load: () => import('./pages/PolicyPage') }
] }] }
