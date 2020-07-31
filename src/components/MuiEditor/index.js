/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Toolbar, { getHandlers } from './Toolbar';

const modules = {
    toolbar: {
        container: "#toolbar",
        handlers: getHandlers(),
    },
    clipboard: {
        matchVisual: false,
    }
};

export default props => {
  const [editorHtml, setEditorHtml] = useState("");
  const handleChange = html => setEditorHtml(html);
  const saveData = () => console.log(editorHtml);
    return(
        <div className="text-editor">
            <Toolbar />
            <ReactQuill
                onChange={handleChange}
                modules={modules}
                // formats={formats}
                theme="snow" // pass false to use minimal theme
                onBlur={saveData}
            />
        </div>
    );
}
