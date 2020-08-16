import React from 'react'
import { Link } from 'react-router-dom'

export const Show = ({
  thing_id,
  ...props
}) => {
  return (
    <div>
      <p>looking at the {thing_id}th thing</p>
      <Link to="..">go back to home</Link>
    </div>
  )
}

export default Show
