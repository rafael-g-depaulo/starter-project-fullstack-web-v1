import React, { FC } from "react"

import { usePersonExample } from "Api/PeopleExample"
import Loading from "Components/Loading"

export interface ShowPersonProps {
  id: number  
}

export const ShowPerson: FC<ShowPersonProps> = ({
  id,
}) => {
  const { data, error, isLoading } = usePersonExample(id)

  // if is loading data
  if (isLoading) return <Loading />

  // if there were any errors
  if (error) return <div>error: { error?.message ?? "" }</div>

  // if reached here, we know that data is loaded and there is no error
  const person = data!

  return (
    <div>
      <p>hello, {person.name}, i see you're {person.age}</p>
    </div>
  )
}

export default ShowPerson
