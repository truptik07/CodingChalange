import React from 'react'
import './App.css'
import { Box, Typography } from '@mui/material'
import Navbar from './components/Navbar'
import MyCard from './components/MyCard'

export default function App() {
  return (
    <Box component='main'>
      <Navbar />

      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '20px', bgcolor: '#2a2a2a', color: '#fff' }}>
        <Typography sx={{ borderBottom: '1.5px solid transparent', cursor: 'pointer', ':hover': { borderBottom: '1.5px solid #fff' } }}>Not a BT customer yet?</Typography>
      </Box>

      <Box className='container'>
        <Box className='content' sx={{ width: '50%' }}>
          <Typography>Welcome to BT</Typography>
          <Typography variant='h2' sx={{ marginTop: '10px', marginBottom: '40px' }}>You can save on your broadband package when you upgrade</Typography>
          <Typography variant='h6'>As an existing BT customer you could get exclusive offers on our fastest broadband ever and TV. Or you can pay less for your current package.</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
          <button>View your personalised offer</button>
          <button>All about our broadband</button>
        </Box>
        <MyCard />
      </Box>
    </Box>
  )
}
