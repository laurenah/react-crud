import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
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

    const truncate = (text) => {
        return text.substring(0, 200) + '...';
    }

    return (
        <div className="blog-posts">
            {posts.map(post => 
                <div className="blog-card" key={post.id}>
                    <div className="description">
                        <h1>{post.title}</h1>
                        <h2>{new Date(post.created).toLocaleDateString('en-US', {
                                month: 'short',
                                day: '2-digit',
                                year: 'numeric'
                            })}</h2>
                        <p dangerouslySetInnerHTML={{__html: truncate(post.content)}}></p>
                        <p className="read-more">
                            <Link to={{
                                pathname: 'blog/' + post.title.replace(/\s+/g, '-').toLowerCase(),
                                state: {post: post}
                            }}>Read More {'>'}</Link>
                        </p>
                    </div>
                </div>
            )}  
        </div>
    ); 
}

export default BlogCard;