import * as React from 'react'
import _ from 'lodash'
import moment from 'moment'

import {
  DatePreference,
  Media,
  Stack,
  TextStyle,
} from '@combine-labs/combine-polaris'

import type { Event } from 'types'

import { dateStartIcon, dateEndIcon } from 'icons/formattedIcons'

import * as styles from './Timeline.module.css'

type Props = {
  end?: Event,
  events?: Event[],
  start?: Event,
}

function Timeline(props: Props) {
  const {
    end,
    events,
    start,
  } = props

  if (events && !_.isEmpty(events)) {
    events.sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)

      return dateA - dateB
    })
  }

  return (
    <Stack vertical spacing="loose">
      <div className={styles.Timeline}>
        <Stack vertical spacing="loose">
          { start ?
            <Media
              key="start"
              icon={dateStartIcon}
              iconBackdrop
              header={<TextStyle variation="strong">{start.name}</TextStyle>}
              body={<TextStyle variation="subdued">{start.status} <DatePreference>{moment(start.date).format('YYYY/MM/DD')}</DatePreference></TextStyle>}
            /> : null
          }
          {(events && !_.isEmpty(events)) ? events.map((event, index) => (
            <Media
              active={event.active || false}
              key={event.id || index}
              url={event.url}
              icon={event.icon}
              iconColor={event.iconColor}
              iconBackdrop
              header={<TextStyle variation="strong">{event.name}</TextStyle>}
              badgeText={event.badgeText || '--'}
              badgeStatus={event.badgeStatus || 'info'}
              body={<TextStyle variation="subdued">{event.status}</TextStyle>}
            />
          )) : null
          }
          { end ?
            <Media
              key="end"
              icon={dateEndIcon}
              iconBackdrop
              header={<TextStyle variation="strong">{end.name}</TextStyle>}
              body={<TextStyle variation="subdued">{end.status} <DatePreference>{moment(end.date).format('YYYY/MM/DD')}</DatePreference></TextStyle>}
            /> : null
          }
        </Stack>
      </div>
    </Stack>
  )
}

Timeline.defaultProps = {
  start: undefined,
  end: undefined,
  events: [],
}

export default Timeline
