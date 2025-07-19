import { NextResponse } from 'next/server'
import { getAllSlugs } from '@/lib/posts'
import pool from '@/lib/db';


export async function GET() {
  const siteUrl = 'https://financetech.online'
  const slugs = await getAllSlugs()

  const urls = slugs.map((slug) => `
    <url>
      <loc>${siteUrl}/posts/publicacoes/${slug}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${siteUrl}</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
      ${urls}
    </urlset>
  `

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
