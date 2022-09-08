import React, { useState } from 'react';

export function Home() {
    const [userType, setUserType] = useState("first");
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        fetch(`http://${process.env.REACT_APP_BACKEND}/users?type=${userType}`, {
            method: 'POST',
            body: JSON.stringify({
                login,
                password,
                email,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
            .then(result => console.log(result));
    }
    return (
        <div>
            Home
            <select value={userType} onChange={(event) => { setUserType(event.target.value) }}>
                <option value="first">first</option>
                <option value="second">second</option>
                <option value="third">third</option>
            </select>
            <form onSubmit={onSubmit}>
                <input placeholder="login" value={login} onChange={(event) => setLogin(event.target.value)} />
                <input placeholder="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <input placeholder="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
