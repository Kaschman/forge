import React from 'react'

import { Checkbox } from 'components'

type Props = {
  /** label for the multi-checkbox component */
  label?: string,
  /** required onChange function that returns the selected options */
  onChange: (options) => void,
  /**
    Possible options that are rendered as a list of checkboxes.
      Checkboxes will render as checked if option.selected = true
  */
  options: Option[], // eslint-disable-line react/no-unused-prop-types
}

type State = {}

class CheckboxFilter extends React.Component<Props, State> {
  state = {
    options: [],
  }

  static defaultProps = {
    label: undefined,
  }

  componentDidMount() {
    const { options } = this.props

    this.setState({ options })
  }

  onChange = (option) => {
    const { onChange } = this.props
    let { options } = this.state

    options = options.map((existingOption) => {
      if (existingOption.value === option.value) {
        return {
          ...existingOption,
          selected: option.selected,
        }
      }

      return existingOption
    })

    this.setState({ options })

    const selectedOptions = options
      .filter(existingOption => existingOption.selected)
      .map(selectedOption => ({ label: selectedOption.label, value: selectedOption.value }))

    onChange(selectedOptions)
  }

  render() {
    const { label } = this.props

    const { options } = this.state

    return (
      <div>
        { label ? (
          <span>{label}</span>
        ) : null}
        { options.map((option: Option) => (
          <Checkbox
            label={option.label}
            name={option.value}
            checked={option.selected}
            onChange={this.onChange}
          />
        ))}
      </div>
    )
  }
}

export default CheckboxFilter
