import React, { useState, useEffect } from 'react';

const OutputPage = () => {
    // State to hold the retrieved code
    const [storedCode, setStoredCode] = useState('');

    useEffect(() => {
        // Retrieve code from local storage when component mounts
        const storedCodeString = localStorage.getItem('myCode');
        
        if (storedCodeString) {
            // Parse the stored JSON string back to code (string)
            const parsedCode = JSON.parse(storedCodeString);
            console.log('Retrieved code from local storage:', parsedCode);
            
            // Update state with the retrieved code
            setStoredCode(parsedCode);
        } else {
            console.log('No code found in local storage.');
        }
    }, []); // Empty dependency array to run the effect only once on mount

    return (
        <div className="output" style={{ backgroundColor: 'white', padding: '20px' }}>
            {/* Display the retrieved code as HTML */}
            <div dangerouslySetInnerHTML={{ __html: storedCode }} />
        </div>
    );
};

export default OutputPage;
