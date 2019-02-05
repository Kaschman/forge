import React from 'react'

import { storiesOf } from '@storybook/react'

import { Toast } from 'components'

const onClose = () => {
  console.log("Close the Toast.")
}

const onAction = () => {
  console.log("Do the thing.")
}

storiesOf('components/Toast', module)
  .add('Basic Toast', () => (
    <Toast
      message="Lease Decision changed to “Let Expire”."
      onClose={onClose}
    />
  ))
  .add('Persistent Toast', () => (
    <Toast
      message="Lease Decision changed to “Let Expire”."
      onClose={onClose}
      persistent
    />
  ))
  .add('Actionable Toast', () => (
    <Toast
      message="Lease Decision changed to “Let Expire”."
      onClose={onClose}
      actionLabel="Undo"
      actionFunction={onAction}
    />
  ))
  .add('Persistent Actionable Toast', () => (
    <Toast
      message="Lease Decision changed to “Let Expire”."
      onClose={onClose}
      actionLabel="Undo"
      actionFunction={onAction}
      persistent
    />
  ))
  .add('Danger Toast', () => (
    <Toast
      message="Property could not be saved."
      onClose={onClose}
      actionLabel="Retry"
      actionFunction={onAction}
      persistent
      danger
    />
  ))
  .add('Long Message', () => (
    <Toast
      message="This particular toast has a very long message that should wrap onto two lines. Probably should put a longer timer so you have time to read."
      onClose={onClose}
      actionLabel="Undo"
      actionFunction={onAction}
      persistent
      disappearAfter={10000}
    />
  ))
