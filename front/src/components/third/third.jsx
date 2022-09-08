import React, { useEffect, useState } from 'react';

export function Third() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://${process.env.REACT_APP_BACKEND}/users/third`)
            .then((response) => response.json())
            .then(result => {
                setUsers(result);
            });
    }, []);

    return (
        <section>
            Third users table
            <div className="table">
                <div className="table-header">
                    <div>
                        Id
                    </div>
                    <div>
                        Login
                    </div>
                    <div>
                        Password-hash
                    </div>
                    <div>
                        Email
                    </div>
                </div>
                <div className="table-data">
                    {users.map(user => (<div>
                        <div>{user.id}</div>
                        <div>{user.login}</div>
                        <div>{user.passwordHash}</div>
                        <div>{user.email}</div>
                    </div>))}
                </div>
            </div>
        </section>
    )
}