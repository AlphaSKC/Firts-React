import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import logo from '../../img/imgHeader.png';

function Hero() {
    return (
        <Box
            sx={{
                background: 'linear-gradient(to right, #13072E, #3F2182)',
                color: 'white',
                padding: '30px',
                margin: '20px',
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
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '10px',
                            gap: '10px',
                        }}>
                            <Box
                                sx={{
                                    backgroundColor: '#B3AAFF',
                                    padding: '5px 10px',
                                    borderRadius: '20px',
                                    width: 'fit-content',
                                    marginBottom: '10px',
                                }}
                            >
                                <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'black' }}>
                                    #Gaming
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    backgroundColor: '#B3AAFF',
                                    padding: '5px 10px',
                                    borderRadius: '20px',
                                    width: 'fit-content',
                                    marginBottom: '10px',
                                }}
                            >
                                <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'black' }}>
                                    #Awesome
                                </Typography>
                            </Box>
                        </Box>
                        
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            Título Principal
                        </Typography>
                    </Box>
                    <Typography variant="subtitle1" sx={{ wordWrap: 'break-word', display: { xs: 'none', sm: 'block'},}}>
                        Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl. Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist.
                        Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl. Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={8} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={logo} alt="Logo" style={{minWidth:'300px',maxWidth: '65%', objectFit: 'contain', borderRadius: '67% 33% 51% 49% / 58% 42% 58% 42%' }} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Hero;
