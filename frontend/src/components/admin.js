// imports
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

// Admin functional component
const Admin = () => {
    const [users, setUsers] = useState([]); // array of users and state setter
    const { authState, authService } = useOktaAuth(); // state and service for okta

    useEffect(() => { // hooks version of componentDidMount, gets users and sets state
        let isMounted = true; // flag denotes mount status to avoid memory leaks
        fetch('/users')
            .then(res => res.json())
            .then(users => {
                if (isMounted) setUsers(users);
            })
            return () => { isMounted = false }; // use effect cleanup to set flag false, if unmounted
    }, [])

    const logout = () => {
        // redirect to '/' after logout
        authService.logout('/');
    }

    // if waiting for authentication state, denote loading
    if (authState.isPending) {
        return <div>Loading...</div>;
    }

    // if the user isn't authenticated they shouldn't be there, otherwise show logout button
    const loginButton = authState.isAuthenticated ?
        <button onClick={logout}>Logout</button> : <Redirect to={{ pathname: '/'}}/>;

    return (
        <div>
            {loginButton}
            <div className='users'>
              <h1>Users</h1>
              {users.map(user => // map users to html elements
                <div key={user.id}>{user.name} - {user.email}</div>
              )}
            </div>
        </div>
    )
}

export default Admin;