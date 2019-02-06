import React from 'react'

import { storiesOf } from '@storybook/react'

import TextFilter from 'TextFilter'

const options = [
  'Brookhouse Ltd',
  'Intu',
  'LSREF3 Tiger Falkirk (Jersey) Limited',
  'Akropolis Group UAB',
]

const onChange = console.log

storiesOf('components/TextFilter', module)
  .add('Basic Text Filter', () => (
    <TextFilter
      onChange={onChange}
      options={options}
    />
  ))
  .add('Labeled Text Filter', () => (
    <TextFilter
      label="Labeled Text Filter"
      onChange={onChange}
      options={options}
    />
  ))
  .add('Custom Placeholder', () => (
    <TextFilter
      label="Labeled Text Filter"
      onChange={onChange}
      options={options}
      placeholder="Hey you! Type something here please..."
    />
  ))
  .add('Freeform Text Filter ( no options passed )', () => (
    <TextFilter
      label="Freeform Text Filter"
      onChange={onChange}
    />
  ))
