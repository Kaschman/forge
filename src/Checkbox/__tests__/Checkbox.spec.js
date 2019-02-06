import React from 'react'
import sinon from 'sinon'
import { mount, shallow } from 'enzyme'
import 'test/setupTests'

import Checkbox from 'Checkbox'

const onChange = sinon.spy()

const mountWrapper = props => (
  mount(
    <Checkbox
      name="test"
      onChange={onChange}
      {...props}
    />,
  )
)

const shallowWrapper = props => (
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

  it('renders a checked input when pre-selected', () => {
    const labelValue = 'Labelled'

    const wrapper = mountWrapper({
      label: labelValue,
      checked: true,
    })

    const input = wrapper.find('input')

    expect(input.props().checked).toBe(true)
  })
})
