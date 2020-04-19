import React, { useEffect, useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const [developer, setDeveloper] = useState({
        name: "",
        language: "python",
        yearsExperience: 0,
        isEmployed: false
    });

    // return callback action
    // 
    useEffect(() => {
        /*document.title = `You clicked ${count} times`*/
        document.title = developer.name;
        /*Dependencies argument*/
    }, [developer.name]);

    const handleInputChange = (e) => {
        console.log(e.target.value);
    }

    function handleToggleEmployee() {
        setDeveloper(prevState => ({
            ...prevState,
            isEmployed: !prevState.isEmployed
        }))
    }

    function handleChangeName(e) {
        setDeveloper({
            ...developer,
            name: e.target.value
        });
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>React Hooks Review</h1>
                <button onClick={() => setCount(count + 1)}>Click</button>
                <p>You clicked {count} times</p>
            </header>
            <p><input type="text" onChange={handleInputChange} /></p>
            <p>Developer Name: <input type="text" onChange={handleChangeName} placeholder="Enter name" /></p>
            <p>
                <button onClick={handleToggleEmployee}>Toggle Employment Status</button>
                <button onClick={() => setDeveloper({ language: "Javascript", yearsExperience: 0 })}>Change Language</button>
                <input
                    type="number"
                    onChange={event => setDeveloper({ ...developer, yearsExperience: event.target.value })} />
            </p>
            <p>{developer.language}</p>
            <p>{developer.yearsExperience}</p>
            <p>{developer.isEmployed ? "Employed" : "Noped!"}</p>
        </div>
    );
}


export default App;
