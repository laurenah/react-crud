import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Home = () => {
    const { authState, authService } = useOktaAuth();

    const login = async () => {
        // redirect to '/' after login
        authService.login('/');
    }

    const logout = async() => {
        // redirect to '/' after logout
        authService.logout('/');
    }

    if (authState.isPending) {
        return <div>Loading...</div>;
    }

    return authState.isAuthenticated ?
        <button onClick={logout}>Logout</button> :
        <button onClick={login}>Login</button>;
}    


export default Home;