import React from 'react'

import { storiesOf } from '@storybook/react'

import DateFilter from 'DateFilter'

const onChange = (values) => {
  console.log(values)
}

const start = new Date()
const end = new Date()
end.setDate(end.getDate() + 1)

storiesOf('components/DateFilter', module)
  .add('Basic Date Filter', () => (
    <DateFilter
      onChange={onChange}
    />
  ))
  .add('Labeled', () => (
    <DateFilter
      onChange={onChange}
      label="Filter Label"
    />
  ))
  .add('Pre-filled', () => (
    <DateFilter
      onChange={onChange}
      label="Pre-filled filter"
      start={start}
      end={end}
    />
  ))
