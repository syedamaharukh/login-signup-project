import React, { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';

const App = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div>
            {showLogin ? <Login setShowLogin={setShowLogin} /> : <Signup setShowLogin={setShowLogin} />}
        </div>
    );
};

export default App;
