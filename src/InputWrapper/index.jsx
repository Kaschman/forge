import * as React from 'react'

import * as styles from './InputWrapper.module.scss'

import Label from 'Label'
import InlineValidation from 'InlineValidation'

type Props = {
  /** A unique identifier for the label */
  id: string;
  /** Text for the label */
  label?: string;
  /** Is an optional field */
  optional?: boolean;
  /** Error message */
  error?: string;
  /** Help text */
  helpText?: string;
  /** The content to display inside the wrapper */
  children: React.ReactNode;
}

function InputWrapper(props: Props) {
  const {
    id,
    label,
    optional,
    error,
    helpText,
    children,
  } = props

  const labelMarkup = label ? (
    <div className={styles.Label}>
      <Label label={label} fieldID={id} optional={optional} />
    </div>
  ) : null

  const validationMarkup = error ? (
    <div className={styles.Validation}>
      <InlineValidation fieldID={id} message={error} />
    </div>
  ) : null

  const helpTextMarkup = helpText ? (
    <div className={styles.HelpText}>
      {helpText}
    </div>
  ) : null

  return (
    <div className={styles.InputWrapper}>
      {labelMarkup}
      {children}
      {validationMarkup}
      {helpTextMarkup}
    </div>
  )
}

InputWrapper.defaultProps = {
  label: undefined,
  optional: false,
  error: undefined,
  helpText: undefined,
}

export default InputWrapper
