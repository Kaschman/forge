# forge

> Combine Labs component library

[![NPM](https://img.shields.io/npm/v/forge.svg)](https://www.npmjs.com/package/forge) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add @combine-labs/forge
```

## Usage

```jsx
import React, { Component } from 'react'

import { MyComponent } from '@combine-labs/forge'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```

## Storybook

https://storybook.js.org/

Start storybook:
`yarn run storybook`

Storybook will now be available at `localhost:6006`

## Publish
Run the following commands from `develop` to publish a new version of Forge:
`$ yarn publish:patch` - increments 0.0.x
`$ yarn publish:minor` - increments 0.x.0
`$ yarn publish:major` - increments x.0.0

Only major versions should include breaking updates.
Publish a minor version if a new component is added.

## Contributing



## License

MIT © [Kaschman](https://github.com/Kaschman)
