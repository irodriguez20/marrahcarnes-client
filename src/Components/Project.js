import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
// import CardMedia from '@material-ui/core/CardMedia';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        display: 'flex',
        marginBottom: 20,
    },
    content: {
        padding: 15,
    }
}

class Project extends Component {
    render() {
        const { classes, project: { projectName, projectDescription, projectId } } = this.props;
        return (
            <Card color='primary dark' className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography variant='h6' color='textPrimary' component={Link} to={`/project/${projectId}`} >{projectName}</Typography>
                    <Typography variant='body1'>{projectDescription}</Typography>
                </CardContent>
                <CardActions>
                    <Button variant='contained' size='small' color='secondary'>Delete</Button>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(Project);
