import { Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Grid className='bg-black text-center text-white mt-10' 
      container
      sx={{bgcolor: "black", color:"white", py: 3}}
      >
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h5'>Company</Typography>
            <Typography className='pb-1 w-[100%] cursor-pointer text-gray-400 hover:text-white'>Blog</Typography>
            <Typography className='pb-1 w-[100%] cursor-pointer text-gray-400 hover:text-white'>About</Typography>
            <Typography className='pb-1 w-[100%] cursor-pointer text-gray-400 hover:text-white'>Press</Typography>
            <Typography className='pb-1 w-[100%] cursor-pointer text-gray-400 hover:text-white'>Jobs</Typography>
            <Typography className='pb-1 w-[100%] cursor-pointer text-gray-400 hover:text-white'>Partners</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h5'>Solutions</Typography>
            <Typography className='pb-1 w-[100%] cursor-pointer text-gray-400 hover:text-white'>Marketing</Typography>
            <Typography className='pb-1 w-[100%] cursor-pointer text-gray-400 hover:text-white'>Analytics</Typography>
            <Typography className='pb-1 w-[100%] cursor-pointer text-gray-400 hover:text-white'>Commerce</Typography>
            <Typography className='pb-1 w-[100%] cursor-pointer text-gray-400 hover:text-white'>Insights</Typography>
            <Typography className='pb-1 w-[100%] cursor-pointer text-gray-400 hover:text-white'>Support</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h5'>Documentation</Typography>
            <Typography className='pb-1 w-[100%] cursor-pointer text-gray-400 hover:text-white'>Guides</Typography>
            <Typography className='pb-1 w-[100%] cursor-pointer text-gray-400 hover:text-white'>API Status</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h5'>Legal</Typography>
            <Typography className='pb-1 w-[100%] cursor-pointer text-gray-400 hover:text-white'>Claim</Typography>
            <Typography className='pb-1 w-[100%] cursor-pointer text-gray-400 hover:text-white'>Privacy</Typography>
            <Typography className='pb-1 w-[100%] cursor-pointer text-gray-400 hover:text-white'>Terms</Typography>
        </Grid>
        <Grid className='pt-20' item xs={12}>
            <Typography align='center'> 
                &copy; 2024 My Company. All rights reserved.
            </Typography>
            <Typography align='center'> 
                Made with love by me.
            </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
