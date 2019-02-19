import * as React from 'react'
import {classNames, variationName} from '@shopify/react-utilities/styles';

import {
  UnstyledLink,
} from '@combine-labs/combine-polaris'

import * as styles from './Media.module.scss'

export type ImageSize = 'small' | 'medium' | 'large';

type Props = {
  className?: string,
  image?: React.ReactNode,
  header?: React.ReactNode | string,
  body?: React.ReactNode | string,
  style?: string,
  url?: string,
  imageSize?: ImageSize,
}

function Media(props: Props) {
  const {
    className,
    image,
    header,
    body,
    style,
    url,
    imageSize,
  } = props

  const imageClasses = classNames(
    styles.Image,
    styles[variationName('image', imageSize)],
  );

  const imageMarkup = image ? (
    <div className={imageClasses}>
      {image}
    </div>
  ) : null;

  const headerMarkup = header ? (
    <div className={styles.Header}>
      {header}
    </div>
  ) : null;

  const bodyMarkup = body ? (
    <div className={styles.Body}>
      {body}
    </div>
  ) : null;

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
    style==="active" && styles.active,
    className && className,
  );

  return url ? (
    <UnstyledLink className={mediaClasses} url={url}>
      {innerMarkup}
    </UnstyledLink>
  ) : (
    <div className={mediaClasses}>
      {innerMarkup}
    </div>
  );
}

Media.defaultProps = {
  className: undefined,
  image: undefined,
  header: undefined,
  body: undefined,
  style: undefined,
  url: undefined,
  imageSize: 'medium',
}

export default Media
