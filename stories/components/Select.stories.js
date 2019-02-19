import React from 'react'

import { storiesOf } from '@storybook/react'

import Select from 'Select'

const options = [
  {
    label: 'Select',
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
  {
    label: 'Option D',
    value: 'option_d',
  },
]

const onChange = (option) => {
  console.log(option)
}

storiesOf('components/Select', module)
  .add('Empty State', () => (
    <Select
      options={options}
      onChange={onChange}
    />
  ))
  .add('Labeled', () => (
    <Select
      options={options}
      label="Example Select Label"
      onChange={onChange}
    />
  ))
  .add('Placeholder', () => (
    <Select
      options={options}
      label="Example Select Label"
      placeholder="This is a placeholder"
      onChange={onChange}
    />
  ))
  .add('Errored', () => (
    <Select
      options={options}
      error="There was an error with your selection"
      label="Example Select Label"
      onChange={onChange}
    />
  ))
  .add('Multi', () => (
    <Select
      options={options}
      label="Example Select Label"
      onChange={onChange}
      isMulti
      isClearable={false}
    />
  ))
