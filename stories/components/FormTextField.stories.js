import React from 'react'

import { storiesOf } from '@storybook/react'

import FormTextField from 'FormTextField'

const field = {
  name: 'text_field',
}

const form = {
  errors: {},
}

const erroredForm = {
  errors: {
    text_field: 'This is an error!',
  },
}

storiesOf('components/FormTextField', module)
  .add('Empty State', () => (
    <FormTextField
      field={field}
      form={form}
    />
  ))
  .add('w/ Placeholder', () => (
    <FormTextField
      field={{
        ...field,
        placeholder: 'Example text placeholder',
      }}
      form={form}
    />
  ))
  .add('Labeled', () => (
    <FormTextField
      field={field}
      form={form}
      label="Text Field Label"
    />
  ))
  .add('Errored', () => (
    <FormTextField
      field={field}
      form={erroredForm}
      label="Text Field Label"
    />
  ))
  .add('Help Text', () => (
    <FormTextField
      field={field}
      form={form}
      label="Text Field Label"
      helpText="Some additional information to help you answer this."
    />
  ))
