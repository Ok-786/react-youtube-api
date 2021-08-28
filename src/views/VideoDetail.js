import React from 'react';
import { CardContent, Typography, CardActionArea, Button, Card, CardActions } from '@material-ui/core';
import useStyle from '../css/style';

const VideoDetail =(props) => {
    const classes = useStyle();
    
    if(!props.selectedVideo){
        return <div>Loading....</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;

    return (
        <div>
            <Card className={classes.videoDetailRoot}>
                <CardActionArea>
                    <iframe
                        src={videoSrc}
                        title={videoSrc}
                        width="100%"
                        height='400vh'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.selectedVideo.snippet.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.selectedVideo.snippet.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default VideoDetail;
