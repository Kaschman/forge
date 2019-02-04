import React from 'react'

import { storiesOf } from '@storybook/react'

import { SelectFilter } from 'components'

const smallOptions = [
  {
    label: 'Option A',
    value: 'option_a',
  },
  {
    label: 'Option B',
    value: 'option_b',
  },
  {
    label: 'Option C',
    value: 'option_c',
  },
]

const largeOptions = smallOptions.concat([
  {
    label: 'Option D',
    value: 'option_d',
  },
  {
    label: 'Option E',
    value: 'option_e',
  },
])

const onChange = (options) => {
  console.log(options)
}

storiesOf('components/SelectFilter', module)
  .add('Small Select Filter', () => (
    <SelectFilter
      onChange={onChange}
      options={smallOptions}
    />
  ))
  .add('Labeled Small Select Filter', () => (
    <SelectFilter
      label="Labeled Small Select"
      onChange={onChange}
      options={smallOptions}
    />
  ))
  .add('Large Select Filter', () => (
    <SelectFilter
      onChange={onChange}
      options={largeOptions}
    />
  ))
  .add('Labeled Large Select Filter', () => (
    <SelectFilter
      label="Large Select Filter"
      onChange={onChange}
      options={largeOptions}
    />
  ))
