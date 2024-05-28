import * as React from 'react';
import { Box, Button, IconButton } from '@mui/material';
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
    const [startIndex, setStartIndex] = React.useState(0);
    const visibleCount = 4; // Número de botones visibles

    const handlePrev = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + 1, categories.length - visibleCount));
    };

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
            <IconButton
                onClick={handlePrev}
                disabled={startIndex === 0}
                sx={{ color: 'white' }}
            >
                <ArrowBackIosNewIcon />
            </IconButton>
            {categories.slice(startIndex, startIndex + visibleCount).map((category, index) => (
                <Button
                    key={index}
                    sx={{
                        backgroundColor: category.backgroundColor,
                        border: '2px solid #f2f2f2',
                        borderRadius: '20px',
                        padding: '5px 30px',
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
            <IconButton
                onClick={handleNext}
                disabled={startIndex === categories.length - visibleCount}
                sx={{ color: 'white' }}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </Box>
    );
}
