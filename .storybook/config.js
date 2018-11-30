import { configure } from '@storybook/react'
import '@storybook/addon-console'

import addDecorators from './addDecorators'

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorators()

configure(loadStories, module)
