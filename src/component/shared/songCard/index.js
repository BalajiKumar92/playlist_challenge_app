import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import iTunes from '../../../images/cSong.jpg'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor:'black',
        color:'white'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 150,
    },
}));

export default function SongCard(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={iTunes}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <Typography variant="body2" color="textSecondary" component="p" style={{color:'wheat'}}>
                                {props.album}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" style={{color:'wheat'}}>
                               Seconds : {props.duration}
                            </Typography>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}