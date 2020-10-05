import React from 'react';
import '../../blog.css';
import { ReactComponent as Logo } from '../../laurenah_logo-08.svg';

// BlogPost component
class BlogPost extends React.Component {
    constructor(props) {
        super (props);
        console.log(props.location.state.post)
        this.state = {
            id: props.location.state.post.id,
            title: props.location.state.post.title,
            content: props.location.state.post.content,
            created: props.location.state.post.created,
        }
    }

    render() {
        return (
            <div className='blog-container'>
                <div className='small-nav'>
                    <Logo className='monstera logo-sm'/>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/blog'>Blog</a></li>
                        <li><a href='/contact'>Contact</a></li> 
                    </ul>
                </div>
                <div className='single-entry'>
                    <div className='title'>
                        <h2>{this.state.title}</h2>
                        <span className='byline'>{new Date(this.state.created).toLocaleDateString('en-US', {
                            month: 'short',
                            day: '2-digit',
                            year: 'numeric'
                        })}</span>
                    </div>
                    <p dangerouslySetInnerHTML={{__html: this.state.content}}></p>
                </div> 

                <div className='footer' style={{
                    'width': '100%',
                    'backgroundColor': '#fff',
                    'padding': '20px',
                    'position': 'absolute',
                    'bottom' : '0',
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
}

export default BlogPost;