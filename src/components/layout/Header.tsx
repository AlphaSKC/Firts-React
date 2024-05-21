import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../../img/imgHeader.png';

function Header() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(to right, #13072E, #3F2182)',
                color: 'white',
                height: 'fit-content',
                padding: '30px',
                margin: '20px', 
                borderRadius: '20px', 
                width: '85%',
                marginLeft: 'auto', 
                marginRight: 'auto',
            }}
        >   
            <Box sx={{ flex: 1, maxWidth:'40%', padding: '0 20px'}}>
                <Box sx={{ backgroundColor: '#B3AAFF', padding: '5px 10px', borderRadius: '20px', width: 'fit-content', margin: '0 auto', marginBottom:'10px'}}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color:'black'}}>
                        #Gaming
                    </Typography>
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                    Título Principal
                </Typography>
                <Typography variant="subtitle1" sx={{ wordWrap: 'break-word' }}>
                    Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl. Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist.
                    Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl. Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist.
                </Typography>
            </Box>
            <Box sx={{ flex: 0.5, display: 'flex', justifyContent:'center'}}>
                <img src={logo} alt="Logo" style={{ maxWidth: '65%', objectFit: 'contain' }} />
            </Box>
        </Box>
    );
}
export default Header;
