import React from 'react'
import { useParams } from 'react-router-dom'

const Search = () => {
  let { query } = useParams()

  return (
    <div>{query}</div>
  )
}

export default Search