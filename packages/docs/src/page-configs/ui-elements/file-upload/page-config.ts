import { ApiDocsBlock } from '@/types/configTypes'
import { PageGenerationHelper } from '@/helpers/DocsHelper'
import VaFileUpload from 'vuestic-ui/src/components/va-file-upload/VaFileUpload.vue'
import apiOptions from './api-options'

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
const cssVariables = import('!raw-loader!vuestic-ui/src/components/va-file-upload/_variables.scss')

const block = new PageGenerationHelper(__dirname)

const config: ApiDocsBlock[] = [
  block.title('fileUpload.title'),
  block.paragraph('fileUpload.summaryText'),

  block.subtitle('all.examples'),

  ...block.exampleBlock(
    'fileUpload.examples.default.title',
    'fileUpload.examples.default.text',
    'Default',
  ),
  ...block.exampleBlock(
    'fileUpload.examples.dragAndDrop.title',
    'fileUpload.examples.dragAndDrop.text',
    'DragAndDrop',
  ),
  ...block.exampleBlock(
    'fileUpload.examples.validation.title',
    'fileUpload.examples.validation.text',
    'Validation',
  ),
  ...block.exampleBlock(
    'fileUpload.examples.gallery.title',
    'fileUpload.examples.gallery.text',
    'Gallery',
  ),
  ...block.exampleBlock(
    'fileUpload.examples.slots.title',
    'fileUpload.examples.slots.text',
    'Slots',
  ),
  ...block.exampleBlock(
    'fileUpload.examples.undo.title',
    'fileUpload.examples.undo.description',
    'Undo',
  ),

  block.subtitle('all.api'),
  block.api(VaFileUpload, apiOptions),

  block.subtitle('all.cssVariables'),
  block.file(cssVariables),
]

export default config
