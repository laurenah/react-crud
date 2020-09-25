import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import tiny_config from './../../tiny-config.js';

class BlogCreate extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            title: '',
            content: ''
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event) { // change for Title input
        this.setState({title: event.target.value});
    }

    handleTextChange(content, editor) { // change for Text Editor
        this.setState({content});
    }

    handleSubmit(event) { // handle submit of form
        event.preventDefault();
        
        // Post request to send blog data
        fetch('/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'title': this.state.title,
                'content': this.state.content
            })
        }).then(res => res.json());
    }

    render() {
        return(
            <div className="container-fluid">
                <h1>New Blog Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title<br/>
                        <input type='text' value={this.state.title} onChange={this.handleTitleChange} />
                    </label>
                    <br/>
                    <label className='editor'>Content<br/>
                        {/* TinyMCE Editor */}
                        <Editor
                            apiKey={tiny_config}
                            outputFormat='html'
                            value={this.state.content}
                            init={{
                                height: 400,
                                menubar: true,
                                force_p_newlines: true
                            }}
                            onEditorChange={this.handleTextChange}
                        />
                    </label>
                    <br/>
                    <input type='submit' value='Post' />
                </form>
                
            </div>
        );
    }
}

export default BlogCreate;