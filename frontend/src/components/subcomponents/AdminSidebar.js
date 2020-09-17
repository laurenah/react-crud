// imports
import React from 'react';
import { useRouteMatch, NavLink } from 'react-router-dom';

// Admin Sidebar functional component - Stores sidebar links
const AdminSidebar = () => {
    const { url } = useRouteMatch(); // store path and url for Router switch

    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading"></div>
                            <NavLink to={url} className="nav-link">Dashboard</NavLink>

                        <div className="sb-sidenav-menu-heading">Content</div>
                            <NavLink to={`${url}/blog`} className="nav-link" activeStyle={{color: '#FF8A5B'}}>Blog List</NavLink>
                            <NavLink to={`${url}/post`} className="nav-link" activeStyle={{color: '#FF8A5B'}}>New Post</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AdminSidebar;