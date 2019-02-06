import React from 'react'

import { storiesOf } from '@storybook/react'

import CheckboxFilter from 'CheckboxFilter'

const options = [
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

const onChange = console.log

storiesOf('components/CheckboxFilter', module)
  .add('Basic Checkbox Filter', () => (
    <CheckboxFilter
      options={options}
      onChange={onChange}
    />
  ))
  .add('Labeled Checkbox Filter', () => (
    <CheckboxFilter
      options={options}
      onChange={onChange}
      label="Labeled Checkbox Filter"
    />
  ))
