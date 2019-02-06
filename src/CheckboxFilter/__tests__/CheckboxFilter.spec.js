import React from 'react'
import { shallow } from 'enzyme'
import 'test/setupTests'

import { CheckboxFilter } from 'components'

const options = [
  {
    label: 'Option A',
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
  {
    label: 'Option E',
    value: 'option_e',
  },
]

const onChange = () => {}

const shallowWrapper = props => (
  shallow(
    <CheckboxFilter
      name="test"
      onChange={onChange}
      {...props}
    />,
  )
)

describe('CheckboxFilter', () => {
  it('renders a list of Checkboxes correctly', () => {
    const wrapper = shallowWrapper({
      options,
    })

    const checkboxes = wrapper.find('Checkbox')

    expect(checkboxes.length).toBe(options.length)
  })
})
