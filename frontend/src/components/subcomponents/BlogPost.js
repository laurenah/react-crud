import React from 'react';
import '../../blog.css';

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
            <div className='entry'>
                <div className='title'>
                    <h2>{this.state.title}</h2>
                    <span className='byline'>{new Date(this.state.created).toLocaleDateString('en-US', {
                        month: 'short',
                        day: '2-digit',
                        year: 'numeric'
                    })}</span>
                </div>
                <p>{this.state.content}</p>
            </div> 
        );
    }
}

export default BlogPost;