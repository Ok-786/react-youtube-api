import React from 'react';
import VideoItem from '../components/VideoItem';
import { ImageList } from '@material-ui/core';
import useStyle from '../css/style';

const VideoList = (props) => {
    const classes = useStyle();
    
    const renderedList = props.videos.map((video) => {
        return <VideoItem video= {video} key={video.snippet.thumbnails.medium.url} onVideoSelect={props.onVideoSelect}/>;
    })
    
    return (
        <div className={classes.videoRoot}>
            <h3 style={{background:'grey'}}>Recommended Videos</h3>
            <ImageList cols={1} rowHeight={180} className={classes.imageList} >
                {renderedList } 
            </ImageList>
        </div> 
    );
}

export default VideoList;
 