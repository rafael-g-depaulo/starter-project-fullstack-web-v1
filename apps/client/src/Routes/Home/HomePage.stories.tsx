import React from 'react'
import { storiesOf } from '@storybook/react'

import HomePage from './HomePage'

storiesOf("Pages/Home", module)
  .add("default", () => <HomePage />)
