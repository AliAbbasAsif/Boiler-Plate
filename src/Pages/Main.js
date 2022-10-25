import { Avatar, Typography } from '@mui/material'
import { Signout, database } from '../Config/firebasemethods'
import { onValue, ref, set, push } from "firebase/database";
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar';
function Main() {
    const location = useLocation();
    let data = location.state;
    console.log(data)
    const navigate = useNavigate();
    return (
        <div>
            <Navbar useravatar={location.state.avatar} usertitlename={location.state.username} />
        </div>
    )
}

export default Main
