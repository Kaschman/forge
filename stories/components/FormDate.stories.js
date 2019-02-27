import React from 'react'
import moment from 'moment'

import { storiesOf } from '@storybook/react'
import '@combine-labs/combine-polaris/styles.css'

import FormDate from 'FormDate'

const onChange = (name, value) => {
  console.log(name, value)
}

const today = moment().toDate()

console.log(today)

storiesOf('components/FormDate', module)
  .add('Empty State', () => (
    <FormDate
      name="date"
      onChange={onChange}
    />
  ))
  .add('Labeled', () => (
    <FormDate
      name="date"
      label="Example Date Label"
      onChange={onChange}
    />
  ))
  .add('w/ Placeholder', () => (
    <FormDate
      name="date"
      label="Example Date Label"
      onChange={onChange}
      placeholder="Select Date"
    />
  ))
  .add('Errored', () => (
    <FormDate
      name="date"
      label="Example Date Label"
      error="There was an error"
      onChange={onChange}
    />
  ))
  .add('Pre-filled', () => (
    <FormDate
      name="date"
      label="Example Date Label"
      onChange={onChange}
      value={today}
    />
  ))
