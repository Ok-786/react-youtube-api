import React, { Component } from 'react';
import View from '../views/Home';
import youtube from '../apis/youtube';

class Home extends Component {
    state= { videos: [], selectedVideo: null };
    
    onTermSubmit =async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }
    
    render() {
        return (
            <View onFormSubmit = {this.onTermSubmit} videos={this.state.videos} onVideoSelect = {this.onVideoSelect} selectedVideo={this.state.selectedVideo}/>
        );
    }
}

export default Home;
