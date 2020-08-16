import React, { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useEffect } from 'react'
import { ping } from 'Api/ping'

export const ListAll = ({
  ...props
}) => {
  const [text, setText] = useState("Loading...")
  const { url } = useRouteMatch()

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
