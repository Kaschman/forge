/**
 * @class ExampleComponent
 */

import React from 'react'

import styles from './styles.css'

type Props = {
  text: string
}

const ExampleComponent = (props: Props) => {
  const { text } = props
  return (
    <div className={styles.test}>
      Example Component:
      {' '}
      {text}
    </div>
  )
}

export default ExampleComponent
