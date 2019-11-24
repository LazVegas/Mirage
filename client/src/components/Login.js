import React, { useState } from 'react'
import { useAuth } from '../hooks'
import { Link } from 'react-router-dom'

export default props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { signin } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()

        signin(username, password).then(resp => {
            props.history.push("/")
        })
    }

    return (
        <div className="formContainer">

            <form id="loginForm" onSubmit={handleSubmit}>
                <input placeholder="Username" id="userNameInput" type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                <input placeholder="Password" id="passwordInput" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button id="loginSubmit" type="submit">Login</button>
            </form>
            <div id="or">OR</div>
            <div id="registerLink">
                <Link to="/register">Sign Up / Register</Link>                
            </div>
        </div>
    )
}