import React, { useState } from 'react'
import { useAuth, useChat } from '../hooks'

export default props => {
    const { username, signout } = useAuth()
    const [ message, setMessage] = useState('')
    const { messages, users, add } = useChat()

    function handleSubmit(e) {
        e.preventDefault()
        add({message, username})
        setMessage("")
    }

    return (
        <div id="dashboardContainer">
            <div id="dashboardTopbar">
                <h1>Hello {username}!</h1>
                <button id="signOutBtn" onClick={e => signout()}>Sign Out</button>               
            </div>
            <form id="submitContainer" onSubmit={handleSubmit}>
                <h4 id="sendMessage">Send a message...</h4>
                <input id="inputMessage" type="text" value={message} onChange={e => setMessage(e.target.value)} />
                <button id="submitBtn" type="submit">Submit</button>
            </form>
            <div id="chat">
                <div id="users">
                    {users.map((u, i) => (
                        <p>{u.username}</p>
                    ))}
                </div>
                <div id="messages">
                    {messages.map((msg, i) => (
                        <p key={"message" + i}>{msg.username}: {msg.message}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}