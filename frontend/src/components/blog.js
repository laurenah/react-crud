import React from 'react';
import '../blog.css';
import { ReactComponent as Logo } from '../laurenah_logo-08.svg';

const Blog = () =>{

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
            <div className="blog-card">
                <div className="description">
                    <h1>The Odd One Out</h1>
                    <h2>Aug 28. 2020</h2>
                    <p>For my last two years of high school, I decided to leave the school I had attended for
					    the first 16 years of my life in order to specialise for the university degree I wanted.
                        This meant leaving behind most of my...</p>
                    <p className="read-more">
                        <a href="/blog">Read More</a>
                    </p>
                </div>
            </div>
        </div>
        
    );
}

export default Blog;