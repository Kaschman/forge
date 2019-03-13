import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, select, radios, boolean } from '@storybook/addon-knobs';

import Icon from 'Icon'

const largeIcons = {
  activity: 'activity',
  areaGross: 'areaGross',
  areaSales: 'areaSales',
  breakFuture: 'breakFuture',
  breakPast: 'breakPast',
  breakServed: 'breakServed',
  breakUpcoming: 'breakUpcoming',
  city: 'city',
  comment: 'comment',
  date: 'date',
  dateAlert: 'dateAlert',
  dateEnd: 'dateEnd',
  dateStart: 'dateStart',
  decision: 'decision',
  location: 'location',
  misc: 'misc',
  numberIcon: 'numberIcon',
  property: 'property',
  settingsLarge: 'settingsLarge',
  size: 'size',
}
const defaultLargeIcon = 'date'

const smallIcons = {
  add: 'add',
  alert: 'alert',
  arrowLeft: 'arrowLeft',
  arrowRight: 'arrowRight',
  cancel: 'cancel',
  checkmark: 'checkmark',
  checkmarkSmall: 'checkmarkSmall',
  clock: 'clock',
  completed: 'completed',
  completedAll: 'completedAll',
  deleteIcon: 'deleteIcon',
  ellipsis: 'ellipsis',
  globe: 'globe',
  info: 'info',
  paginationEnd: 'paginationEnd',
  paginationStart: 'paginationStart',
  refresh: 'refresh',
  replay: 'replay',
  search: 'search',
  settings: 'settings',
  thumbsDown: 'thumbsDown',
  thumbsUp: 'thumbsUp',
  visibility: 'visibility',
  warning: 'warning',
}
const defaultSmallIcon = 'clock'

const colors = {
  undefined: 'undefined',
  ink: 'ink',
  blue: 'blue',
  green: 'green',
  yellow: 'yellow',
  red: 'red',
}
const defaultColor = 'undefined'

storiesOf('components/Icon', module)
  .addDecorator(withKnobs)
  .add('Large Icon', () => (
    <div style={{ background: "white", padding: 20 }}>
      <Icon source={select('Icon Source', largeIcons, defaultLargeIcon)} color={radios('Color', colors, defaultColor)} backdrop={boolean('Backdrop', false)} />
    </div>
  ))
  .add('Small Icon', () => (
    <div style={{ background: "white", padding: 20 }}>
      <Icon source={select('Icon Source', smallIcons, defaultSmallIcon)} color={radios('Color', colors, defaultColor)} backdrop={boolean('Backdrop', false)} />
    </div>
  ))
