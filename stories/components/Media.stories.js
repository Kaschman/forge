import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, radios } from '@storybook/addon-knobs';

import {
  AppProvider,
  TextStyle,
} from '@combine-labs/combine-polaris'

import Media from 'Media'

storiesOf('components/Media', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <AppProvider>
      <Media
        image={
          <div
            style={{ width: '100%', height: '100%', background: '#0A1836', borderRadius: '4px' }}
          />
        }
        imageSize={radios('Image Size', { Small: 'small', Medium: 'medium', Large: 'large' }, 'medium')}
        imageMargin={radios('Image Margin', { Small: 'small', Medium: 'medium', Large: 'large' }, 'medium')}
        header={text('Header', 'Header can contain string or ReactNode')}
        body={text('Body', 'Body can contain string or ReactNode')}
      />
    </AppProvider>
  ))
  .add('Tenant', () => (
    <AppProvider>
    <Media
      image={
        <img
          alt="SD"
          src="https://pbs.twimg.com/profile_images/1093476002901168128/0JeA5eGF_400x400.jpg"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
        />
      }
      imageSize={radios('Image Size', { Small: 'small', Medium: 'medium', Large: 'large' }, 'small')}
      header="Sports Direct"
    />
    </AppProvider>
  ))
  .add('Property (Link)', () => (
    <AppProvider>
    <Media
      image={
        <img
          alt="Property"
          src="https://dl.airtable.com/fRyJQCtERb20YJWWWM6b_full_0004%2520-%2520Bicester%5B1%5D.jpg"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
        />
      }
      header={<TextStyle variation="strong">Liverpool Aintree Gym</TextStyle>}
      body={<TextStyle variation="subdued">0004</TextStyle>}
      url="https://staging-app.propflow.com/"
    />
    </AppProvider>
  ))
  .add('Property (Active)', () => (
    <AppProvider>
    <Media
      image={
        <img
          alt="Property"
          src="https://dl.airtable.com/fRyJQCtERb20YJWWWM6b_full_0004%2520-%2520Bicester%5B1%5D.jpg"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
        />
      }
      header={<TextStyle variation="strong">Liverpool Aintree Gym</TextStyle>}
      body={<TextStyle variation="subdued">0004</TextStyle>}
      active
    />
    </AppProvider>
  ))
  .add('Comment', () => (
    <AppProvider>
    <Media
      image={
        <img
          alt="Morgan"
          src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MjI0MzY2MF5BMl5BanBnXkFtZTcwMzM3ODM3OA@@._V1_UX172_CR0,0,172,256_AL_.jpg"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
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
        <img
          alt="Morgan"
          src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MjI0MzY2MF5BMl5BanBnXkFtZTcwMzM3ODM3OA@@._V1_UX172_CR0,0,172,256_AL_.jpg"
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
