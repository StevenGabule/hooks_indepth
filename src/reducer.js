function postReducer(state, action) {
	switch(action.type) {
		case "ADD_POST": {
			const newPost = action.payload.post;
			return { posts: [newPost, ...state.posts]}
			break
		}
		case "DELETE_POST": {
			const id = action.payload.id;
			return { posts: state.posts.filter(post => post.id != id)}
			break
		}
		default: 
			return state;
			break
	}
}

export default postReducer;