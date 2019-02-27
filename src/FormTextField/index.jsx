import React from 'react'
import classNames from 'classnames'

import InputWrapper from 'InputWrapper'
import styles from './TextField.module.scss'

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
  prefix?: string | React.ReactNode,
  suffix?: string | React.ReactNode,
  minimal?: boolean,
}

type State = {}

class TextInput extends React.Component<Props, State> {
  static count = 0

  static defaultProps = {
    label: undefined,
    helpText: undefined,
    prefix: undefined,
    suffix: undefined,
    minimal: false,
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
      prefix,
      suffix,
      minimal,
    } = this.props

    const { name, disabled } = field

    const error = errors[name]

    const { count } = TextInput

    const id = `TextField${count}`

    const prefixMarkup = prefix ? (
      <div className={styles.Prefix} id={`${id}Prefix`}>
        {prefix}
      </div>
    ) : null

    const suffixMarkup = suffix ? (
      <div className={styles.Suffix} id={`${id}Suffix`}>
        {suffix}
      </div>
    ) : null

    const textFieldClassNames = classNames(
      styles.TextField,
      minimal && styles.minimal,
      disabled && styles.disabled,
      error && styles.error,
    )

    const inputClassNames = classNames(
      styles.Input,
      suffix && styles['Input-suffixed'],
    )

    return (
      <InputWrapper
        label={label}
        fieldID={id}
        error={error}
        helpText={helpText}
      >
        <div className={textFieldClassNames}>
          {prefixMarkup}
          <input
            id={id}
            type="text"
            className={inputClassNames}
            {...field}
          />
          {suffixMarkup}
          <div className={styles.Backdrop} />
        </div>
      </InputWrapper>
    )
  }
}

export default TextInput
