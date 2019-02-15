import React from 'react'

import styles from './NumberField.module.scss'

type Props = {
  /** Field object. Designed to be used with Formik Field component.
  {
      name: 'field_name'
  }
  */
  field: Object,
  form: Object,
  label?: string,
}

type State = {}

class NumberInput extends React.Component<Props, State> {
  static count = 0

  static defaultProps = {
    label: undefined,
  }

  constructor() {
    super()
    NumberInput.count += 1
  }

  render() {
    const {
      field,
      form: {
        errors,
        touched,
      },
      label,
      placeholder,
    } = this.props

    const { name } = field

    const error = errors[name]
    const isTouched = touched[name]

    const { count } = NumberInput

    const id = `NumberField${count}`

    return (
      <div className={styles.NumberFieldWrapper}>
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
          type="number"
          className={styles.NumberField}
          placeholder={placeholder}
          {...field}
        />
        { (error && isTouched) ? (
          <p className={styles.Error}>{error}</p>
        ) : null }

      </div>
    )
  }
}

export default NumberInput
