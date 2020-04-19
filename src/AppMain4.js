import React, {
	useEffect,
	useState,
	useContext,
	useReducer,
	createContext
} from 'react';
import Login from './components/Login'
import Header from './components/Header'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import postReducer from './reducer';

/*const _count = new Set();*/
export const userContext = createContext();
export const PostContext = createContext({
	posts: []
});

function App() {
	const initialPostState = useContext(PostContext);
	const [state, dispatch] = useReducer(postReducer, initialPostState);
	const [user, setUser] = useState('John Paul L. Gabule');

	useEffect(() => {
		document.title = user ? `${user} feed` : 'Login Page';
	}, [user]);
 
	if (!user) {
		return <Login setUser={setUser} />
	}

	return (
		<PostContext.Provider value={{ state, dispatch }}>
			<userContext.Provider value={user}>
				<Header user={user} setUser={setUser} />
				<CreatePost user={user} />
				<PostList posts={state.posts} />
			</userContext.Provider>
		</PostContext.Provider>

	)
}

export default App;
