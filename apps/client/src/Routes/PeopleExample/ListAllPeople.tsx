import React, { FC } from "react"

import { usePeopleExample } from "Api/PeopleExample"

export const ListAllPeople: FC = () => {

  const { data, error, isLoading } = usePeopleExample()

  // if is loading data
  if (isLoading) return <div>loading...</div>

  // if there were any errors
  if (error) return <div>error!</div>

  // if reached here, we know that data is loaded and there is no error
  const people = data!

  return (
    <div>
      <pre>
        {JSON.stringify(people, null, 2)}
      </pre>
    </div>
  )
}

export default ListAllPeople
