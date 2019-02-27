import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs';

import Icon from 'Icon'

const icons = {
  date: 'date',
  dateStart: 'dateStart',
  dateEnd: 'dateEnd',
  dateAlert: 'dateAlert',
  city: 'city',
  property: 'property',
  location: 'location',
  activity: 'activity',
  size: 'size',
  areaGross: 'areaGross',
  areaSales: 'areaSales',
  decision: 'decision',
  misc: 'misc',
  comment: 'comment',
}
const defaultIcon = 'dateAlert'

storiesOf('components/Icon', module)
  .addDecorator(withKnobs)
  .add('Icon', () => (
    <div style={{ background: "white", padding: 20 }}>
      <Icon source={select('Icon Source', icons, defaultIcon)} />
      <Icon source={select('Icon Source', icons, defaultIcon)} backdrop />
      <Icon source={select('Icon Source', icons, defaultIcon)} color="green" />
      <Icon source={select('Icon Source', icons, defaultIcon)} color="green" backdrop />
    </div>
  ))
          
