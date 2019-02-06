import React from 'react'
import { mount } from 'enzyme'
import 'test/setupTests'

import TextFilter, { createOption } from 'TextFilter'

const onChange = () => {}

const options = [
  'Brookhouse Ltd',
  'Intu',
  'LSREF3 Tiger Falkirk (Jersey) Limited',
  'Akropolis Group UAB',
]

const mountWrapper = props => (
  mount(
    <TextFilter
      onChange={onChange}
      {...props}
    />,
  )
)

describe('TextFilter', () => {
  it('renders a basic text filter component', () => {
    const wrapper = mountWrapper({
      options,
    })

    const optionObjects = options.map(option => createOption(option))

    const creatableSelect = wrapper.find('Creatable')

    expect(creatableSelect.length).toBe(1)
    expect(creatableSelect.props().id).toBe('TextFilter1')
    expect(creatableSelect.props().options).toEqual(optionObjects)
  })

  it('renders a label when passed as a prop', () => {
    const labelValue = 'Some Label'

    const wrapper = mountWrapper({
      label: labelValue,
    })

    const label = wrapper.find('label')

    expect(label.length).toBe(1)
    expect(label.text()).toBe(labelValue)
  })

  it('passes a placeholder to the Select', () => {
    const placeholder = 'Some Placeholder'

    const wrapper = mountWrapper({
      placeholder,
    })

    const select = wrapper.find('Select')

    expect(select.props().placeholder).toBe(placeholder)
  })

  it('renders a freeform creatable when no options are passed', () => {
    const wrapper = mountWrapper()

    const creatable = wrapper.find('Creatable')

    expect(creatable.props().options).toBeUndefined()
    expect(creatable.props().menuIsOpen).toBe(false)
  })
})
