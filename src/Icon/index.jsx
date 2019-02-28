import * as React from 'react'
import * as styles from './Icon.module.scss'
import * as icons from 'icons/icons'

import classNames from 'classnames'

type Props = {
  source: string,
  color?: string,
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

  console.log('iconSource')
  console.log(icons)

  const className = classNames(
    styles.Icon,
    color && styles[color],
    backdrop && styles.hasBackdrop,
  );

  console.log(color, styles[color])

  console.log(icons, source, icons[source])

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
