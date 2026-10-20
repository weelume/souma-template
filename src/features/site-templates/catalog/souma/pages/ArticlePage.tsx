'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import type { SiteTemplatePageProps } from '../../../types'
import { Shell } from '../components/Shell'
import { Photo } from '../components/Primitives'
import { articles, t } from '../content/data'
export default function ArticlePage({ locale = 'zh', basePath }: SiteTemplatePageProps) { const slug = usePathname().split('/').at(-1), article = articles.find(a => a.slug === slug); if (!article) throw new Error('未登记的日志页面：' + slug); return <Shell locale={locale} basePath={basePath}><article className="so-section so-article"><Link className="so-text-link" href={`${basePath}/blog`}>← {locale === 'zh' ? '练习日志' : 'Journal'}</Link><p className="so-eyebrow">{t(article.category, locale)} · <time dateTime={article.date}>{article.date}</time></p><h1>{t(article.title, locale)}</h1><p className="so-large-copy">{t(article.intro, locale)}</p><Photo name={article.image} alt={t(article.title, locale)} /><div className="so-prose">{article.sections.map(s => <section key={s.title.en}><h2>{t(s.title, locale)}</h2><p>{t(s.text, locale)}</p></section>)}</div><aside className="so-related"><h2>{locale === 'zh' ? '继续探索' : 'Keep exploring'}</h2>{articles.filter(a => a.slug !== slug).map(a => <Link key={a.slug} href={`${basePath}/blog/${a.slug}`}>{t(a.title, locale)} ↗</Link>)}</aside></article></Shell> }
