import { storiesOf } from "@storybook/react"

import SignupForm from "./index"

storiesOf("Organisms/SignupForm", module)
  .addParameters({ component: SignupForm })
  .add("default", () => <SignupForm />)
