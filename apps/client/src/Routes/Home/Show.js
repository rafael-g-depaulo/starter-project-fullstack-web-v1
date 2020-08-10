import React from 'react'
import { useParams, Link } from 'react-router-dom'

export const Show = ({
  ...props
}) => {
  const { thing_id } = useParams()
  return (
    <div>
      <p>looking at the {thing_id}th thing</p>
      <Link to="/home">go back to home</Link>
    </div>
  )
}

export default Show
