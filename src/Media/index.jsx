import * as React from 'react'
import classNames from 'classnames'

import * as styles from './Media.module.scss'

export type ImageSize = 'small' | 'medium' | 'large';
export type ImageMargin = 'small' | 'medium' | 'large';

type Props = {
  className?: string,
  image?: React.ReactNode,
  header?: React.ReactNode | string,
  body?: React.ReactNode | string,
  active?: boolean,
  url?: string,
  imageSize?: ImageSize,
  imageMargin?: ImageMargin,
}

function Media(props: Props) {
  const {
    className,
    image,
    header,
    body,
    active,
    url,
    imageSize,
    imageMargin,
  } = props

  const imageClasses = classNames(
    styles.Image,
    imageSize && imageSize === 'small' && styles.imageSmall,
    imageSize && imageSize === 'medium' && styles.imageMedium,
    imageSize && imageSize === 'large' && styles.imageLarge,
    imageMargin && imageMargin === 'small' && styles.marginSmall,
    imageMargin && imageMargin === 'medium' && styles.marginMedium,
    imageMargin && imageMargin === 'large' && styles.marginLarge,
  )

  const imageMarkup = image ? (
    <div className={imageClasses}>
      {image}
    </div>
  ) : null

  const headerMarkup = header ? (
    <div className={styles.Header}>
      {header}
    </div>
  ) : null

  const bodyMarkup = body ? (
    <div className={styles.Body}>
      {body}
    </div>
  ) : null

  const innerMarkup = (
    <React.Fragment>
      {imageMarkup}
      <div className={styles.Content}>
        {headerMarkup}
        {bodyMarkup}
      </div>
    </React.Fragment>
  )

  const mediaClasses = classNames(
    styles.Media,
    url && styles.link,
    active && styles.active,
    className && className,
  )

  return url ? (
    <a className={mediaClasses} href={url}>
      {innerMarkup}
    </a>
  ) : (
    <div className={mediaClasses}>
      {innerMarkup}
    </div>
  )
}

Media.defaultProps = {
  className: undefined,
  image: undefined,
  header: undefined,
  body: undefined,
  active: false,
  url: undefined,
  imageSize: 'medium',
  imageMargin: 'medium',
}

export default Media
