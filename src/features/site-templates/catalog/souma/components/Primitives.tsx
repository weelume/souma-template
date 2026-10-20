'use client'
import { useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { TemplateLocale } from '../../../types'
import { brand } from '../config/brand'
export function Photo({ name, alt, className = '' }: { name: string; alt: string; className?: string }) { return <img className={className} src={`${brand.assetBase}/images/${name}`} alt={alt} loading="lazy" /> }
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  return <motion.div className={className} initial={false} whileInView={reduce ? undefined : { opacity: [0.6, 1], y: [14, 0] }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.55 }}>{children}</motion.div>
}
export function DownloadButton({ locale, label, className = '' }: { locale: TemplateLocale; label?: string; className?: string }) {
  const [show, setShow] = useState(false)
  return <span className={`so-download ${className}`}><button type="button" className="so-button" onClick={() => setShow(!show)} aria-expanded={show}>{label || (locale === 'zh' ? '下载应用' : 'Download the app')}<span aria-hidden="true">↗</span></button>{show && <span role="status" className="so-download-note">{locale === 'zh' ? '应用即将上线；此按钮仅作展示，不会下载。' : 'Coming soon. This is a display button; no download starts.'}</span>}</span>
}
export function SectionHead({ label, number, title, text }: { label: string; number: string; title: string; text?: string }) { return <div className="so-section-head"><div className="so-eyebrow"><span>/ {label}</span><span>[{number}]</span></div><h2>{title}</h2>{text && <p>{text}</p>}</div> }
