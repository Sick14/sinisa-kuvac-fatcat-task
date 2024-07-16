import './styles.css';
import React from 'react';
import { Landing } from './components/landing/Landing';
import UserList from './components/users/UserList';

function App() {
    return (
        <main>
            <Landing />
            <UserList />
        </main>
    );
}

export default App;
