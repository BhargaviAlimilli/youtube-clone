import './App.css';
import {Box} from '@mui/material'
import {Route,Router,Link} from 'react-router-dom'
import Navbar from './components/NavBar';
import SearchBar from './components/SearchBar';


function App() {
  return (
      <Box sx={{ p: 1 }}>
        <h1>Youtube Clone</h1>
        <Navbar />
      </Box>
  )
}

export default App;
