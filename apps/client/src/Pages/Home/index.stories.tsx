import { storiesOf } from "@storybook/react"

import Home from "."
// import { HomepageBannerInfo } from "Api/HomepageBannerInfo"
// import { mockImage } from "Utils/Image"

// const data: HomepageBannerInfo = {
//   title: "LABFAZ",
//   subtitle: "LoremIpsum",
// }

storiesOf("Pages/Home", module)
  .addParameters({ component: Home })
  .add("default", () => <Home />)
