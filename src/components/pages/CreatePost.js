import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');

  const createPost = (e) =>{
    e.preventDefault();
    const data = new FormData();
      data.set = ('title', title);
      data.set = ('summary', summary);
      data.set = ('content', content);
      data.set = ('file', files[0]);

      fetch('http://localhost:4000/create',{
        method: 'POST',
        body: data,
      });
  };



  return (
    <div>
        <form onSubmit={createPost}>
            <input 
              type="title" 
              placeholder={'Title'}
              value={title}
              onChange={(e)=>setTitle(e.target.value)}                
            />
            <input 
              type="summary" 
              placeholder={'Summary'} 
              value={summary}
              onChange={(e)=>setSummary(e.target.value)}
            />
            <input type="file" onChange={(e)=>setFiles(e.target.files)} />
            <ReactQuill
              value={content}
              onChange={newValue =>setContent(newValue)}
            />
            <button style={{marginTop:'5px'}}>Create Now</button>
        </form>

    </div>
  )
}

export default CreatePost