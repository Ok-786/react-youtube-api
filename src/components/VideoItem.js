import React, { Component } from 'react';
import View from '../views/VideoItem';

class VideoItem extends Component {
    render(props) {
        return (
            <View video = {this.props.video} onVideoSelect={this.props.onVideoSelect}/>
        );
    }
}

export default VideoItem;
