import React from 'react'
import axios from 'axios';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    let usernameForm = useRef('');
    let password = useRef('');
  
  
    const userLogin = (e) => {
      e.preventDefault()
  
      const loginData = {
        username: usernameForm.current.value,
        password: password.current.value
      };
  
      axios.post(`http://127.0.0.1:8000/api/login/`, loginData)
        .then((res) => navigate('/'))
        .catch((err) => console.log(err))
  
    }

    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid"
                            alt='loginImage'
                        />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form
                            onSubmit={(e) => userLogin(e)}
                        >
                            <h1 className="display-6">Login</h1>
                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter username"
                                    name='usernameForm' ref={usernameForm}
                                />
                                <label className="form-label">
                                    Username
                                </label>
                            </div>

                            <div className="form-outline mb-3">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    name='password' ref={password}
                                />
                                <label className="form-label">
                                    Password
                                </label>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button
                                    type='submit'
                                    className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                >
                                    Login
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account? <Link to={'/register'} className="link-danger">Register</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login