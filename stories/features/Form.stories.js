import React from 'react'
import { Field, Formik } from 'formik'

import { storiesOf } from '@storybook/react'

import { FormTextField } from 'components'

import {
  FormLayout,
} from '@combine-labs/combine-polaris'

const onSubmit = (values) => {
  console.log(values)
}

const validate = () => ({})

storiesOf('features/Form', module)
  .add('Empty Form', () => (
    <Formik
      onSubmit={onSubmit}
      validate={validate}
    >
      {() => (
        <FormLayout>
          <FormLayout.Group condensed>
            <Field
              name="name"
              label="Property Name"
              placeholder="Add a property name"
              component={FormTextField}
            />
          </FormLayout.Group>
        </FormLayout>
      )}
    </Formik>
  ))
