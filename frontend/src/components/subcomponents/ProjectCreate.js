import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import tiny_config from './../../tiny-config.js';

class ProjectCreate extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            name: '',
            description: '',
            link: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLinkChange = this.handleLinkChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) { // change for Title input
        this.setState({name: event.target.value});
    }

    handleLinkChange(event) {
        this.setState({link: event.target.value});
    }

    handleTextChange(description, editor) { // change for Text Editor
        this.setState({description});
    }

    handleSubmit(event) { // handle submit of form
        event.preventDefault();
        
        // Post request to send blog data
        fetch('/projects', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': this.state.name,
                'description': this.state.description,
                'link': this.state.link
            })
        }).then(alert('Project created!'))
        .then(window.location = './project');
    }

    render() {
        return(
            <div className="container-fluid">
                <h1>New Project</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name<br/>
                        <input type='text' value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <br/>
                    <label>Link<br/>
                        <input type='text' value={this.state.link} onChange={this.handleLinkChange} />
                    </label>
                    <br/>
                    <label className='editor'>Description<br/>
                        {/* TinyMCE Editor */}
                        <Editor
                            apiKey={tiny_config}
                            outputFormat='html'
                            value={this.state.description}
                            init={{
                                height: 400,
                                menubar: true,
                                forced_root_block: ''
                            }}
                            onEditorChange={this.handleTextChange}
                        />
                    </label>
                    <br/>
                    <input type='submit' value='Add Project' />
                </form>
                
            </div>
        );
    }
}

export default ProjectCreate;