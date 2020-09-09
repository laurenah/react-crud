// imports
import React, { useState, useEffect } from 'react';

// User Component - Fetches users from Database
const Users = () => {
    const [users, setUsers] = useState([]); // array of users and state setter

    useEffect(() => { // hooks version of componentDidMount, gets users and sets state
        let isMounted = true; // flag denotes mount status to avoid memory leaks
        fetch('/users')
            .then(res => res.json())
            .then(users => {
                if (isMounted) setUsers(users);
            })
            return () => { isMounted = false }; // use effect cleanup to set flag false, if unmounted
    }, []);

    return (
        <div className="container-fluid">
            <div className='users'>
                <h1>Users</h1>
                {users.map(user => // map users to html elements
                    <div key={user.id}>{user.name} - {user.email}</div>
                )}
            </div>
        </div>
    );
}

export default Users;