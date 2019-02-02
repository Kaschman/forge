import React from 'react'

import styles from './Checkbox.module.scss'

type Props = {
  label?: string,
  name: string,
  onChange: (option) => void,
  checked?: boolean, // eslint-disable-line react/no-unused-prop-types
}

type State = {
  checked: boolean,
}

class Checkbox extends React.Component<Props, State> {
  static count = 0

  static defaultProps = {
    checked: false,
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
