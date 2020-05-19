import React, { useState, useEffect, useMemo } from 'react';
import _ from 'lodash'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ItemCard from './addsongs';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreator from "../../store/action/playlistAction"
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: "240px",
        padding: '1%',
        marginTop: "4%",
    },
    fortColor: {
        color: "#555555"
    }
}));

export default function CreatePlayList() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const musiceLibrary = useSelector((state) => state.library.musiceLibrary);
    const listItem = useSelector((state) => state.playList.list_item);
    const [pName, setPName] = useState('')
    const [openAlert, setOpenAlert] = useState(false)
    const [result, setResult] = useState('')
    const [severity, setSeverity] = useState('success')
    
    useEffect(() => {
        dispatch(actionCreator.clearAddedList())
    }, [])

    const handleAddToList = (list, isAddedToList) => {
        dispatch(!isAddedToList ? actionCreator.addToList({ value: list }) : actionCreator.removeFromList({ value: list })) 
        setOpenAlert(false)        
    }
    const handleChangeName = (e) => {
        setPName(e.target.value)
        setOpenAlert(false)
    }

    const handleSubmitList = () => {
        if (pName.length > 0 && listItem.length > 0) {
            let data = {
                name: pName,
                songs: _.map(listItem, 'id')
            }
            dispatch(actionCreator.createPlayList(data))
            dispatch(actionCreator.clearAddedList())
            setPName('')
            setResult('Created')
            setSeverity('success')
        } else {
            setResult('Please provide name and add songs')
            setSeverity('error')
        }
        setOpenAlert(true)
    }

    const listMusicOption = useMemo(() => {
        return <ListMusicOption musiceLibrary={musiceLibrary} handleAddToList={handleAddToList} />
    }, [musiceLibrary])

    return (
        <div className={classes.root}>
                    <Collapse in={openAlert}>
                        <Alert
                        severity={severity}
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="large"
                                    onClick={() => {
                                        setOpenAlert(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >
                            {result}
                        </Alert>
                    </Collapse>
            <Grid container>
                <TextField id="outlined-basic" label="Playlist Name" variant="outlined" value={pName} onChange={e => handleChangeName(e)} />
                <Button variant="contained" color="primary" onClick={handleSubmitList} style={{ marginLeft: '2%', height: '55px', textTransform: 'none' }}>
                    Create Playlist
                </Button>
                <Grid container>
                    
                </Grid>

                <Grid container >
                    {listMusicOption}
                </Grid>
            </Grid>

        </div>
    )
}

function ListMusicOption(props) {
    return (
        <Grid container style={{ padding: "5px" }} spacing={2}>
            {
                props.musiceLibrary.map(music => {
                    return <ItemCard {...music} handleAddToList={props.handleAddToList} />
                })
            }
        </Grid>
    )
}