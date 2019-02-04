import React from 'react'

import CreatableSelect from 'react-select/lib/Creatable'

type Props = {
  label?: string,
  onChange: (string) => void,
  options?: string[],
  placeholder?: string,
}

type State = {}

const components = {
  DropdownIndicator: null,
}

export const createOption = (label: string) => ({
  label,
  value: label,
})

const deconstructOptions = (options: Object[]) => options.map(option => option.label)

class TextFilter extends React.Component<Props, State> {
  static count = 0

  state = {
    inputValue: '',
    value: [],
  }

  constructor() {
    super()
    TextFilter.count += 1
  }

  handleChange = (value: any) => {
    const { onChange } = this.props

    this.setState({ value })
    onChange(deconstructOptions(value))
  }

  handleInputChange = (inputValue: string) => {
    this.setState({ inputValue })
  }

  handleKeyDown = (event: SyntheticKeyboardEvent<HTMLElement>) => {
    const { inputValue, value } = this.state
    const { onChange } = this.props
    if (!inputValue) return

    let newValue

    switch (event.key) {
      case 'Enter':
      case 'Tab':
        newValue = [...value, createOption(inputValue)]

        this.setState({
          inputValue: '',
          value: newValue,
        })

        onChange(deconstructOptions(newValue))
        event.preventDefault()
        break
      default:
    }
  }

  render() {
    const { inputValue, value } = this.state
    const {
      label,
      options,
      placeholder,
    } = this.props

    const { count } = TextFilter

    const id = `TextFilter${count}`

    const props = {}

    if (!options || options.length === 0) {
      props.menuIsOpen = false
    } else {
      props.options = options.map(option => createOption(option))
    }

    return (
      <div>
        { label ? (
          <label htmlFor={id}>{label}</label>
        ) : null }
        <CreatableSelect
          id={id}
          components={components}
          inputValue={inputValue}
          isClearable
          isMulti
          onChange={this.handleChange}
          onInputChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
          placeholder={placeholder}
          value={value}
          {...props}
        />
      </div>
    )
  }
}

TextFilter.defaultProps = {
  label: undefined,
  options: undefined,
  placeholder: 'Type filter here...',
}

export default TextFilter
