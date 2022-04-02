
import axios from 'axios'

const data= async()=>{
    return await axios.create({
        baseURL:'https://www.googleapis.com/youtube/v3',
        params:{
            part:'snippet',
            maxResults:7,
            key: process.env.REACT_APP_API_KEY
        }
    })
}