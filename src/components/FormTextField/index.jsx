import React from 'react'

import styles from './TextField.module.css'

type Props = {
  field: Object,
  form: Object,
  label?: string,
}

type State = {}

class TextInput extends React.Component<Props, State> {
  static count = 0

  static defaultProps = {
    label: undefined,
  }

  constructor() {
    super()
    TextInput.count += 1
  }

  render() {
    const {
      field,
      form: {
        errors,
      },
      label,
    } = this.props

    const { name } = field

    const error = errors[name]

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
          {...field}
        />
        { error ? (
          <p className={styles.Error}>{error}</p>
        ) : null }

      </div>
    )
  }
}

export default TextInput
