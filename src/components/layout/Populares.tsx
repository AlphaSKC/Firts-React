import * as React from 'react';
import { Box, CardActionArea, Grid, Typography, CardMedia, Card, CardContent } from '@mui/material';

export default function Populares() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            margin: '20px',
            padding: '30px',
            marginLeft: 'auto',
            marginRight: 'auto',}}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize:'30px',background:`url(${require('../../assets/Fondo.jpg')})`,backgroundSize:'cover', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', }}>
                Más populares
            </Typography>
            <Grid container sx={{margin:'20px 0'}}>
                <Grid item>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
