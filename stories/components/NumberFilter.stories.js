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
  .add('Integer only [Broken]', () => (
    <NumberFilter
      onChange={onChange}
      label="Integers Only!"
      integer
    />
  ))
