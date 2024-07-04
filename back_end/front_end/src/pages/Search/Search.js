import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Search = () => {
  let {query} = useParams()
  const [userList, setUserList] = useState([])

  useEffect(() => {
      axios.get(`http://127.0.0.1:8000/api/get_users`, {
        params: {
          query: query
        }
      })
      .then((res) => setUserList(res.data))
  
  }, [query])
  
  return (
    <div>
      <h1>Users</h1>
      <ul>

        {
          userList.map((user) => (
            <li key={user.id}>
              <Link to={`/user_profile/${user.username}`}>
                {user.username}
              </Link>  
            </li>
          ))
        }

      </ul>
    </div>
  )
}

export default Search