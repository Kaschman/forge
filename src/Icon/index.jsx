import * as React from 'react'
import * as styles from './Icon.module.scss'
import * as icons from 'icons/icons'

import classNames from 'classnames'

export type Color = 'default' | 'blue' | 'green' | 'yellow' | 'red';

type Props = {
  source: string,
  color?: Color,
  backdrop?: boolean,
  accessibilityLabel: string,
}

function Icon(props: Props) {
  const {
    source,
    color,
    backdrop,
    accessibilityLabel,
  } = props

  const className = classNames(
    styles.Icon,
    color && styles[color],
    backdrop && styles.hasBackdrop,
  );

  const iconSource = icons[source]

  const contentMarkup = (
    <svg
      className={styles.Svg}
      viewBox={iconSource.viewBox}
      dangerouslySetInnerHTML={{__html: iconSource.body}}
      focusable="false"
      aria-hidden="true"
    />
  )

  return (
    <span className={className} aria-label={accessibilityLabel}>
      {contentMarkup}
    </span>
  )
}

Icon.defaultProps = {
  color: 'default',
  backdrop: false,
}

export default Icon
