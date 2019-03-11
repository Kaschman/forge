import React from 'react'
import { Field, Formik } from 'formik'

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

const initialValues = {
  number_field: 1013426,
}

storiesOf('components/FormTextField', module)
  .add('Empty State', () => (
    <FormTextField
      field={field}
      form={form}
    />
  ))
  .add('Number Field', () => (
    <Formik
      initialValues={initialValues}
    >
      <Field
        name="number_field"
        type="number"
        component={FormTextField}
      />
    </Formik>
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
  .add('Disabled', () => (
    <FormTextField
      field={{
        ...field,
        disabled: true,
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
  .add('Prefix & Suffix', () => (
    <FormTextField
      field={field}
      form={form}
      prefix="$"
      suffix=".00"
    />
  ))
  .add('Minimal', () => (
    <FormTextField
      field={field}
      form={form}
      minimal
    />
  ))
