import React from 'react'
import { Link } from 'react-router-dom'

export const ListAll = ({
  ...props
}) => {
  return (
    <div>
      <p>Listing all stuff?</p>
      <Link to="/home/4">go to the 4th thing</Link>
    </div>
  )
}

export default ListAll
