import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const hastags = [
    {
        name: '#Gaming',
    },
    {
        name: '#PixelPalace',
    },
    {
        name: '#Awesome',
    }
]

export default function Hero() {
    return (
        <Box
            sx={{
                background: 'linear-gradient(to right, #13072E, #3F2182)',
                color: 'white',
                padding: '30px',
                margin: '30px',
                borderRadius: '20px',
                width: '85%',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
        >
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '10px',
                    }}>
                        <Box sx={{
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '10px',
                            gap: '10px',
                        }}>
                            {hastags.map((hashtag, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        backgroundColor: '#B3AAFF',
                                        padding: '5px 25px',
                                        borderRadius: '20px',
                                        width: 'fit-content',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'black' }}>
                                        {hashtag.name}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                        
                        <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize:'40px',background:`url(${require('../../assets/FondoLetra.jpg')})`,backgroundSize:'cover', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
                            ¡Bienvenidos a Pixel Palace!
                        </Typography>
                    </Box>
                    <Typography variant="subtitle1" sx={{ display: { xs: 'none', sm: 'block'}}}>
                    Sumérgete en el emocionante mundo de los videojuegos mientras exploras nuestra plataforma dedicada a la exposición de los últimos lanzamientos, clásicos atemporales y todo lo relacionado con la industria del gaming.
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight:'bold',color:'#B3AAFF',display: { xs: 'none', sm: 'block'}}}>
                    ¡Únete a nosotros y déjate llevar por la magia de Pixel Palace!
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={8} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src='./img/imgHeader.png' alt="Logo" style={{minWidth:'300px',maxWidth: '65%', objectFit: 'contain', borderRadius: '67% 33% 51% 49% / 58% 42% 58% 42%' }} />
                </Grid>
            </Grid>
        </Box>
    );
}
