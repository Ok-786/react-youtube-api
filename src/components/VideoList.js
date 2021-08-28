import React, { Component } from 'react';
import View from '../views/VideoList';

class VideoList extends Component {
    render(props) {
        return (
            <View videos={this.props.videos} onVideoSelect= {this.props.onVideoSelect}/>
        );
    }
}

export default VideoList;
