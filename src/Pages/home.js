import React, { Component } from 'react';
import axios from 'axios';
import { GridList, GridListTile, Grid } from '@material-ui/core'

import Project from '../Components/Project';

export class home extends Component {
    state = {
        projects: null
    }
    componentDidMount() {
        axios.get('/projects')
            .then(res => {
                console.log(res.data);
                this.setState({
                    projects: res.data
                })
            })
            .catch(err => console.log(err));
    }
    render() {
        let recentProjectsMarkup = this.state.projects ? (
            this.state.projects.map((project) => <Project project={project} key={project.projectId} />)
        ) : <p>Loading...</p>
        return (
            <Grid container spacing={8}>
                <Grid item sm={6} xs={12}>
                    <p>Projects</p>
                    {recentProjectsMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>Profile...</p>
                </Grid>
            </Grid >
        )
    }
}

export default home
