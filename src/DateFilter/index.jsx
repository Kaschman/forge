import React from 'react'
import { Field, Formik } from 'formik'

import FormDate from 'FormDate'

import styles from './DateFilter.module.scss'

type Props = {
  /** Label for the filter */
  label?: string,
  /** Number value to pre-fill start field */
  start?: Date,
  /** Number value to pre-fill end field */
  end?: Date,
  /** onChange function to handle a successful filter return */
  onChange: ({ start: Date, end: Date }) => void,
}

type State = {}

class DateFilter extends React.Component <Props, State> {
  state = {}

  static defaultProps = {
    label: undefined,
    start: undefined,
    end: undefined,
  }

  onChange = ({ start, end }) => {
    const { onChange } = this.props

    onChange({ start, end })
  }

  render() {
    const {
      start: startValue,
      end: endValue,
      label,
    } = this.props

    const initialValues = {
      start: startValue,
      end: endValue,
    }

    return (
      <div className={styles.DateFilterWrapper}>
        <Formik
          initialValues={initialValues}
          validateOnBlur
          validateOnChange={false}
          validate={(values) => {
            const errors = {}

            const { start, end } = values

            if (start !== undefined && end !== undefined) {
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
          {() => (
            <div>
              {label ? (
                <div className={styles.DateFilterLabel}>{label}</div>
              ) : null }
              <div className={styles.DateFilter}>
                <Field
                  component={FormDate}
                  name="start"
                  placeholder="From"
                />
                <span className={styles.DateFilterDash}>-</span>
                <Field
                  component={FormDate}
                  name="end"
                  placeholder="To"
                />
              </div>
            </div>
          )}
        </Formik>
      </div>
    )
  }
}

export default DateFilter
