import React from 'react'
import { storiesOf } from '@storybook/react'

import ListAllPeople from './Display'

const peopleTest: PersonExample[] = [
  { name: "Maria", age: 17 },
  { name: "João", age: 12 },
]
storiesOf("Pages/ListAllPeople", module)
  .add("empty list", () => <ListAllPeople people={[]}/>)
  .add("non-empty list", () => <ListAllPeople people={peopleTest}/>)
