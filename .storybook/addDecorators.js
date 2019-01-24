import React from 'react'
import '@storybook/addon-console'
import { withInfo } from '@storybook/addon-info'
import { addDecorator } from '@storybook/react'

export default () => {
  addDecorator(withInfo({inline: true}))
  addDecorator(
    story => (
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        {story()}
      </div>
    )
  )
}
