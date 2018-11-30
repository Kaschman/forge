import React from 'react'

import { storiesOf } from '@storybook/react'

import { FormDate } from 'Components'

storiesOf('FormDate', module)
  .add('Empty State', () => (
    <FormDate
      name='Date'
      onChange={(val) => console.log(val)}
      value={new Date()}
    />
  ))
