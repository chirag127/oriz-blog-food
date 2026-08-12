export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'food',
  name: 'Test Kitchen',
  origin: 'https://food-blog.oriz.in',
  tagline: 'Recipes tested on a real weeknight',
  description:
    'Recipes tested on a real weeknight — Indian and global home cooking, written so the quantities and steps just work. By Chirag Singhal.',
}
