import React, { useContext, useState, useRef } from 'react';
import { PostContext } from '../AppMain4';

function CreatePost({user}) {
	const { dispatch } = useContext(PostContext);
	const [content, setContent] = useState('');
	const [image, setImage] = useState(null); 
	const imageInputRef = useRef(null);

	function handleSubmit(e) {
		e.preventDefault();
		const post = {content, image, user, id: Date.now()};
		dispatch({type: "ADD_POST", payload: {post}});
		setContent('');
		imageInputRef.current.value = '';
	}  

	return (
		<div>
			<h1>Create New Post</h1>
			<form onSubmit={handleSubmit}>
				<input 
					type="text" 
					placeholder="Add Post Content" 
					onChange={e => setContent(e.target.value)} 
					value={content}
					/>

				<input 
					ref={imageInputRef} 
					type="file" 
					onChange={e => setImage(e.target.files[0])} />
				<button type="submit">Post</button>
			</form>
		</div>
	)
}

export default CreatePost;
