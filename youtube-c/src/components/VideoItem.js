import React from 'react'
import {Link} from 'react-router-dom'
import {Card, CardMedia, CardContent, Typography, Paper} from '@mui/material'


const VideoItem = ({ video, id}) => {
    // console.log(video, id)
    // console.log(video.id.videoId)
    const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`
    // console.log(videoSrc)

  return (
    <>
    <Paper elevation={6} style={{height:'70%'}}>
      <iframe frameBorder='0' height="100%" width="100%" title="video player" src={videoSrc}/>
    </Paper>
    <Paper elevation={6} style={{padding:'15px'}} >
      <Typography variant='h4'> {video.snippet.tittle} </Typography>
      <Typography variant='subtitle1'> {video.snippet.channelTittle} </Typography>
      <Typography variant='subtitle2'> {video.snippet.description} </Typography>

    </Paper>

    </>
    
  )
}
export default VideoItem;
