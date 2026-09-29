import type { NextConfig } from 'next';

const config: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // GitHub Pages serves project repositories below /<repository-name>.
  // Set this to an empty string when the site is moved to a custom domain.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  turbopack: { root: process.cwd() },
};

export default config;
