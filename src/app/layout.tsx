import type { ReactNode } from 'react'
import './globals.css'
export const metadata = { title: 'Souma · 日常瑜伽与正念活动', description: '给自己一点空间 找到日常的节奏' }
export default function Layout({ children }: { children: ReactNode }) { return <html lang="zh-CN"><body>{children}</body></html> }
