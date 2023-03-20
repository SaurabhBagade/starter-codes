import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom"
export default function NotFound() {
    const navigate = useNavigate()
    
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        },2000)
    },[])
    

    return (
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: '#f44336',
        }}
        >
        <Typography variant="h1" style={{ color: 'white' }}>
            404
        </Typography>
        <Typography variant="h6" style={{ color: 'white' }}>
            The page you’re looking for doesn’t exist.
        </Typography>
        <Typography variant="h6" style={{ color: 'white' }}>
            Redirecting you to home.
        </Typography>
        </Box>
    );
}