import React, { useState } from "react";
import FunnyButtons from "./components/FunnyButtons"; // Ensure the path is correct
import "./App.css"; // Import global styles

function App() {
    const [response, setResponse] = useState(null); // State for handling response

    return (
        <div className="App">
            {/* BEFORE RESPONSE TEXT */}
            {!response ? <h1>Hi sweetheart</h1> : <h1>Nalla kutty</h1>}

            <FunnyButtons setResponse={setResponse} />

            {/* AFTER RESPONSE TEXT */}
            {response && <h2>{response}</h2>}
        </div>
    );
}

export default App;
