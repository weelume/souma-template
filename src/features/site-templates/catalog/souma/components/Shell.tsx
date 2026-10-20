'use client'
import { useEffect, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import type { SiteTemplatePageProps } from '../../../types'
import { brand } from '../config/brand'
import { nav } from '../content/data'
import { useSoumaHost } from '../host'
import { DownloadButton } from './Primitives'
import '../theme.css'
export function Shell({ locale = 'zh', basePath, children }: SiteTemplatePageProps & { children: ReactNode }) {
  const host = useSoumaHost(), pathname = usePathname(), router = useRouter(), [open, setOpen] = useState(false), [languageHref, setLanguageHref] = useState('')
  const name = host.brandName?.[locale] || brand.name[locale], root = basePath.replace(/\/$/, ''), unlocalized = locale === 'en' ? root.replace(/\/en$/, '') : root
  const target = locale === 'en' ? pathname.replace(/\/en(?=\/|$)/, '') || '/' : `${unlocalized}/en${pathname.slice(unlocalized.length)}`
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false) }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close) }, [])
  const link = (slug = '') => `${root}${slug ? '/' + slug : ''}` || '/'
  return <div className="so-site" lang={locale === 'zh' ? 'zh-CN' : 'en'}>
    <a className="so-skip" href="#so-main">{locale === 'zh' ? '跳至内容' : 'Skip to content'}</a>
    <header className="so-header"><Link className="so-brand" href={link()} aria-label={name}>{host.lightLogo && <img src={host.lightLogo} alt="" />}{name}<span aria-hidden="true">*</span></Link>
      <nav className={open ? 'so-nav is-open' : 'so-nav'} aria-label={locale === 'zh' ? '主导航' : 'Main navigation'}>{nav.map(([id, zh, en]) => <Link key={id} href={`${link()}#${id}`} onClick={() => setOpen(false)}>{locale === 'zh' ? zh : en}</Link>)}</nav>
      <Link className="so-language" href={languageHref || target} onPointerEnter={() => setLanguageHref(target + location.search + location.hash)} onFocus={() => setLanguageHref(target + location.search + location.hash)} onClick={event => { event.preventDefault(); setOpen(false); router.push(target + location.search + location.hash) }} aria-label={locale === 'zh' ? '切换为英文' : 'Switch to Chinese'}>{locale === 'zh' ? 'EN' : '中文'}</Link>
      <Link className="so-nav-cta" href={link('download')}>{locale === 'zh' ? '获取应用' : 'Get the app'}<span aria-hidden="true">↗</span></Link><button className="so-menu" type="button" aria-label={locale === 'zh' ? '切换菜单' : 'Toggle menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button>
    </header>
    <main id="so-main">{children}</main>
    <footer className="so-footer"><div className="so-footer-top"><h2>{locale === 'zh' ? <>从此刻开始<br />找到自己的节奏</> : <>Begin your journey.<br />Find your own rhythm.</>}</h2><DownloadButton locale={locale} /></div><div className="so-footer-grid"><div><p className="so-eyebrow">{locale === 'zh' ? '探索更多' : 'EXPLORE'}</p>{nav.map(([id, zh, en]) => <Link key={id} href={`${link()}#${id}`}>{locale === 'zh' ? zh : en}</Link>)}</div><div><p className="so-eyebrow">{locale === 'zh' ? '继续了解' : 'DISCOVER'}</p><Link href={link('blog')}>{locale === 'zh' ? '练习日志' : 'Journal'}</Link><Link href={link('contact')}>{locale === 'zh' ? '联系我们' : 'Contact'}</Link><Link href={link('privacy')}>{locale === 'zh' ? '隐私政策' : 'Privacy policy'}</Link><Link href={link('terms')}>{locale === 'zh' ? '使用条款' : 'Terms of use'}</Link><Link href={link('cookies')}>{locale === 'zh' ? 'Cookie 政策' : 'Cookie policy'}</Link></div><div><p className="so-eyebrow">{locale === 'zh' ? '融入真实生活' : 'MADE FOR REAL LIFE'}</p><p>{locale === 'zh' ? '一点舒展 一次深呼吸\n让日常多一点从容' : 'A little movement. A deeper breath. More room for you.'}</p>{host.marketplaceHref && <Link href={host.marketplaceHref}>{host.marketplaceLabel?.[locale]}</Link>}</div></div><div className="so-footer-brand">{name}<span>*</span></div><div className="so-footer-bottom"><span>© {brand.year} {name}. {locale === 'zh' ? '找到自己的节奏' : 'FIND YOUR OWN RHYTHM.'}</span>{host.filing}<span>{locale === 'zh' ? '本地演示 · 无订阅或发送服务' : 'LOCAL DEMO · NO SUBSCRIPTIONS OR MESSAGING'}</span></div></footer>
    {host.marketplaceHref && <Link className="so-marketplace" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}>{host.lightLogo && <img src={host.lightLogo} alt="" />}<span>{name}</span></Link>}
  </div>
}
