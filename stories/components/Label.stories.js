import React from 'react'

import { storiesOf } from '@storybook/react'

import Label from 'Label'

storiesOf('components/Label', module)
  .add('Label', () => (
    <Label
      label="First Name"
    />
  ))
  .add('Optional', () => (
    <Label
      label="First Name"
      optional
    />
  ))