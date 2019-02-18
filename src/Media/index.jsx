import * as React from 'react'
import {classNames} from '@shopify/react-utilities';

import {
  UnstyledLink,
} from '@combine-labs/combine-polaris'

import * as styles from './Media.module.scss'

type Props = {
  className?: string,
  image?: React.ReactNode,
  header?: React.ReactNode | string,
  body?: React.ReactNode | string,
  style?: string,
  url?: string,
}

function Media(props: Props) {
  const {
    className,
    image,
    header,
    body,
    style,
    url,
  } = props

  const mediaClasses = classNames(
    styles.Media,
    url && styles.link,
    style==="active" && styles.active,
    className && className,
  );

  const imageMarkup = image ? (
    <div className={styles.Image}>
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
}

export default Media
