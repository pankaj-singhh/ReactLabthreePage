import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Texteditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    // Load initial data from localStorage
    const storedData = localStorage.getItem('editorData');
    if (storedData) {
      setEditorState(
        EditorState.createWithContent(convertFromRaw(JSON.parse(storedData)))
      );
    }
  }, []);

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);

    // Save data to localStorage
    const contentState = newEditorState.getCurrentContent();
    localStorage.setItem('editorData', JSON.stringify(convertToRaw(contentState)));
  };

  return (
    <div className="bg-white rounded-md shadow-md pt-4 pb-14 pl-4 pr-4 mt-10 h-[30vh] w-[30vw] overflow-y-scroll">
      <p className='font-bold text-3xl'>Rich Text Editor</p>
      <div className='mt-2'>
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbar={{
            options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'history'],
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
        />
      </div>
    </div>
  );
};

export default Texteditor;
