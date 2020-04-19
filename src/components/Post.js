import React, {useContext} from 'react';
import { userContext, PostContext } from '../AppMain4';


function Post({ image, user, content, id }) {
	const currentuser = useContext(userContext);
	const {dispatch} = useContext(PostContext);
	const isCurrentUser = currentuser === user;

	function handleDelete() {
		dispatch({ type: "DELETE_POST", payload: { id }})
	}

	return (
		<>
			{image && (
				<img
					style={{ height: 100, width: 200, objectFit: 'cover' }}
					src={URL.createObjectURL(image)}
					alt="Post cover" />
			)}
			<p>{content}</p>
			<div style={{ color: isCurrentUser  && 'green' }}>{user}</div>

			<div>{isCurrentUser && <button onClick={handleDelete}>Delete</button>}	</div>
		</>
	);
}
export default Post;