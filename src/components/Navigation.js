import React from 'react';
import {Link, useHistory} from "react-router-dom"
import {authService} from 'fbase'

const Navigation = () => {
    const history = useHistory();
    const onLogOut = () => {
        authService.signOut();
        history.push("/");
    }
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">My Profile</Link></li>
                <li onClick={onLogOut}>logout</li>
            </ul>
        </nav>
    )
}
export default Navigation;