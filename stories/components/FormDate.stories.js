import React from 'react'

import { storiesOf } from '@storybook/react'
import '@combine-labs/combine-polaris/styles.css'

import { FormDate } from 'components'

storiesOf('components/FormDate', module)
  .add('Empty State', () => (
    <FormDate
      name='date'
      onChange={(val) => console.log(val)}
      value={new Date()}
    />
  ))
  .add('Labeled', () => (
    <FormDate
      name='date'
      label='Example Date Label'
      onChange={(val) => console.log(val)}
      value={new Date}
    />
  ))
  .add('Errored', () => (
    <FormDate
      name='date'
      label='Example Date Label'
      error='There was an error'
      onChange={(val) => console.log(val)}
      value={new Date}
    />
  ))
