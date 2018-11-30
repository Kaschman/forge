import '@storybook/addon-console'
import { withInfo } from '@storybook/addon-info'
import { addDecorator } from '@storybook/react'

export default () => {
  addDecorator(withInfo({inline: true}))
}
