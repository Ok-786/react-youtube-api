import React from 'react';
import SearchBar from '../components/SearchBar';
import {Paper, Grid} from '@material-ui/core'
import useStyle from '../css/style';
import VideoList from './VideoList';
import VideoDetail from '../components/VideoDetail';

const Home = (props) => {
    

    const classes = useStyle();
    
    return (
        <Grid container >
            <Paper elevation={10} className={classes.topContainer}>
                <Grid item className={classes.searchBarContainer} >
                    <Paper elevation={1} style={{width:'100%'}}>
                        <SearchBar onFormSubmit = {props.onFormSubmit}/>
                    </Paper>
                </Grid>
                <Grid item >
                    <Paper className={classes.belowContainer}>
                        <Paper elevation={1} className={classes.videoDetailContainer}>
                            <VideoDetail selectedVideo={props.selectedVideo}/>
                        </Paper>
                        <Paper className={classes.videoHolder}>
                            <VideoList videos={props.videos} onVideoSelect={props.onVideoSelect}/>
                        </Paper>
                    </Paper>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default Home;
