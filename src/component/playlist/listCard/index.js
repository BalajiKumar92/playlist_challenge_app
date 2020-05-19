import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import playlist from '../../../images/playlist.jpg'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 180,
    },
}));

export default function ListCard(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card className={classes.root}>
                <CardActionArea onClick={e=> props.handleFetchSongs(props.id)}>
                    <CardMedia
                        className={classes.media}
                        image={playlist}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.name}
                        </Typography>                        
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}