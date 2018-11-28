import * as React from 'react'
import moment from 'moment'

import {
  DatePicker,
  TextField,
  Popover,
} from '@combine-labs/combine-polaris'

type Props = {
  label?: string,
  value: Date | string | number,
  name: string,
  onChange: (attribute: string, value: mixed) => void,
}

type State = {
  showPopover: boolean,
  month: number,
  year: number,
  selected: {
    start: Date,
    end: Date,
  },
  dateParsed: string,
}

class FormDate extends React.Component<Props, State> {
  static defaultProps = {
    label: '',
  }

  state = {
    showPopover: false,
    month: moment().month(),
    year: moment().year(),
    selected: {
      start: new Date(),
      end: new Date(),
    },
    dateParsed: '',
  }

  opening = false

  componentDidMount() {
    const momentDate = moment(this.props.value)

    if (this.props.value && momentDate.isValid()) {
      this.handleChange({
        start: moment(this.props.value).toDate(),
        end: moment(this.props.value).toDate(),
      })

      this.handleMonthChange(
        new Date(this.props.value).getMonth(),
        new Date(this.props.value).getFullYear(),
      )
    } else {
      this.handleMonthChange(new Date().getMonth(), new Date().getFullYear())
    }
  }

  handleChange = (value: Object) => {
    const { name, onChange } = this.props

    this.setState({ dateParsed: value.end.toISOString().substr(0, 10) })
    this.setState({ selected: value })
    onChange(name, moment(value.end).toDate())
  }

  handleMonthChange = (month: number, year: number) => {
    this.setState({
      month,
      year,
    })
  }

  closePopover = () => {
    if (!this.opening) {
      this.setState({ showPopover: false })
    }
  }

  openPopover = () => {
    this.opening = true
    this.setState({ showPopover: true })

    setTimeout(() => {
      this.opening = false
      return null
    }, 1000)
  }

  render() {
    const {
      label = 'Date',
    } = this.props

    const {
      dateParsed,
      showPopover,
    } = this.state

    return (
      <Popover
        active={showPopover}
        activator={(
          <div
            onClick={this.openPopover}
            onKeyPress={this.openPopover}
            role="button"
            tabIndex="0"
          >
            <TextField
              label={label}
              value={dateParsed}
            />
          </div>
          )}
        onClose={this.closePopover}
        sectioned
      >
        <DatePicker
          month={this.state.month}
          year={this.state.year}
          onChange={this.handleChange}
          onMonthChange={this.handleMonthChange}
          selected={this.state.selected}
        />
      </Popover>
    )
  }
}

export default FormDate
