import React, { Component } from 'react';
import View from '../views/VideoDetail';

class VideoDetail extends Component {
    render(props) {
        return (
            <View selectedVideo = {this.props.selectedVideo}/>
        );
    }
}

export default VideoDetail;
