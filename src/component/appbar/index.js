import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import MenuList from './menulist'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function HeaderAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" style={{ backgroundColor: "#111" }}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Playlist Challenge
                    </Typography>
                </Toolbar>
            </AppBar>
            <MenuList />
        </div>
    );
}
