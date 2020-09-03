import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Home = () => {
    const { authState, authService } = useOktaAuth();

    const login = async () => {
        // redirect to '/admin' after login
        authService.login('/admin');
    }

    const logout = async() => {
        // redirect to '/' after logout
        authService.logout('/');
    }

    if (authState.isPending) {
        return <div>Loading...</div>;
    }

    const loginButton = authState.isAuthenticated ?
        <button onClick={logout}>Logout</button> :
        <button onClick={login}>Login</button>

    return (
       <div class='container'>
           <p>We're at home</p>
           {loginButton}
       </div>

    );
        
}    


export default Home;