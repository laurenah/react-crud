import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import tiny_config from './../../tiny-config.js';

class ProjectEdit extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            id: props.match.params.projId,
            name: '',
            description: ''
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('/projects/' + this.state.id)
            .then(res => res.json())
            .then(project => {
                this.setState({
                    name: project[0].name,
                    description: project[0].description
                });
            });
    }

    handleNameChange(event) { // change for Title input
        this.setState({name: event.target.value});
    }

    handleTextChange(description, editor) { // change for Text Editor
        this.setState({description});
    }

    handleSubmit(event) { // handle submit of form
        event.preventDefault();
        
        // Put request to update blog data
        fetch('/projects/' + this.state.id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': this.state.name,
                'description': this.state.description
            })
        }).then(alert('Project updated!'))
        .then(window.location = '../project');
    }

    render() {
        return(
            <div className="container-fluid">
                <h1>Editing {this.state.name}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title<br/>
                        <input type='text' value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <br/>
                    <label className='editor'>Content<br/>
                        {/* TinyMCE Editor */}
                        <Editor
                            apiKey={tiny_config}
                            outputFormat='html'
                            value={this.state.description}
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

export default ProjectEdit;