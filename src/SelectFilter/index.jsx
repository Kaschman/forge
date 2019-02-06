import React from 'react'

import type { Option } from 'types'

import CheckboxFilter from 'CheckboxFilter'
import Select from 'Select'

type Props = {
  /** Label for the select filter */
  label?: string,
  /** Function that returns the selected option on a change event */
  onChange: (Object) => void,
  /** Options for the select filter */
  options: Option[],
}

function SelectFilter(props: Props) {
  const {
    label,
    onChange,
    options,
  } = props

  const optionCount = options.length

  if (optionCount < 5) {
    return (
      <CheckboxFilter
        label={label}
        options={options}
        onChange={onChange}
      />
    )
  }

  return (
    <Select
      label={label}
      onChange={onChange}
      options={options}
      isMulti
    />
  )
}

SelectFilter.defaultProps = {
  label: undefined,
}

export default SelectFilter
