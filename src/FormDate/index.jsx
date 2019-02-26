/* global document */

import * as React from 'react'
import DatePicker from 'react-datepicker'
import ReactDOM from 'react-dom'
import moment from 'moment'

import styles from './FormDate.module.scss'

import 'react-datepicker/dist/react-datepicker-cssmodules.css'

type Props = {
  /** label for the datepicker */
  label?: string,
  /** Date value for the datepicker */
  value: Date | string | number, // eslint-disable-line react/no-unused-prop-types
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
    label: undefined,
    isClearable: false,
  }

  constructor() {
    super()
    FormDate.count += 1
  }

  state = {
    startDate: undefined,
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    const { value } = props

    const momentDate = moment(value)

    const updatedState = state

    if (
      !state.startDate
      && value
      && momentDate.isValid()
    ) {
      updatedState.startDate = momentDate.toDate()
    }

    return updatedState
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
      isClearable,
      label,
    } = this.props

    const { startDate } = this.state

    return (
      <div>
        { label
          ? (
            <label
              id={`${id}Label`}
              htmlFor={id}
            >
              {label}
            </label>
          ) : null
        }
        <DatePicker
          className={styles.FormDate}
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
        />
      </div>
    )
  }
}

export default FormDate
