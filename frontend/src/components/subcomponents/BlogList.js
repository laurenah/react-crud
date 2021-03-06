// imports
import React, { useState, useEffect } from 'react';

const BlogList = () => {
    const [posts, setPosts] = useState([]); // array of posts and state setter

    useEffect(() => { // hooks version of componentDidMount, gets posts and sets state
        let isMounted = true; // flag denotes mount status to avoid memory leaks
        fetch('/posts')
            .then(res => res.json())
            .then(posts => {
                if (isMounted) setPosts(posts);
            })
            return () => { isMounted = false }; // use effect cleanup to set flag false, if unmounted
    }, []);

    function handleDelete(id) {
        // remove post
        if (window.confirm('Are you sure you wish to delete this post?')) {
            const newPosts = posts.filter((item) => item.id !== id);
            setPosts(newPosts);

            fetch('/posts', {
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
        window.location = 'post/' + id;
    }

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
                                <th className='created-col' style={{width: '20%'}}>Created</th>
                                <th className='actions-col'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {posts.map(post => // map posts to html elements
                            <tr key={post.id}>
                                <td style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{post.title}</td>
                                <td style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{post.content}</td>
                                <td className='created-col'>{new Date(post.created).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: '2-digit',
                                    year: 'numeric'
                                })}</td>
                                <td className='actions-col'>
                                    <ul>
                                        <li><button onClick={() => handleDelete(post.id)}>
                                            <img src='https://systemuicons.com/images/icons/trash.svg' alt='delete'/></button></li>
                                        <li><button onClick={() => handleUpdate(post.id)}>
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

export default BlogList;