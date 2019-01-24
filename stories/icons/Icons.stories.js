import React from 'react'

import { storiesOf } from '@storybook/react'
import '@combine-labs/combine-polaris/styles.css'

import { AppProvider, Icon } from '@combine-labs/combine-polaris'

import * as icons from 'icons/formattedIcons'

const styles = {
  iconWrapper: {
    width: '20px',
    margin: '0 10px',
  },
}

const iconComponents = Object.keys(icons).map((key) => {
  return (
    <div style={styles.iconWrapper}>
      <Icon key={key} source={icons[key]} />
    </div>
  )
})

storiesOf('icons', module)
  .add('formatted', () => (
    <AppProvider>
      <div style={{display: 'flex'}}>
        {iconComponents}
      </div>
    </AppProvider>
  ))
