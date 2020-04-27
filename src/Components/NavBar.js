import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './NavBar.css';

export class NavBar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar className='nav-container'>
                    <Button color='inherit' component={Link} to='/'>Home</Button>
                    <Button color='inherit' component={Link} to='/signup' >Signup</Button>
                    <Button color='inherit' component={Link} to='/login' >Login</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default NavBar
