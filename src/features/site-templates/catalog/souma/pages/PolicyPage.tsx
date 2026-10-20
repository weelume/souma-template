'use client'
import { usePathname } from 'next/navigation'
import type { SiteTemplatePageProps } from '../../../types'
import { Shell } from '../components/Shell'
import { policies } from '../content/policies'
import { t } from '../content/data'
export default function PolicyPage({ locale = 'zh', basePath }: SiteTemplatePageProps) { const slug = usePathname().split('/').at(-1); if (slug !== 'privacy' && slug !== 'terms' && slug !== 'cookies') throw new Error('未登记的政策页面'); const policy = policies[slug]; return <Shell locale={locale} basePath={basePath}><article className="so-section so-policy so-inner-head"><p className="so-eyebrow">{locale === 'zh' ? '/ 示例政策 · 2026-10-20' : '/ DEMO POLICY · 2026-10-20'}</p><h1>{t(policy.title, locale)}</h1><p className="so-demo-note">{locale === 'zh' ? '模板补充页面。正式上线前须根据实际业务完善。' : 'Template extension. Adapt this policy to your actual business before launch.'}</p>{policy.sections.map(s => <section className="so-prose" key={s.title.en}><h2>{t(s.title, locale)}</h2><p>{t(s.text, locale)}</p></section>)}</article></Shell> }
