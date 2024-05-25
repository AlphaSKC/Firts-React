import * as React from 'react';
import { Box, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const categories = [
    {
        name: "All",
        color: "black",
        backgroundColor: "white"
    },
    {
        name: "Sports",
        color: "white",
        backgroundColor: "transparent"
    },
    {
        name: "Strategy",
        color: "white",
        backgroundColor: "transparent"
    },
    {
        name: "Adventure",
        color: "white",
        backgroundColor: "transparent"
    },
    {
        name: "Action",
        color: "white",
        backgroundColor: "transparent"
    },
    {
        name: "MMO",
        color: "white",
        backgroundColor: "transparent"
    },
    {
        name: "RPG",
        color: "white",
        backgroundColor: "transparent"
    },
    {
        name: "Simulation",
        color: "white",
        backgroundColor: "transparent"
    },
    {
        name: "Puzzles",
        color: "white",
        backgroundColor: "transparent"
    }
];

export default function Categories() {
    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px',
            gap: '10px',
        }}>
            <ArrowBackIosNewIcon sx={{ color: '#a6a6a6', display: { xs: 'none', lg: 'block' } }} />
            {categories.map((category, index) => (
                <Button
                    key={index}
                    sx={{
                        backgroundColor: category.backgroundColor,
                        border: '2px solid #f2f2f2',
                        borderRadius: '20px',
                        padding: '5px 30px',
                        marginBottom: '10px',
                        display: { xs: 'none', lg: 'block' },
                        color: category.color,
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: category.backgroundColor === 'transparent' ? 'rgba(255, 255, 255, 0.1)' : category.backgroundColor,
                        }
                    }}
                >
                    {category.name}
                </Button>
            ))}
            <ArrowForwardIosIcon sx={{ color: 'white', display: { xs: 'none', lg: 'block' } }} />
        </Box>
    );
}
