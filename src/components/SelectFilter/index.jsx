import React from 'react'

import type { Option } from 'types'

import {
  CheckboxFilter,
  Select,
} from 'components'

type Props = {
  label?: string,
  onChange: (Object) => void,
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
