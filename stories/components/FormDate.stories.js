import React from 'react'

import { storiesOf } from '@storybook/react'
import '@combine-labs/combine-polaris/styles.css'

import FormDate from 'FormDate'

const onChange = (name, value) => {
  console.log(name, value)
}

storiesOf('components/FormDate', module)
  .add('Empty State', () => (
    <FormDate
      name="date"
      onChange={onChange}
      value={new Date()}
    />
  ))
  .add('Labeled', () => (
    <FormDate
      name="date"
      label="Example Date Label"
      onChange={onChange}
      value={new Date()}
    />
  ))
  .add('Errored', () => (
    <FormDate
      name="date"
      label="Example Date Label"
      error="There was an error"
      onChange={onChange}
      value={new Date()}
    />
  ))
