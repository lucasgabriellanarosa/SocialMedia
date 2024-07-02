import axios from 'axios'
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();


    let username = useRef('');
    let password = useRef('');
    let confirm_password = useRef('');

    const userRegister = (e) => {
        e.preventDefault()

        const registerData = {
            username: username.current.value,
            password: password.current.value,
            confirm_password: confirm_password.current.value
        }

        axios.post(`http://127.0.0.1:8000/api/register/`, registerData)
            .then((res) => console.log(res))
        navigate('/');
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
                            onSubmit={(e) => userRegister(e)}
                        >
                            <h1 class="display-6">Create an account</h1>
                            <div className="form-outline mb-4">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter username"
                                    name='username' ref={username}
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

                            <div className="form-outline mb-3">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Confirm password"
                                    name='confirm_password' ref={confirm_password}
                                />
                                <label className="form-label">
                                    Confirm Password
                                </label>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button
                                    type='submit'
                                    className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                >
                                    Register
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                        Already have an account? <Link to={'/'} className="link-danger">Log in</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register