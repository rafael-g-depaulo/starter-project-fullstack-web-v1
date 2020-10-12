import React, { FC } from "react"

interface HomePageProps {
  id: string,
}

export const HomePage: FC<HomePageProps> = ({
  id,
}) => {
  return (
    <div>
      <p>the thing's id is {id}</p>
    </div>
  )
}

export default HomePage
