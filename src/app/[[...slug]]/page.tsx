import { notFound } from 'next/navigation'
import { soumaTemplate } from '../../features/site-templates/catalog/souma/meta'
export async function generateStaticParams() { return soumaTemplate.surfaces[0].pages.flatMap(page => [{ slug: page.slug ? page.slug.split('/') : [] }, { slug: ['en', ...(page.slug ? page.slug.split('/') : [])] }]) }
export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params, locale = slug[0] === 'en' ? 'en' : 'zh', path = (locale === 'en' ? slug.slice(1) : slug).join('/')
  const page = soumaTemplate.surfaces[0].pages.find(page => page.slug === path)
  if (!page) notFound()
  const { default: Component } = await page.load()
  return <Component locale={locale} basePath={locale === 'en' ? '/en' : ''} />
}
