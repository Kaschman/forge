import React from 'react'

import styles from './TextField.module.css'

type Props = {
  error?: string,
  label?: string,
}

type State = {}

class TextInput extends React.Component<Props, State> {
  static count = 0

  static defaultProps = {
    error: undefined,
    label: undefined,
  }

  constructor() {
    super()
    TextInput.count += 1
  }

  render() {
    const {
      error,
      label,
    } = this.props

    const { count } = TextInput

    const id = `TextField${count}`

    return (
      <div className={styles.TextFieldWrapper}>
        { label ? (
          <label
            id={`${id}Label`}
            htmlFor={id}
          >
            {label}
          </label>
        ) : null
        }
        <input
          id={id}
          type="text"
          className={styles.TextField}
          {...this.props}
        />
        { error ? (
          <p className={styles.Error}>{error}</p>
        ) : null }

      </div>
    )
  }
}

export default TextInput
