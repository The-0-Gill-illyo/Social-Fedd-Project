import React, { useState } from 'react';

const CreatePost = (props) => {

    const [name, setName] = useState("");
    const [post, setPost] = useState("");

    function submitPost(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post,
        };
        console.log(newPost)
        props.addedNewPost(newPost)
    }
    return ( 
        <form onSubmit={submitPost}>
            <label>Name</label>
            <input type="string" value={name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type="string" value={post} onChange={(event) => setPost(event.target.value)} />
            <button type="post">Create</button>
        </form>
     );
}
 
export default CreatePost;