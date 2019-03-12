import React from 'react'
import classNames from 'classnames'
import NumberFormat from 'react-number-format'

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
  helpText?: string,
  label?: string,
  minimal?: boolean,
  /** Whether this is a numerical field */
  number?: boolean,
  prefix?: string | React.ReactNode,
  suffix?: string | React.ReactNode,
}

type State = {}

class TextInput extends React.Component<Props, State> {
  static count = 0

  static defaultProps = {
    label: undefined,
    helpText: undefined,
    minimal: false,
    number: false,
    prefix: undefined,
    suffix: undefined,
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
        setFieldValue,
      },
      label,
      helpText,
      prefix,
      suffix,
      minimal,
      type,
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

    const onNumberValueChange = ({
      formattedValue, // eslint-disable-line no-unused-vars
      value,
      floatValue, // eslint-disable-line no-unused-vars
    }) => {
      setFieldValue(field.name, Number(value))
    }

    return (
      <InputWrapper
        label={label}
        fieldID={id}
        error={error}
        helpText={helpText}
      >
        <div className={textFieldClassNames}>
          {prefixMarkup}
          { type === 'number' ? (
            <NumberFormat
              isNumericString
              thousandSeparator
              value={field.value}
              className={inputClassNames}
              onValueChange={onNumberValueChange}
            />
          ) : (
            <input
              id={id}
              type="text"
              className={inputClassNames}
              {...field}
            />
          )}
          {suffixMarkup}
          <div className={styles.Backdrop} />
        </div>
      </InputWrapper>
    )
  }
}

export default TextInput
