// data/clients/caracas/index.ts
import { ClientConfig } from '@/data/types/client'
import { content } from './content'
import { menu } from './menu'
import { seo } from './seo'
import { config } from './config'
import { images } from './images'
import { contact } from './contact'

export const caracasConfig: ClientConfig = {
  content,
  menu,
  seo,
  config,
  images,
  contact,
}

export default caracasConfig
