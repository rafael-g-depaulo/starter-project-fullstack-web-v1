import React from 'react'
import { storiesOf } from '@storybook/react'

import HomePage from './Display'

storiesOf("Pages/Home", module)
  .add("default", () => <HomePage data={{ msg: "Mocked Test" }}/>)
