import React, { FC } from "react"
import { PersonExample } from "Api/PeopleExample"


export interface DisplayProps {
  people: PersonExample[],
}

export const Display: FC<DisplayProps> = ({
  people,
}) => {
  return (
    <div>
      <pre>
        {JSON.stringify(people, null, 2)}
      </pre>
    </div>
  )
}

export default Display
