import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../../img/icon.png'

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElPopulares, setAnchorElPopulares] = React.useState<null | HTMLElement>(null);
  const [anchorElNovedades, setAnchorElNovedades] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenPopularesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElPopulares(event.currentTarget);
  };

  const handleOpenNovedadesMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNovedades(event.currentTarget);
  };

  const handleClosePopularesMenu = () => {
    setAnchorElPopulares(null);
  };

  const handleCloseNovedadesMenu = () => {
    setAnchorElNovedades(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#11113A' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Pixel Palace
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {['Más populares', 'Novedades', 'Ofertas'].map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">
                    {page}
                    {(page === 'Más populares' || page === 'Novedades') && (
                      <KeyboardArrowDownIcon sx={{ ml: 1 }} />
                    )}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Pixel
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Button
              sx={{
                my: 2,
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  color: '#B3AAFF',
                },
              }}
              onClick={handleOpenPopularesMenu}
            >
              Más populares
              <KeyboardArrowDownIcon />
            </Button>
            <Menu
              id="menu-populares"
              anchorEl={anchorElPopulares}
              open={Boolean(anchorElPopulares)}
              onClose={handleClosePopularesMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleClosePopularesMenu}>Subopción 1</MenuItem>
              <MenuItem onClick={handleClosePopularesMenu}>Subopción 2</MenuItem>
            </Menu>

            <Button
              sx={{
                my: 2,
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  color: '#B3AAFF',
                },
              }}
              onClick={handleOpenNovedadesMenu}
            >
              Novedades
              <KeyboardArrowDownIcon />
            </Button>
            <Menu
              id="menu-novedades"
              anchorEl={anchorElNovedades}
              open={Boolean(anchorElNovedades)}
              onClose={handleCloseNovedadesMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <MenuItem onClick={handleCloseNovedadesMenu}>Subopción 1</MenuItem>
              <MenuItem onClick={handleCloseNovedadesMenu}>Subopción 2</MenuItem>
            </Menu>

            <Button
              sx={{
                my: 2,
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  color: '#B3AAFF',
                },
              }}
            >
              Ofertas
            </Button>
          </Box>
          <Button
            sx={{
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '20px',
              padding: '8px 16px', 
              '&:hover': {
                backgroundColor: '#B3AAFF', 
              },
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Login <ArrowForwardIcon sx={{ ml: 1 }} />
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
