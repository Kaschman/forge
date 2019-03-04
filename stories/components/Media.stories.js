import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, radios } from '@storybook/addon-knobs'

import Media from 'Media' // eslint-disable-line import/no-unresolved

storiesOf('components/Media', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Media
      image={(
        <div
          style={{
            width: '100%', height: '100%', background: '#0A1836', borderRadius: '4px',
          }}
        />
)}
      imageSize={radios('Image Size', { Small: 'small', Medium: 'medium', Large: 'large' }, 'medium')}
      imageMargin={radios('Image Margin', { Small: 'small', Medium: 'medium', Large: 'large' }, 'medium')}
      header={text('Header', 'Header can contain string or ReactNode')}
      body={text('Body', 'Body can contain string or ReactNode')}
    />
  ))
  .add('Tenant', () => (
    <Media
      image={(
        <img
          alt="SD"
          src="https://pbs.twimg.com/profile_images/1093476002901168128/0JeA5eGF_400x400.jpg"
          style={{
            width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%',
          }}
        />
)}
      imageSize={radios('Image Size', { Small: 'small', Medium: 'medium', Large: 'large' }, 'small')}
      imageMargin={radios('Image Margin', { Small: 'small', Medium: 'medium', Large: 'large' }, 'small')}
      header="Sports Direct"
    />
  ))
  .add('Property (Link)', () => (
    <Media
      image={(
        <img
          alt="Property"
          src="https://dl.airtable.com/fRyJQCtERb20YJWWWM6b_full_0004%2520-%2520Bicester%5B1%5D.jpg"
          style={{
            width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px',
          }}
        />
)}
      header={<strong>Liverpool Aintree Gym</strong>}
      body={<span>0004</span>}
      url="https://staging-app.propflow.com/"
    />
  ))
  .add('Property (Active)', () => (
    <Media
      image={(
        <img
          alt="Property"
          src="https://dl.airtable.com/fRyJQCtERb20YJWWWM6b_full_0004%2520-%2520Bicester%5B1%5D.jpg"
          style={{
            width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px',
          }}
        />
)}
      header={<strong>Liverpool Aintree Gym</strong>}
      body={<span>0004</span>}
      active
    />
  ))
  .add('Comment', () => (
    <Media
      image={(
        <img
          alt="Morgan"
          src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MjI0MzY2MF5BMl5BanBnXkFtZTcwMzM3ODM3OA@@._V1_UX172_CR0,0,172,256_AL_.jpg"
          style={{
            width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%',
          }}
        />
)}
      header={(
        <span>
          <strong>Morgan Carter</strong>
          <span> · 2 hrs</span>
        </span>
)}
      body="Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo."
    />
  ))
//   .add('Comment (fails)', () => (
//     <Media
//       image={(
//         <img
//           alt="Morgan"
//           src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5MjI0MzY2MF5BMl5BanBnXkFtZTcwMzM3ODM3OA@@._V1_UX172_CR0,0,172,256_AL_.jpg"
//         />
// )}
//       header={(
//         <React.Fragment>
//           <strong>Morgan Carter</strong>
//           <span> · 2 hrs</span>
//         </React.Fragment>
// )}
//       body="Fusce dapibus, tellus ac cursus commodo, tortor mauris
//            condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna mollis ornare vel eu leo."
//     />
//   ))
