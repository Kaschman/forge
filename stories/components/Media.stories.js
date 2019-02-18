import React from 'react'

import { storiesOf } from '@storybook/react'

import {
  AppProvider,
  Thumbnail,
  TextStyle,
} from '@combine-labs/combine-polaris'

import Media from 'Media'

storiesOf('components/Media', module)
  .add('Default', () => (
    <AppProvider>
      <Media
        header="Hello"
      />
    </AppProvider>
  ))
  .add('Tenant', () => (
    <AppProvider>
    <Media
      image={
        <div style={{ width: 20, height: 20,}}>
          <Thumbnail 
            alt='thumbnail' 
            size="extra-small"
            source="https://ecommercenews.eu/wp-content/uploads/2015/07/sportsdirect.png"
            round
          />
        </div>
      }
      header="Sports Direct"
    />
    </AppProvider>
  ))
  .add('Comment', () => (
    <AppProvider>
    <Media
      image={
        <Thumbnail 
          alt='thumbnail' 
          source="https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MjI0MzY2MF5BMl5BanBnXkFtZTcwMzM3ODM3OA@@._V1_UX172_CR0,0,172,256_AL_.jpg"
          round
        />
      }
      header={
        <span>
          <TextStyle variation="strong">Morgan Carter</TextStyle>
          <TextStyle variation="subdued"> · 2 hrs</TextStyle>
        </span>
      }
      body="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo."
    />
    </AppProvider>
  ))
  .add('Comment (fails)', () => (
    <AppProvider>
    <Media
      image={
        <Thumbnail 
          alt='thumbnail' 
          source="https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MjI0MzY2MF5BMl5BanBnXkFtZTcwMzM3ODM3OA@@._V1_UX172_CR0,0,172,256_AL_.jpg"
          round
        />
      }
      header={
        <React.Fragment>
          <TextStyle variation="strong">Morgan Carter</TextStyle>
          <TextStyle variation="subdued"> · 2 hrs</TextStyle>
        </React.Fragment>
      }
      body="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo."
    />
    </AppProvider>
  ))
