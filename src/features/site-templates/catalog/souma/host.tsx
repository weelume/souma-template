'use client'
import { createContext, useContext, type ReactNode } from 'react'
import type { TemplateLocale } from '../../types'
export interface SoumaHostOptions {
  brandName?: Record<TemplateLocale, string>
  logo?: string
  lightLogo?: string
  marketplaceHref?: string
  marketplaceLabel?: Record<TemplateLocale, string>
  marketplaceAriaLabel?: Record<TemplateLocale, string>
  filing?: ReactNode
}
const Context = createContext<SoumaHostOptions>({})
/** 品牌与市场能力由消费方注入，通用模板不依赖消费方路由。 */
export function SoumaHostProvider({ children, ...options }: SoumaHostOptions & { children: ReactNode }) { return <Context.Provider value={options}>{children}</Context.Provider> }
export function useSoumaHost() { return useContext(Context) }
