import React , {useEffect,useState} from 'react';
import _ from 'lodash'
// import ListCard from './listCard';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import SongCard from './../../shared/songCard'


const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: "240px",
        padding: '1%',
        marginTop: "4%",
    },
}));

export default function SongList() {
    const classes = useStyles();
    const [songs, setSongs] = useState([]);
    const {id} = useParams();
    const playlist = useSelector((state) => state.playList.playlist);
    const musiceLibrary = useSelector((state) => state.library.musiceLibrary);

    useEffect(()=>{
  let songArr = _.find(playlist, pList=>{
    return pList.id ===JSON.parse(id)})
  setSongs(_.filter(musiceLibrary, musice=> { return _.includes(songArr.songs, musice.id)}))
    },[])

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
              {songs.length>0 && songs.map((data, index)=>{
                    return <SongCard key={index} {...data} />
              }) } 
            </Grid>
        </div>
    )
}