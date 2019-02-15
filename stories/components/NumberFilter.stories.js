import React from 'react'

import { storiesOf } from '@storybook/react'

import NumberFilter from 'NumberFilter'

const onChange = (values) => {
  console.log(values)
}

storiesOf('components/NumberFilter', module)
  .add('Basic Number Filter', () => (
    <NumberFilter
      onChange={onChange}
    />
  ))
  .add('Labeled', () => (
    <NumberFilter
      onChange={onChange}
      label="Sales Area"
    />
  ))
  .add('Pre-filled', () => (
    <NumberFilter
      onChange={onChange}
      label="Pre-filled filter"
      start={100}
      end={1000}
    />
  ))
