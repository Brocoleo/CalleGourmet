import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons';
import { Link, useLocation} from 'react-router-dom';
import logo from '../../assets/img/icon.png';
import useStyles from './styles';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();


    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="logo" height="80px" className={classes.image}/>
                        La Calle Gourmet
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                    <div className={classes.button} >
                        <IconButton component={Link} to ="/carro" aria-label="Show cart items" color ="inherit">
                            <Badge badgeContent = {totalItems} color="secondary">
                                <ShoppingCart ></ShoppingCart>
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
