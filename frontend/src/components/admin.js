// imports
import React, { useCallback } from 'react';
import { Redirect, Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import '../admin.css';
import Users from './subcomponents/Users.js';
import AdminFooter from './subcomponents/AdminFooter';
import AdminSidebar from './subcomponents/AdminSidebar';
import BlogList from './subcomponents/BlogList';

// Admin functional component - Holds the main template for the Admin portal
const Admin = () => {
    const { path } = useRouteMatch(); // store path and url for Router switch
    // Callback for Sidebar toggling
    const toggleSidebar = useCallback(() => {
        var sidebar = document.getElementById('layoutSidenav_nav');
        var content = document.getElementById('layoutSidenav_content');
        var sideStyle = getComputedStyle(sidebar);
        var translate = sideStyle.transform;

        if (translate === 'matrix(1, 0, 0, 1, -225, 0)') { // if off-screen, bring back on-screen
            sidebar.style.transform = 'none';
            content.style.marginLeft = '0';
        } else {
            sidebar.style.transform = 'translateX(-225px)';
            content.style.marginLeft = '-225px';
        }
    }, []);
    
    const { authState, authService } = useOktaAuth(); // state and service for okta

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
                <Link to='/' className="navbar-brand">lh CMS</Link>
                <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" onClick={toggleSidebar}><i className="fas fa-bars"></i></button>
                {/* <!-- Logout Button --> */}
                <ul className="d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                    {loginButton}
                </ul>
            </nav>

            <div id="layoutSidenav">
                <AdminSidebar />
                {/* <div id="layoutSidenav_nav">
                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading">Core</div>
                                    <Link to={url} className="nav-link">Dashboard</Link>

                                <div className="sb-sidenav-menu-heading">Interface</div>
                                    <Link to={`${url}/blog`} className="nav-link">Blog</Link>
                            </div>
                        </div>
                    </nav>
                </div> */}
                <div id="layoutSidenav_content">
                    <main>
                        {/* Switch for toggling content in main frame */}
                        <Switch>
                            <Route exact path={path}>
                                <Users />
                            </Route>

                            <Route path={`${path}/blog`}>
                                <BlogList />
                            </Route>
                        </Switch>
                        
                    </main>
                    <AdminFooter />
                </div>
            </div>
            <script src="https://code.jquery.com/jquery-3.5.1.min.js" crossOrigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
        </div>
    )
}

export default Admin;