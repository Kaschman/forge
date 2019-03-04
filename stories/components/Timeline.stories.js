import React from 'react'

import { storiesOf } from '@storybook/react'

import { AppProvider } from '@combine-labs/combine-polaris'

import Timeline from 'Timeline'

storiesOf('components/Timeline', module)
  .add('Basic Text Filter', () => (
    <AppProvider>
      <Timeline
        start={{
          name: "lease start"
        }}
        end={{
          name: "lease end"
        }}
      />
    </AppProvider>
  ))
