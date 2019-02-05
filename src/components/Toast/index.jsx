import React from 'react'
import classNames from 'classnames'

import {
  Snackbar,
  SnackbarContent,
} from '@material-ui/core';

import {
  AppProvider,
  Icon,
  Button,
} from '@combine-labs/combine-polaris'

import styles from './Toast.module.scss'

type Props = {
  /** Message for the Toast */
  message: string,
  /**
    Function called when the toast is closed
    Returns { value: string, selected: boolean }
  */
  onClose: (option) => void,
  /** Toast will not disappear until the close button is pressed */
  persistent?: boolean,
  /** Variant of the Toast used for error messages */
  danger?: boolean,
  /** The text for the action */
  actionLabel?: string,
  /** The function called when the action button is pressed */
  actionFunction?: (option) => void,
  /** The Toast will close after this many milliseconds */
  disappearAfter?: number,
}

class Toast extends React.Component<Props, State> {
  static count = 0

  static defaultProps = {
    persistent: false,
    danger: false,
    actionLabel: null,
    actionFunction: null,
    disappearAfter: 6000
  }

  componentDidMount() {
  }

  onClose = () => {
    const {
      onClose,
    } = this.props

    onClose();
  }

  render() {
    const {
      message,
      persistent,
      danger,
      actionLabel,
      actionFunction,
      disappearAfter,
    } = this.props

    const toastClassNames = classNames(
      styles.Toast,
      danger && styles.danger
    )

    const closeButtonMarkup = persistent ? (
      <button onClick={this.onClose} type="button" className={styles.CloseButton} key={1}>
        <Icon source="cancelSmall" color="white" />
      </button>
    ) : null;

    const actionsMarkup = actionLabel && actionFunction ? [
      <button onClick={actionFunction} type="button" className={styles.Action} key={0}>
        {actionLabel}
      </button>,
      closeButtonMarkup
    ] : closeButtonMarkup;

    return (
      <AppProvider>
        <React.Fragment>
          <Button>hello</Button>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={true}
            autoHideDuration={disappearAfter}
            onClose={this.onClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
          >
            <SnackbarContent
              classes={{
                root: toastClassNames,
                message: styles.Message,
              }}
              message={message}
              action={actionsMarkup}
            />
          </Snackbar>
        </React.Fragment>
      </AppProvider>
    )
  }
}

export default Toast
