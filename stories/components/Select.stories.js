import React from 'react'

import { storiesOf } from '@storybook/react'

import {
  AppProvider,
} from '@combine-labs/combine-polaris'

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
    <AppProvider>
      <Select
        options={options}
        onChange={onChange}
      />
    </AppProvider>
  ))
  .add('Labeled', () => (
    <AppProvider>
      <Select
        options={options}
        label="Example Select Label"
        onChange={onChange}
        helpText="Help me!"
      />
    </AppProvider>
  ))
  .add('Placeholder', () => (
    <AppProvider>
      <Select
        options={options}
        label="Example Select Label"
        placeholder="This is a placeholder"
        onChange={onChange}
      />
    </AppProvider>
  ))
  .add('Errored', () => (
    <AppProvider>
      <Select
        options={options}
        error="There was an error with your selection"
        label="Example Select Label"
        onChange={onChange}
      />
    </AppProvider>
  ))
  .add('Multi', () => (
    <AppProvider>
      <Select
        options={options}
        label="Example Select Label"
        onChange={onChange}
        isMulti
        isClearable={false}
      />
    </AppProvider>
  ))
