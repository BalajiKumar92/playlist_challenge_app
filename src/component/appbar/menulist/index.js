import React from 'react'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';

const useStyles = makeStyles((theme) => ({
    sidenav: {
        height: "100%",
        width: "240px",
        position: "fixed",
        zIndex: "10000",
        top: "0",
        left: "0",
        backgroundColor: "#111",
        overflowX: "hidden",
        paddingTop: "20px",
    },
    menuItemStyle: {
        padding: "6px 8px 6px 16px",
        textDecoration: "none",
        fontSize: "25px",
        color: "#818181",
        display: "block",
        "&:hover": {
            color: "#f1f1f1; !important"
        }
    }

}));

export default function MenuList() {
    const classes = useStyles();

    const manuItem = [
        {
            menu: 'Music',
            router: '/',
            icon : MusicNoteIcon
        },
        {
            menu: 'Playlist',
            router: '/playlists',
            icon : PlayCircleFilledIcon
        },
        {
            menu: 'Create Playlist',
            router: '/create-playlist',
            icon: CreateNewFolderIcon
        }
    ]
    const history = useHistory()
    const handleMenuClick = (route) => {
        history.push(route)
    }

    return (
        <div className={classes.sidenav}>
            <List>
                {manuItem.map((mItem, index) => (
                    <>
                        <ListItem key={mItem+index} className={classes.menuItemStyle} button key={mItem.menu} onClick={e => handleMenuClick(mItem.router)}>
                            <Grid
                                container
                                direction="row"
                                justify="flex-start"
                                alignItems="center"
                            >
                                <mItem.icon />
                                <ListItemText primary={mItem.menu} style={{marginLeft:'10px'}} />
                            </Grid>
                        </ListItem>
                        <Divider />
                    </>
                ))}
            </List>
        </div>
    )
}