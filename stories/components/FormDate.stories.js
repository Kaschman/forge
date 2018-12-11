import React from 'react'

import { storiesOf } from '@storybook/react'
import '@combine-labs/combine-polaris/styles.css'

import { AppProvider } from '@combine-labs/combine-polaris'

import { FormDate } from 'Components'

storiesOf('FormDate', module)
  .add('Empty State', () => (
    <AppProvider>
      <FormDate
        name='Date'
        onChange={(val) => console.log(val)}
        value={new Date()}
      />
    </AppProvider>
  ))
