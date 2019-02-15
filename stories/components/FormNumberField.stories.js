import React from 'react'

import { storiesOf } from '@storybook/react'

import FormNumberField from 'FormNumberField'

const field = {
  name: 'number_field',
}

const form = {
  errors: {},
}

const erroredForm = {
  errors: {
    number_field: 'This is an error!',
  },
}

storiesOf('components/FormNumberField', module)
  .add('Basic Number Field', () => (
    <FormNumberField
      field={field}
      form={form}
    />
  ))
  .add('w/ Placeholder', () => (
    <FormNumberField
      field={{
        ...field,
      }}
      form={form}
      placeholder="Enter a number"
    />
  ))
  .add('Labeled', () => (
    <FormNumberField
      field={field}
      form={form}
      label="Number Field Label"
    />
  ))
  .add('Errored', () => (
    <FormNumberField
      field={field}
      form={erroredForm}
      label="Text Field Label"
    />
  ))
