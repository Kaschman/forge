import * as React from 'react'

import * as styles from './InlineValidation.module.scss'

type Props = {
  /** Content briefly explaining how to resolve the invalid form field input. */
  message: Error;
  /** Unique identifier of the invalid form field that the message describes */
  fieldID: string;
  /** Content briefly explaining how to resolve the invalid form field input. */
}

function InlineValidation(props: Props) {
  const {
    message,
    fieldID,
  } = props

  return (
    <label htmlFor={fieldID} className={styles.InlineValidation}>
      {message}
    </label>
  )
}

export default InlineValidation
