import { storiesOf } from "@storybook/react"

import NavigationLink from "./NavigationLink"
import StyledLink from "./StyledLink"

storiesOf("Atoms/Link", module)
  .addParameters({ component: NavigationLink })
  .add("StyledLink", () => <StyledLink to="." >Styled Link</StyledLink>)
  .add("NavigationLink", () => <NavigationLink to="/">Navigation Link</NavigationLink>)
