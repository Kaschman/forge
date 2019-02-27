import React from 'react'

import { storiesOf } from '@storybook/react'

import Icon from 'Icon'

storiesOf('components/Icon', module)
  .add('Icon', () => (
    <div style={{ background: "white", padding: 20 }}>
      <Icon source="date" />
      <Icon source="date" backdrop />
      <Icon source="date" color="green" />
      <Icon source="date" color="green" backdrop />
    </div>
  ))
  