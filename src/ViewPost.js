import React from 'react'

import { Redirect } from 'react-router-dom'

const ViewPost = props => {
  if (!props.post) return <Redirect to='/' />

  return (
    <div>

      <div>{props.post.id}</div>
      <div>{props.post.content}</div>
    </div>
  )
}

export default ViewPost