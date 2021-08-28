import React from 'react';
import { ImageListItemBar, ImageListItem } from '@material-ui/core';

const VideoItem = (props) => {

    return (
        <div onClick={() => props.onVideoSelect(props.video)}>
            <ImageListItem key={props.video.snippet.title} >
                <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
                <ImageListItemBar
                title={props.video.snippet.title}
                />
            </ImageListItem>
        </div>
    );
}

export default VideoItem;
