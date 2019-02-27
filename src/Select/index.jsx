import React from 'react'
import ReactSelect from 'react-select'

import InputWrapper from 'InputWrapper'
import styles from './Select.module.scss'

import customStyles from './customStyles'

type Props = {
  /** Optional error string to be presented below the select component */
  error?: string,
  /** Optional help text string to be presented below the input select component */
  helpText?: string,
  /** Optional label to be presented above the select component */
  label?: string,
  /** Boolean passed to react-select determining if the select is a multiselect */
  isMulti: boolean,
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
    helpText: undefined,
    label: undefined,
  }

  constructor() {
    super()
    Select.count += 1
  }

  render() {
    const {
      error,
      helpText,
      label,
      isMulti = false,
      isSearchable = false,
      onChange,
    } = this.props

    const { count } = Select

    const id = `Select${count}`

    return (
      <InputWrapper
        label={label}
        fieldID={id}
        error={error}
        helpText={helpText}
      >
        <ReactSelect
          styles={customStyles}
          className={styles.Select}
          isMulti={isMulti}
          isSearchable={isSearchable}
          onChange={onChange}
          {...this.props}
        />
      </InputWrapper>
    )
  }
}

export default Select
