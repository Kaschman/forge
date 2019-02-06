/* global document */

import * as React from 'react'
import DatePicker from 'react-datepicker'
import ReactDOM from 'react-dom'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

import { Label } from '@combine-labs/combine-polaris'

import styles from './FormDate.module.css'

type Props = {
  label?: string,
  /** Date value for the datepicker */
  value: Date | string | number, // eslint-disable-line react/no-unused-prop-types
  name: string,
  onChange: (attribute: string, value: mixed) => void,
  disabled?: boolean,
}

type State = {
  startDate: Date,
}

const CalendarContainer = ({ children }) => (children ? (
  ReactDOM.createPortal(React.cloneElement(children, {
    className: 'react-datepicker-popper',
  }), document.body)
) : null)

class FormDate extends React.Component<Props, State> {
  static defaultProps = {
    disabled: false,
    label: undefined,
  }

  state = {
    startDate: undefined,
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    const { value } = props

    const momentDate = moment(value)

    const updatedState = state

    if (value && momentDate.isValid()) {
      updatedState.startDate = momentDate.toDate()
    }

    return updatedState
  }

  handleChange = (value: Date) => {
    const { name, onChange } = this.props

    this.setState({
      startDate: value,
    })

    onChange(name, value)
  }

  render() {
    const {
      disabled,
      label,
    } = this.props

    const { startDate } = this.state

    return (
      <div>
        { label
          ? <Label>{label}</Label> : null
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
        />
      </div>
    )
  }
}

export default FormDate
