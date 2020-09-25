import React, { useState, useEffect } from 'react';
import '../../blog.css';

// BlogLatest functional component
const ProjectLatest = () => {
    const [projects, setProjects] = useState([]); // array of projects and state setter

    useEffect(() => { // hooks version of componentDidMount, gets projects and sets state
        let isMounted = true; // flag denotes mount status to avoid memory leaks
        fetch('/projects/latest')
            .then(res => res.json())
            .then(projects => {
                if (isMounted) setProjects(projects);
            })
            return () => { isMounted = false }; // use effect cleanup to set flag false, if unmounted
    }, []);

    const trim = (text) => {
        return text.substring(1, text.length-1);
    }

    return (
        <>
            {projects.map(project => 
                <li key={project.id}>
                    <h3>{project.name}</h3>
                    <p dangerouslySetInnerHTML={{__html: trim(project.description)}}></p>
                </li>
            )}
        </>
    );
}

export default ProjectLatest;