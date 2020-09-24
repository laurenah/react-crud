// imports
import React, { useEffect, useState } from 'react';
import '../blog.css';
import { ReactComponent as Logo } from '../laurenah_logo-08.svg';

// Blog functional component - is the Blog page accessible via the Home page
const Blog = () =>{
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

    const handlePost = (id) => {
        window.location = 'blog/' + id;
    }

    return (
        <div>
            <div className='small-nav'>
                <Logo className='monstera logo-sm'/>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/blog'>Blog</a></li>
                    <li><a href='/contact'>Contact</a></li> 
                </ul>
            </div>
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
                            <p>{truncate(post.content)}</p>
                            <p className="read-more">
                                <button onClick={() => handlePost(post.id)}>Read More {'>'}</button>
                            </p>
                        </div>
                    </div>
                )}  
            </div>
        </div>
        
    );
}

export default Blog;