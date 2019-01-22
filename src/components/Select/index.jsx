import React from 'react'
import ReactSelect from 'react-select'

import styles from './Select.module.scss'

type Props = {
  /** Optional error string to be presented below the select component */
  error?: string,
  /** Optional label to be presented above the select component */
  label?: string,
  /** Boolean passed to react-select component determining if the select is typeable */
  isSearchable: boolean,
  /**
    Function to be called when an option is chosen.  Returns the full option object:
      {
        label: string,
        value: string,
      }
  */
  onChange: (option) => void,
}

type State = {}

class Select extends React.Component<Props, State> {
  static count = 0

  static defaultProps = {
    error: undefined,
    label: undefined,
  }

  constructor() {
    super()
    Select.count += 1
  }

  render() {
    const {
      error,
      label,
      isSearchable = false,
      onChange,
    } = this.props

    const { count } = Select

    const id = `Select${count}`

    return (
      <div>
        { label ? (
          <label
            id={`${id}Label`}
            htmlFor={id}
          >
            {label}
          </label>
        ) : null }
        <ReactSelect
          className={styles.Select}
          isSearchable={isSearchable}
          onChange={onChange}
          {...this.props}
        />
        {
          error ? (
            <p className={styles.Error}>{error}</p>
          ) : null
        }
      </div>
    )
  }
}

export default Select
