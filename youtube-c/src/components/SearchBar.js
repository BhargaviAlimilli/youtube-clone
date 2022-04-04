import {searchData} from '../actions/index'
import {useState} from 'react'
import VideoItem from './VideoItem';
import {Grid, Paper, IconButton} from '@mui/material'
import {SearchOffOutlined} from '@mui/icons-material'

function SearchBar(){
  const [searchTerm, setSearchTerm] = useState('');
  const [video, setVideo] = useState([]);


  const onhandleSubmit = async (e) => {
    e.preventDefault();
    let res= await searchData(`search?part=snippet&q=${searchTerm}`)
    console.log(res.data.items)
    if (res.data) {
      setVideo(res.data.items);
      }
  };
  const onHandleChange= (e)=>{
    e.preventDefault();
    // console.log(searchTerm)
    if (e.target.value !== '') {
      setSearchTerm(e.target.value);
      }
  }

  return(
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: 5,
      }}
    >
      <input className='search-bar' placeholder='Search...'
             value={searchTerm}
             onChange={onHandleChange} />
      <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
        <SearchOffOutlined />
      </IconButton>
              
      {video.length !== 0 &&
        video.map((vv) => (
          <VideoItem
             key={vv.id.videoId}
             video={vv}
             id={vv.id.videoId}
           />))}
    </Paper>
  )
}

export default SearchBar

//return(
//     <>
//       {/* <Grid justifyContent='center' container spacing={16}> */}
//         <form onSubmit={onhandleSubmit}>
//           <input className='search-bar' placeholder='Search...'
//             value={searchTerm}
//             onChange={onHandleChange} />
//         </form>

//         <div>
//           {/* <VideoItem video={video} /> */}
//           {video.length !== 0 &&
//         video.map((vv) => (
//           <VideoItem
//             key={vv.id.videoId}
//             video={vv}
//             id={vv.id.videoId}
//           />
//         ))}
          
//         </div>


//       {/* </Grid> */}
//     </>
//   )
// }