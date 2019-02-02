import React from 'react'
import { shallow } from 'enzyme'
import 'test/setupTests'

import { CheckboxFilter, SelectFilter } from 'components'

const onChange = () => {}

const fewOptions = [
  {
    label: 'Option A',
    value: 'option_a',
  },
  {
    label: 'Option B',
    value: 'option_b',
  },
]

const manyOptions = [
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

const shallowWrapper = props => (
  shallow(
    <SelectFilter
      name="test"
      onChange={onChange}
      {...props}
    />,
  )
)

describe('SelectFilter', () => {
  it('renders a CheckboxFilter on < 5 options', () => {
    const wrapper = shallowWrapper({
      options: fewOptions,
    })

    const checkboxFilter = wrapper.find('CheckboxFilter')
    const select = wrapper.find('Select')

    expect(checkboxFilter.length).toBe(1)
    expect(select.length).toBe(0)
  })

  it('renders a select on 5 options', () => {
    const wrapper = shallowWrapper({
      options: manyOptions,
    })

    const select = wrapper.find('Select')
    expect(select.length).toBe(1)
  })
})
