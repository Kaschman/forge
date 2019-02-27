import React from 'react'

import InputWrapper from 'InputWrapper'
import styles from './TextField.module.css'


type Props = {
  /** Field object. Designed to be used with Formik Field component.
  {
      name: 'field_name'
  }
  */
  field: Object,
  form: Object,
  label?: string,
  helpText?: string,
}

type State = {}

class TextInput extends React.Component<Props, State> {
  static count = 0

  static defaultProps = {
    label: undefined,
    helpText: undefined,
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
      helpText,
    } = this.props

    const { name } = field

    const error = errors[name]

    const { count } = TextInput

    const id = `TextField${count}`

    return (
      <InputWrapper
        label={label}
        fieldID={id}
        error={error}
        helpText={helpText}
      >
        <input
          id={id}
          type="text"
          className={styles.TextField}
          {...field}
        />
      </InputWrapper>
    )
  }
}

export default TextInput
