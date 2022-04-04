import axios from 'axios'

const baseURL= 'https://www.googleapis.com/youtube/v3'

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

export const searchData= async(url)=>{
    return await axios.get(`${baseURL}/${url}`,{
        params: {
            key: process.env.REACT_APP_API_KEY,
            maxResults: 5,
          },
    })
}
