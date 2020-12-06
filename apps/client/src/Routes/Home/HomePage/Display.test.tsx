import React from 'react'
import render from "Utils/render"

import HomePageDisplay from "./Display"
import { HelloExample } from 'Api/HelloApiExample'
import { fireEvent } from '@testing-library/react'

describe("Home Page", () => {
  it("renders without exploding", () => {
    const mockedData: HelloExample = {
      msg: "mocked data test"
    }
    const { getByText, getByTestId } = render(<HomePageDisplay data={mockedData} />)

    getByText(/"msg": "mocked data test"/)

    fireEvent.click(getByTestId("data-json"))

  })
})
