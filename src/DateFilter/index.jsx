import React from 'react'
import moment from 'moment'

import Checkbox from 'Checkbox' // eslint-disable-line import/no-unresolved
import FormDate from 'FormDate' // eslint-disable-line import/no-unresolved

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
  state = {
    start: undefined,
    end: undefined,
    selection: null,
  }

  static defaultProps = {
    label: undefined,
    start: undefined,
    end: undefined,
  }

  componentWillMount() {
    const {
      start = null,
      end = null,
    } = this.props

    this.setState({
      start,
      end,
    })
  }

  handleRangeSelection = (option, months) => {
    let start
    let end

    if (option.selected) {
      start = moment().toDate()
      end = moment().add(months, 'months').toDate()

      this.setState({
        selection: option.value,
        start,
        end,
      })
    } else {
      this.setState({
        selection: null,
        start: null,
        end: null,
      })
    }
  }

  onChange = (name, value) => {
    const { onChange } = this.props

    const update = this.state
    update[name] = value

    this.setState(update)

    onChange(update)
  }

  render() {
    const { label } = this.props

    const { selection, start, end } = this.state

    return (
      <div className={styles.DateFilterWrapper}>
        <div>
          {label ? (
            <div className={styles.DateFilterLabel}>{label}</div>
          ) : null }
          <div className={styles.DateFilter}>
            <div className={styles.DateFilterCheckboxes}>
              <Checkbox
                name="3_months"
                label="In the next 3 months"
                checked={selection === '3_months'}
                onChange={option => this.handleRangeSelection(option, 3)}
              />
              <Checkbox
                name="6_months"
                label="In the next 6 months"
                checked={selection === '6_months'}
                onChange={option => this.handleRangeSelection(option, 6)}
              />
              <Checkbox
                name="12_months"
                label="In the next 12 months"
                checked={selection === '12_months'}
                onChange={option => this.handleRangeSelection(option, 12)}
              />
            </div>
            <div className={styles.DateFilterPickers}>
              <FormDate
                name="start"
                value={start}
                onChange={this.onChange}
                placeholder="From"
                disabled={selection !== null}
              />
              <span className={styles.DateFilterDash}>-</span>
              <FormDate
                name="end"
                value={end}
                onChange={this.onChange}
                placeholder="To"
                disabled={selection !== null}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DateFilter
