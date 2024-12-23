const fs = require('fs'); // For file handling
const path = require('path'); // For paths

const siteUrl = 'https://thesimonshi.com'; // Replace with your domain

// Define routes to include in the sitemap
const pages = [
  '/',
  '/home',
  '/socials',
  '/coaching',
  '/contact',
  '/runCalculator',
];

// Create XML structure
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${siteUrl}${page}</loc>
      <changefreq>weekly</changefreq>
      <priority>${page === '/' ? '1.0' : '0.8'}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

// Save the sitemap in the public folder
fs.writeFileSync(path.resolve(__dirname, './public/sitemap.xml'), sitemap);

console.log('Sitemap successfully generated!');
