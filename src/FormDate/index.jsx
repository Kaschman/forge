/* global document */
import * as React from 'react'
import classNames from 'classnames'
import DatePicker from 'react-datepicker'
import ReactDOM from 'react-dom'
import moment from 'moment'

import InputWrapper from 'InputWrapper'

import styles from './FormDate.module.scss'

import 'react-datepicker/dist/react-datepicker-cssmodules.css'

import './Datepicker.css' // This avoids minifying the CSS, and so applies it correctly.

type Props = {
  /** Error message for the component */
  error?: string,
  /** label for the datepicker */
  label?: string,
  /** input placeholder */
  placeholder?: string,
  /** Help text that goes below the input */
  helpText?: string,
  /** Date value for the datepicker */
  value: Date | string | number | undefined, // eslint-disable-line react/no-unused-prop-types
  /** html name for the input */
  name: string,
  /** function called when the date input changes */
  onChange: (attribute: string, value: mixed) => void,
  /** disabled flag */
  disabled?: boolean,
  /** boolean flag for whether the datepicker is clearable */
  isClearable?: boolean,
}

type State = {
  startDate: Date | undefined,
}

const CalendarContainer = ({ children }) => {
  const { body } = document
  if (body && children) {
    return ReactDOM.createPortal(React.cloneElement(children, {
      className: 'react-datepicker-popper',
    }), body)
  }
  return null
}

class FormDate extends React.Component<Props, State> {
  static count = 0

  static defaultProps = {
    disabled: false,
    error: undefined,
    label: undefined,
    isClearable: false,
    placeholder: undefined,
    helpText: undefined,
  }

  constructor() {
    super()
    FormDate.count += 1
  }

  state = {
    startDate: undefined,
  }

  componentWillMount() {
    const { value } = this.props

    if (value) {
      const momentDate = moment(value)

      if (momentDate.isValid()) {
        this.setState({
          startDate: momentDate.toDate(),
        })
      }
    }
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props

    if (value !== prevProps.value) {
      const momentDate = moment(value)

      if (momentDate.isValid()) {
        this.setState({ // eslint-disable-line react/no-did-update-set-state
          startDate: momentDate.toDate(),
        })
      }
    }
  }

  handleChange = (value: Date) => {
    const { name, onChange } = this.props

    this.setState({ startDate: value })

    onChange(name, value)
  }

  render() {
    const { count } = FormDate
    const id = `FormDate${count}`

    const {
      disabled,
      error,
      isClearable,
      label,
      placeholder,
      helpText,
    } = this.props

    const { startDate } = this.state

    const inputClassNames = classNames(
      styles.Input,
      disabled && styles.disabled,
      error && styles.error,
    )

    return (
      <InputWrapper
        label={label}
        fieldID={id}
        error={error}
        helpText={helpText}
      >
        <DatePicker
          className={inputClassNames}
          disabled={disabled}
          selected={startDate}
          onChange={this.handleChange}

          dateFormatCalendar=" "
          previousMonthButtonLabel="←"
          nextMonthButtonLabel="→"
          showYearDropdown
          showMonthDropdown
          useShortMonthInDropdown
          dropdownMode="select"
          popperContainer={CalendarContainer}
          isClearable={isClearable}
          placeholderText={placeholder}
        />
      </InputWrapper>
    )
  }
}

export default FormDate
