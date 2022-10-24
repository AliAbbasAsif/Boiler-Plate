import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from "react-router-dom";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Main from '../Pages/Main';
import Account from '../Pages/Screens/Account';
import Dashboard from '../Pages/Screens/Dashboard';
import Profile from '../Pages/Screens/Profile';
import SignUp from '../Pages/SignUp'

function AppRouter() {
    return (
        <Router>
            <div>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/account' element={<Account />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/main' element={<Main />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            </div>
        </Router>

    )
}

export default AppRouter