// imports
import React, { useState, useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import '../admin.css';

// Admin functional component
const Admin = () => {
    const toggleSidebar = useCallback(() => {
        var sidebar = document.getElementById('layoutSidenav_nav');
        var content = document.getElementById('layoutSidenav_content');
        var sideStyle = getComputedStyle(sidebar);
        var contentStyle = getComputedStyle(content);
        var contentMargin = contentStyle.marginLeft;
        console.log(contentMargin);
        var translate = sideStyle.transform;

        if (translate === 'matrix(1, 0, 0, 1, -225, 0)') {
            sidebar.style.transform = 'none';
            content.style.marginLeft = '0';
        } else {
            sidebar.style.transform = 'translateX(-225px)';
            content.style.marginLeft = '-225px';
        }
    }, []);

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
    }, []);

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
        <button className="btn btn-link" onClick={logout}>Logout</button> : <Redirect to={{ pathname: '/'}}/>;

    return (
        <div>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <a className="navbar-brand" href="/">lh CMS</a>
                <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" onClick={toggleSidebar}><i className="fas fa-bars"></i></button>
                {/* <!-- Logout Button --> */}
                <ul className="d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    {loginButton}
                </ul>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">Core</div>
                                <a className="nav-link" href="/">
                                    Dashboard
                                </a>
                                <div className="sb-sidenav-menu-heading">Interface</div>
                                <a className="nav-link collapsed" href="/">
                                    Blog
                                </a>
                                <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <a className="nav-link" href="/">Posts</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <div className='users'>
                                <h1>Users</h1>
                                {users.map(user => // map users to html elements
                                    <div key={user.id}>{user.name} - {user.email}</div>
                                )}
                            </div>
                        </div>
                    </main>
                    <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">lh &copy; 2020</div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.5.1.min.js" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
        </div>
    )
}

export default Admin;