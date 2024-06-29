import React from 'react'
import { Outlet } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Layout = () => {
  const navigate = useNavigate();

  const userLogout = (e) => {
    e.preventDefault()

    axios.post(`http://127.0.0.1:8000/api/logout/`)
    .then((res) =>  console.log(res))

    navigate('/');

  }

  return (
    <>
      <Outlet />
      <form
        onSubmit={(e) => userLogout(e)}
      >
            <button type="submit" className="btn btn-danger">Logout</button>
        </form>
    </>
  )
}

export default Layout