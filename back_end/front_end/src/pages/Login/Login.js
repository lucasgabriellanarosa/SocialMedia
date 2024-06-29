import React from 'react'
import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    let username = useRef('');
    let password = useRef('');


    const userLogin = (e) => {
        e.preventDefault()

        const loginData = {
            username: username.current.value,
            password: password.current.value
        };

        axios.post(`http://127.0.0.1:8000/api/login/`, loginData)
        .then((res) => console.log(res))
        navigate('/');

    }

    return (
        <form
            onSubmit={(e) => userLogin(e)}
        >
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" name='username' ref={username} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" name='password' ref={password} />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    )
}

export default Login