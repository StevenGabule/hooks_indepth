import React, { useEffect, useState } from 'react';

function AppMain() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    function handleMouseMove(event) {
        setMousePosition({x: event.pageX, y: event.pageY})
    }

    return (
        <div> 
            <p>X: {mousePosition.x}</p>
            <p>Y: {mousePosition.y}</p>
        </div>
    );
}

export default AppMain;
