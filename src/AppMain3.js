import React, { useEffect, useState } from 'react';

const baseUrl = "https://api.github.com/users/";

function App() {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("stevengabule");
    const clearInput = React.useRef();

    useEffect(() => {
        getUser();
    }, []);

    async function getUser() {
        const response = await fetch(`${baseUrl}${username}`);
        const data = await response.json();
        setUser(data)
    }

    function handleCleanInput() {
        clearInput.current.value = '';
        clearInput.current.focus();
    }

    return (
    <div>
        <input 
            type="text" 
            placeholder="Search user"
            ref={clearInput} 
            onChange={
                e => setUsername(e.target.value)
            } />
        <button onClick={getUser}>Search</button>
        <button onClick={handleCleanInput}>Clear</button>
        {user ? (
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                    <img src={user.avatar_url} alt="" style={{height: 50}} />
                </div>
        ) : (
            <p>Loading</p>
        )}
    </div>);
}

export default App;
