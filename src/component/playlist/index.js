import React, { useEffect, useState } from 'react';
import _ from 'lodash'
import ListCard from './listCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import * as playActionCreator from "../../store/action/playlistAction"
import * as libActionCreator from "../../store/action/libraryAction"

import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: "240px",
        padding: '1%',
        marginTop: "4%",
    },
}));

export default function Playlist() {
    // const [playListSong , SetPlayListSong] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(playActionCreator.fetchPlayList())
        dispatch(libActionCreator.fetchLibrary())
    }, []);
    const classes = useStyles()
    const history = useHistory()

    const playlist = useSelector((state) => state.playList.playlist);
    // const musiceLibrary = useSelector((state) => state.library.musiceLibrary);
    const handleFetchSongs = (playListId) => {
        history.push(`/playlist/${playListId}/songs`)
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {playlist && playlist.map((data) => {
                    return <ListCard key={data} {...data} handleFetchSongs={handleFetchSongs} />
                })}
            </Grid>
        </div>
    )
}