import React from 'react'
import { shallow } from 'enzyme'
import 'test/setupTests'

import { Checkbox } from 'components'

const onChange = (option) => {
  console.log(option)
}

const shallowWrapper = (props) => (
  shallow(
    <Checkbox
      name="test"
      onChange={onChange}
      {...props}
    />,
  )
)

describe('Checkbox', () => {
  it('renders an input checkbox', () => {
    const wrapper = shallowWrapper()

    const input = wrapper.find('input[type="checkbox"]')

    expect(input.length).toBe(1)
  })

  it('renders a label for the checkbox', () => {
    const labelValue = 'Labelled'
    const wrapper = shallowWrapper({ label: labelValue })

    const label = wrapper.find('label')

    expect(label.length).toBe(1)
    expect(label.text()).toBe(labelValue)
  })
})
