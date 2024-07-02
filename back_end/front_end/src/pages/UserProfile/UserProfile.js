import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
  let { username } = useParams()
  return (
    <div>{username}</div>
  )
}

export default UserProfile