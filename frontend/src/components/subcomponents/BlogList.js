// imports
import React, { useState, useEffect } from 'react';

const BlogList = () => {
    const [posts, setPosts] = useState([]); // array of users and state setter

    useEffect(() => { // hooks version of componentDidMount, gets users and sets state
        let isMounted = true; // flag denotes mount status to avoid memory leaks
        fetch('/posts')
            .then(res => res.json())
            .then(posts => {
                if (isMounted) setPosts(posts);
            })
            return () => { isMounted = false }; // use effect cleanup to set flag false, if unmounted
    }, []);

    return (
        <div className="container-fluid">
            <div className='users'>
                <h1>Posts</h1>
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0" style={{tableLayout: 'fixed'}}>
                        <thead>
                            <tr>
                                <th style={{width: '20%'}}>Title</th>
                                <th>Content</th>
                                <th style={{width: '20%'}}>Created</th>
                            </tr>
                        </thead>
                        <tbody>
                        {posts.map(post => // map users to html elements
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{post.content}</td>
                                <td>{new Date(post.created).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: '2-digit',
                                    year: 'numeric'
                                })}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default BlogList;