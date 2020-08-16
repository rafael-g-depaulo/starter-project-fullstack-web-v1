import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ping } from 'Api/ping'
import useUrl from 'Hooks/useUrl'

export const ListAll = ({
  ...props
}) => {
  const [text, setText] = useState("Loading...")
  const url = useUrl()

  useEffect(() => {
    ping()
      .then(response => setText(response.data))
      .catch(() => setText("Error! did you forget to start the server?"))
  }, [])
  return (
    <div>
      <p>Listing all stuff?</p>
      <Link to={`${url}/4`}>go to the 4th thing</Link>
      <p>Server ping: {text}</p>
    </div>
  )
}

export default ListAll
