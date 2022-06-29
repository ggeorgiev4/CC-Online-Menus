import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BackendService } from './helpers/Backend-Service';

function App() {
    const backendService = new BackendService();
    const [menu, setMenu] = useState<Array<any>>([]);
    useEffect(() => {
        getMenu();
        console.log(require('../src/helpers/db.json'));
    }, []);

    const getMenu = async () => {
        await backendService.call('/restaurants', 'GET').then((data) => {
            setMenu(data);
        });
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
