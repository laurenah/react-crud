// imports
import React, { useState, useEffect } from 'react';

const ProjectList = () => {
    const [projects, setProjects] = useState([]); // array of posts and state setter

    useEffect(() => { // hooks version of componentDidMount, gets posts and sets state
        let isMounted = true; // flag denotes mount status to avoid memory leaks
        fetch('/projects')
            .then(res => res.json())
            .then(projects => {
                if (isMounted) setProjects(projects);
            })
            return () => { isMounted = false }; // use effect cleanup to set flag false, if unmounted
    }, []);

    function handleDelete(id) {
        // remove project
        if (window.confirm('Are you sure you wish to delete this project?')) {
            const newProjects = projects.filter((item) => item.id !== id);
            setProjects(newProjects);

            fetch('/projects', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id': id
                })
            }).then(res => res.json());
        }
    }

    function handleUpdate(id) {
        window.location = 'project/' + id;
    }

    return (
        <div className="container-fluid">
            <div className='users'>
                <h1>Projects</h1>
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0" style={{tableLayout: 'fixed'}}>
                        <thead>
                            <tr>
                                <th style={{width: '20%'}}>Name</th>
                                <th>Description</th>
                                <th className='created-col' style={{width: '20%'}}>Link</th>
                                <th className='actions-col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {projects.map(project => // map projects to html elements
                            <tr key={project.id}>
                                <td style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{project.name}</td>
                                <td style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{project.description}</td>
                                <td className='created-col'><a href={project.link} alt='project link'>Link</a></td>
                                <td className='actions-col'>
                                    <ul>
                                        <li><button onClick={() => handleDelete(project.id)}>
                                            <img src='https://systemuicons.com/images/icons/trash.svg' alt='delete'/></button></li>
                                        <li><button onClick={() => handleUpdate(project.id)}>
                                            <img src='https://systemuicons.com/images/icons/create.svg' alt='edit'/></button></li>
                                    </ul>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProjectList;