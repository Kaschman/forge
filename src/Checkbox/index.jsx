import React from 'react'

import styles from './Checkbox.module.scss'

type Props = {
  /** Label for the checkbox */
  label?: string,
  /** HTML name attribute for the input */
  name: string,
  /**
    Function called when the checkbox is changed.
    Returns { value: string, selected: boolean }
  */
  onChange: (option) => void,
  /** Boolean determining if the checkbox is pre-checked */
  checked: boolean | undefined, // eslint-disable-line react/no-unused-prop-types
}

type State = {
  checked: boolean,
}

class Checkbox extends React.Component<Props, State> {
  static count = 0

  static defaultProps = {
    label: undefined,
  }

  constructor() {
    super()
    Checkbox.count += 1
  }

  state = {
    checked: false,
  }

  componentDidMount() {
    const { checked } = this.props

    if (checked !== undefined) {
      this.setState({ checked })
    }
  }

  componentDidUpdate(prevProps) {
    const { checked } = this.props

    if (checked !== prevProps.checked) {
      this.setState({ checked }) // eslint-disable-line react/no-did-update-set-state
    }
  }

  onChange = () => {
    const {
      name,
      onChange,
    } = this.props

    let { checked } = this.state

    checked = !checked

    this.setState({ checked })

    onChange({
      value: name,
      selected: checked,
    })
  }

  render() {
    const {
      label,
      name,
    } = this.props

    const { checked } = this.state

    const { count } = Checkbox

    const id = `Checkbox${count}`

    return (
      <div>
        <input type="checkbox" name={name} checked={checked} onChange={this.onChange} />
        { label ? (
          <label htmlFor={id} className={styles.Label}>{label}</label>
        ) : null}
      </div>
    )
  }
}

export default Checkbox
