import React from 'react'
import _ from 'lodash'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    media: {
        height: 140,
    },
    margin: {
        textTransform: "none"
    }
}));

export default function ItemCard(props) {
    const classes = useStyles();
    const listItem = useSelector((state) => state.playList.list_item);
    const isAddedToList = _.some(listItem, { 'id': props.id });
    const handleCardClick=(p)=>{
        alert(p.productName)
    }
    return (
        <Grid item lg={3} md={4} xs={12}>
            <Card className={classes.root}>
                <CardActionArea>                   
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.album}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.duration}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Fab
                        variant="extended"
                        size="small"
                        color={isAddedToList ? "secondary" : "primary"}
                        aria-label="add cart"
                        className={classes.margin}
                        onClick={e => props.handleAddToList(props, isAddedToList)}
                    >
                       {isAddedToList ? <RemoveCircleIcon className={classes.extendedIcon} /> : <AddCircleIcon className={classes.extendedIcon} /> } 
                        {isAddedToList ? 'Remove from list' : 'Add to list'}
                    </Fab>
                </CardActions>
            </Card>
        </Grid>
    )
}

