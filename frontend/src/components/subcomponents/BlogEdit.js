import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import tiny_config from './../../tiny-config.js';

class BlogEdit extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            id: props.match.params.postId,
            title: '',
            content: ''
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('/posts/' + this.state.id)
            .then(res => res.json())
            .then(post => {
                this.setState({
                    title: post[0].title,
                    content: post[0].content
                });
            });
    }

    handleTitleChange(event) { // change for Title input
        this.setState({title: event.target.value});
    }

    handleTextChange(content, editor) { // change for Text Editor
        this.setState({content});
    }

    handleSubmit(event) { // handle submit of form
        event.preventDefault();
        
        // Put request to update blog data
        fetch('/posts/' + this.state.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'title': this.state.title,
                'content': this.state.content
            })
        }).then(alert('Post updated!'))
        .then(window.location = '../blog');
    }

    render() {
        return(
            <div className="container-fluid">
                <h1>Editing {this.state.title}</h1>
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
                                selector: 'textarea',
                                height: 400,
                                menubar: true,
                                forced_root_block: '',
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                  ],
                                  toolbar: 'undo redo | formatselect | ' +
                                  'bold italic backcolor | alignleft aligncenter ' +
                                  'alignright alignjustify | bullist numlist outdent indent | ' +
                                  'removeformat | help',
                            }}
                            onEditorChange={this.handleTextChange}
                        />
                    </label>
                    <br/>
                    <input type='submit' value='Save' />
                </form>
                
            </div>
        );
    }
}

export default BlogEdit;