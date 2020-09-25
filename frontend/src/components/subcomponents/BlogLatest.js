import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../blog.css';

// BlogLatest functional component
const BlogLatest = () => {
    const [post, setPost] = useState([]); // array of post and state setter

    useEffect(() => { // hooks version of componentDidMount, gets posts and sets state
        let isMounted = true; // flag denotes mount status to avoid memory leaks
        fetch('/posts/latest')
            .then(res => res.json())
            .then(post => {
                if (isMounted) setPost(post);
            })
            return () => { isMounted = false }; // use effect cleanup to set flag false, if unmounted
    }, []);

    return (
        
        <div className='entry'>
            {post.map(post => 
                <div key={post.id}>
                    <div className='title'>
                        <h2>{post.title}</h2>
                        <span className='byline'>{new Date(post.created).toLocaleDateString('en-US', {
                            month: 'short',
                            day: '2-digit',
                            year: 'numeric'
                        })}</span>
                    </div>
                    <p dangerouslySetInnerHTML={{__html: post.content}}></p>
                    <p className="read-more">
                        <Link to={{
                            pathname: 'blog/' + post.id,
                            state: {post: post}
                        }} style={{
                            'textDecoration': 'none',
                            'color': 'orange'
                        }}>Read More {'>'}</Link>
                    </p>
                </div>
            )}
        </div> 
        
        
    );
}

export default BlogLatest;