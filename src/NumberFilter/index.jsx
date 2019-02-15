/* eslint-disable */
import React from 'react'
import { Field, Formik } from 'formik'

import FormNumberField from 'FormNumberField'

import styles from './NumberFilter.module.scss'

type Props = {
  /** Number value to pre-fill start field */
  start?: number,
  /** Number value to pre-fill end field */
  end?: number,
  /** onChange function to handle a successful filter return */
  onChange: ({ start: number, end: number }) => void,
  integer?: boolean,
}

type State = {}

class NumberFilter extends React.Component <Props, State> {
  state = {
    startTouched: false,
    endTouched: false
  }

  static defaultProps = {
    start: undefined,
    end: undefined,
  }

  handleBlur = (fieldName) => {
    console.log(fieldName)
    const update = {}
    update[fieldName] = true
    console.log(update)

    this.setState(update)
  }

  handleChange = (val, func) => {
    console.log(val, func)
  }

  onChange = ({ start, end }) => {
    const { onChange } = this.props

    onChange({ start, end })
  }

  render() {
    const {
      start,
      end,
      integer,
      label,
    } = this.props

    const initialValues = {
      start,
      end,
    }

    return (
      <div className={styles.NumberFilterWrapper}>
        <Formik
          initialValues={initialValues}
          validateOnBlur
          validateOnChange={false}
          validate={values => {
            let errors = {}

            const { start, end } = values

            if ( start !== undefined && end !== undefined ) {
              if (start >= end) {
                errors.start = 'From value must be less than the To value'
              }

              if (Object.keys(errors).length === 0) {
                this.onChange({ start, end })
              }
            }

            return errors
          }}
        >
          {({ values, touched, handleChange }) => (
            <div>
              {label ? (
                <div className={styles.NumberFilterLabel}>{label}</div>
              ): null }
              <div className={styles.NumberFilter}>
                <Field
                  component={FormNumberField}
                  name="start"
                  placeholder="From"
                  integer={integer}
                />
                <span className={styles.NumberFilterDash}>-</span>
                <Field
                  component={FormNumberField}
                  name="end"
                  placeholder="To"
                  integer={integer}
                />
              </div>
            </div>
          )}
        </Formik>
      </div>
    )
  }
}

export default NumberFilter
