import React from 'react'

import { storiesOf } from '@storybook/react'

import { Checkbox } from 'components'

const onChange = (option) => {
  console.log(option)
}

storiesOf('components/Checkbox', module)
  .add('Basic Checkbox', () => (
    <Checkbox
      name="basic_checkbox"
      onChange={onChange}
    />
  ))
  .add('Labeled Checkbox', () => (
    <Checkbox
      name="labeled_checkbox"
      onChange={onChange}
      label="Labeled Checkbox"
    />
  ))
  .add('Preselected Checkbox', () => (
    <Checkbox
      name="preselected_checkbox"
      onChange={onChange}
      label="Preselected Checkbox"
      checked
    />
  ))
