import React from 'react';
import '../../blog.css';

// BlogPost function component
// Might change to render individual blog posts fetched via id
class BlogPost extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            id: props.match.params.postId,
            title: '',
            content: '',
            created: ''
        }
    }

    componentDidMount() {
        fetch('/posts/' + this.state.id)
            .then(res => res.json())
            .then(post => {
                this.setState({
                    title: post[0].title,
                    content: post[0].content,
                    created: post[0].created
                });
            });
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