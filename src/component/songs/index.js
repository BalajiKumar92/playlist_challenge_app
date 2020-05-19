import React, { useEffect, useState, useMemo } from 'react';
import SongCard from '../shared/songCard';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import * as actionCreator from "../../store/action/libraryAction"
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: "240px",
        padding: '1%',
        marginTop: "4%",
        backgroundColor:'#E5E5E5'
    },
    formControl: {
        minWidth: 120,
    },
}));

export default function Songs() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(actionCreator.fetchLibrary())
    },[])

    const classes = useStyles()

    const [search, setSearch] = useState("");
    const [byParam, setByParam] = useState("");
    const [param, setParam] = useState("");
    const [music, setMusic] = useState([])

    const musiceLibrary = useSelector((state) => state.library.musiceLibrary);
    
    const handleSearchSong = (e) => {
        setParam("")
        setByParam("")
        setMusic([])
        setSearch(e.target.value)
    }
    const handleSearchByParam = (e) => {
        setByParam(e.target.value)
    }

    const handleChange = (event) => {
        setParam(event.target.value);
    };

    let songList = useMemo(() => {
        let m = music.length === 0 ? musiceLibrary : music
        return <SongList key={m} musiceLibrary={m} search={search} />
    }, [search, music, musiceLibrary])

    const handleSearchByParamSong = () => {
        let query = `query{
            getFilterSong(SearchParam:"${param}",SearchValue:"${byParam}"){
              album
              duration
              title
            }
            }`
        fetch('http://localhost:5000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query
            })
        })
            .then(r => r.json())
            .then(data => {
                setMusic(data.data.getFilterSong)
            });
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField id="outlined-search" label="Search by album name" type="search" variant="outlined" onChange={handleSearchSong} />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="search" label="Search" type="search song" variant="outlined" value={byParam} onChange={handleSearchByParam} style={{ marginRight: '10px' }} />
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-helper-label">param</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={param}
                            onChange={handleChange}
                        >
                            <MenuItem value="album">Album</MenuItem>
                            <MenuItem value="duration">Duration</MenuItem>
                            <MenuItem value="title">Title</MenuItem>
                            <MenuItem value="id">Id</MenuItem>
                            <MenuItem value="artist">Artist</MenuItem>
                        </Select>
                        <FormHelperText>select param to search for</FormHelperText>
                    </FormControl>
                    <IconButton aria-label="search" className={classes.margin} onClick={handleSearchByParamSong}>
                        <SearchIcon fontSize="large" />
                    </IconButton>
                </Grid>
            </Grid>
            {songList}
        </div>
    )
}

function SongList(props) {    
    return (
        <Grid container spacing={3} style={{ marginTop: "1%" }}>
            {props.musiceLibrary && props.musiceLibrary.filter(m => m.title.toLowerCase().includes(props.search.toLowerCase())).map((data, index) => {
                return <SongCard {...data} />
            })}
        </Grid>
    )
}