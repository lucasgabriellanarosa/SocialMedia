import React, { useRef, useState } from 'react'
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Layout = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [isUserLogged, setIsUserLogged] = useState(false)

  axios.get(`http://127.0.0.1:8000/api/is_user_logged`)
    .then((res) => {
      setUsername(res.data.username)
      setIsUserLogged(res.data.logged)
    })


  const userLogout = (e) => {
    e.preventDefault()

    axios.post(`http://127.0.0.1:8000/api/logout/`)
      .then((res) => navigate('/login'))

  }

  const [query, setQuery] = useState('')
  const inputQuery = useRef()

  const handleSearchQuery = () => {
    setQuery(inputQuery.current.value)
  }

  const searchQuery = (e) => {
    e.preventDefault()

    navigate(`/search/${query}`)
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#e3f2fd" }}>
        <div className="container-fluid gap-3">
          {
            isUserLogged ?
              <Link className="navbar-brand" to={`/user_profile/${username}`}>
                {username}
              </Link>
              :
              <Link className="navbar-brand" to={'/login'}>
                Login
              </Link>
          }

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id='navbarNavDropdown'>
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to={`/`}>Home</Link>
            </div>
          </div>

          <div className='d-flex gap-2'>
            <form className='d-flex' role="search"
              onSubmit={(e) => searchQuery(e)}
            >
              <input ref={inputQuery} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={handleSearchQuery} />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>

            {
              isUserLogged ?
                <form
                  onSubmit={(e) => userLogout(e)}>
                  <button className="btn btn-danger me-2" type="submit">Logout</button>
                </form>
                :
                <></>
            }
          </div>

        </div>
      </nav>

      <Outlet />
    </>
  )
}

export default Layout