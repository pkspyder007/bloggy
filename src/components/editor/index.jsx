import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';

class Editor extends Component {
    render() {
        return (
            <div className="App">
                <h2>Your Post Title</h2>
                <CKEditor
                    data="<h1>Your Post content goes here</h1>"
                    onChange={(evt => console.log(evt.editor.getData()))}
                />
            </div>
        );
    }
}

export default Editor;