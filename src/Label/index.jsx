import * as React from 'react'

import * as styles from './Label.module.scss'

type Props = {
  /** A unique identifier for the label */
  fieldID: string;
  /** Text for the label */
  label: string;
  /** Is an optional field */
  optional?: boolean;
}

function Label(props: Props) {
  const {
    fieldID,
    label,
    optional,
  } = props

  const optionalMarkup = optional ? <span className={styles.Optional}>&nbsp;(Optional)</span> : null

  return (
    <label htmlFor={fieldID} className={styles.Label}>
      {label}
      {optionalMarkup}
    </label>
  )
}

Label.defaultProps = {
  optional: false,
}

export default Label
