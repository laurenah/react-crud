// imports
import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

// Admin Sidebar functional component - Stores sidebar links
const AdminSidebar = () => {
    const { url } = useRouteMatch(); // store path and url for Router switch

    return (
        <div id="layoutSidenav_nav">
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
        </div>
    )
}

export default AdminSidebar;