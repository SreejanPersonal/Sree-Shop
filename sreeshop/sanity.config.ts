import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {markdownSchema} from 'sanity-plugin-markdown'
import {schemaTypes} from './schemaTypes'
import corsConfig from './cors-config'

export default defineConfig({
  name: 'default',
  title: 'Sree.Shop',

  projectId: '090e1vat',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
  
  // CORS configuration
  cors: corsConfig.allowedOrigins,
  // Additional CORS settings
  api: {
    cors: {
      allowOrigins: corsConfig.allowedOrigins,
      allowCredentials: corsConfig.allowCredentials,
      maxAge: corsConfig.maxAge,
    }
  }
})
