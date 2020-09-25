// imports
import React from 'react';
import '../blog.css';
import { ReactComponent as Logo } from '../laurenah_logo-08.svg';
import BlogCard from './subcomponents/BlogCard';

// Blog functional component - is the Blog page accessible via the Home page
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

            <BlogCard /> 

            <div className='footer' style={{
                'width': '100%',
                'backgroundColor': '#fff',
                'padding': '20px',
                'position': 'absolute',
                'bottom': '0',
                'color': 'gray'
            }}>
                <ul>
                    <li style={{'display': 'inline', 'padding': '10px'}}>lauren hammond © 2020</li>
                    <li style={{'display': 'inline', 'padding': '10px'}}>
                        <a href='https://github.com/laurenah'
                        style={{
                            'textDecoration': 'none',
                            'color': 'gray'
                        }}>Github</a>
                    </li>
                    <li style={{'display': 'inline', 'padding': '10px'}}>
                        <a href='https://www.linkedin.com/in/lauren-h-81917ab4/'
                        style={{
                            'textDecoration': 'none',
                            'color': 'gray'
                        }}>Linkedin</a>
                    </li>
                </ul>
            </div>
        </div>
        
    );
}

export default Blog;