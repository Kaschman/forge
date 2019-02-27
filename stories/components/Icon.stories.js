import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs';

import Icon from 'Icon'

const icons = {
  Date: 'date',
  DateStart: 'dateStart'
}

storiesOf('components/Icon', module)
  .addDecorator(withKnobs)
  .add('Icon', () => (
    <div style={{ background: "white", padding: 20 }}>
      <Icon source={select('Icon Source', icons, 'date')} />
      <Icon source={select('Icon Source', icons, 'date')} backdrop />
      <Icon source={select('Icon Source', icons, 'date')} color="green" />
      <Icon source={select('Icon Source', icons, 'date')} color="green" backdrop />
    </div>
  ))
          
