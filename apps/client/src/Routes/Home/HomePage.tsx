import React, { FC } from "react"

import { useHelloExample } from "Api/HelloApiExample"
import Loading from "Components/Loading"

export const HomePage: FC = () => {

  const { data, error, isLoading } = useHelloExample()

  if (error) return <div>error: { error?.message ?? "" }</div>
  if (isLoading) return <Loading />

  return (
    <div>
      <p>home page</p>

      <p>the following message was recieved from the main server api:</p>
      <pre>{JSON.stringify(data!, null, 2)}</pre>
    </div>
  )
}

export default HomePage
