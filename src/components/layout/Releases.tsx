import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Button, Divider, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

const slides = [
    {
        image: './img/Slides/PacMan.jpg',
        alt: 'PAC-MAN Mega Tunnel Battle: Chomp Champs ',
        title: "PAC-MAN Mega Tunnel Battle: Chomp Champs ",
        date: '20-05-2024'
    },
    {
        image: './img/Slides/Frostpunk2.jpg',
        alt: 'Frostpunk 2',
        title: "Frostpunk 2",
        date: '20-05-2024'
    },
    {
        image: './img/Slides/PaperMario.jpg',
        alt: 'Paper Mario: La Puerta Milenaria',
        title: "Paper Mario: La Puerta Milenaria ",
        date: '20-05-2024'
    },
    {
        image: './img/Slides/VRising.jpg',
        alt: 'V Rising',
        title: "V Rising",
        date: '20-05-2024'
    },
    {
        image: './img/Slides/PrincessPeach.jpg',
        alt: 'Princess Peach Showtime',
        title: "Princess Peach Showtime",
        date: '20-05-2024'
    },
    {
        image: './img/Slides/StarWars.jpg',
        alt: 'Star Wars Outlaws',
        title: "Star Wars Outlaws",
        date: '20-05-2024'
    },

];

export default function Releases() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '25px',
            marginLeft: 'auto',
            marginRight: 'auto',
        }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '30px', background: `url(${require('../../assets/FondoLetra.jpg')})`, backgroundSize: 'cover', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Próximos lanzamientos
            </Typography>
            <Divider sx={{ width: '100%', height: '2px', margin: '15px 0', background: `url(${require('../../assets/Fondo.jpg')})`, backgroundSize: 'cover' }} />
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    clickable: true,
                    enabled: true,
                    dynamicBullets: true,
                    bulletClass: 'swiper-pagination-bullet',
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                modules={[Pagination, EffectCoverflow, Autoplay]}
                className='mySwiper'
                style={{
                    width: '70%',
                    paddingTop: '10px',
                    paddingBottom: '50px',
                    height: '400px',
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Box sx={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '20px',
                            height: '400px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                        }}>
                            <Box sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                color: 'white',
                                padding: '20px',
                                gap: '10px',
                            }}>
                                {/* Por si está más chido con la imagen de fondo */}
                                {/* , background: `url(${require('../../assets/FondoLetra.jpg')})`, backgroundSize: 'cover', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' */}
                                <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: { xs: '30px', sm: '30px', md: '40px', lg: '50px' } }}>
                                    {slide.title}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                }}>
                                    <CalendarMonthIcon sx={{
                                        color: '#B3AAFF',
                                        fontSize: '50px',
                                    }} />
                                    <Typography variant="subtitle1" sx={{ fontSize: '25px', color: '#B3AAFF', fontWeight: 'bold' }}>
                                        {slide.date}
                                    </Typography>
                                </Box>
                                <Button variant="contained" sx={{
                                    color: 'black',
                                    background: 'white',
                                    borderRadius: '20px',
                                    padding: '10px 20px',
                                    fontWeight: 'bold',
                                    ":hover": {
                                        background: '#B3AAFF',
                                    }
                                }}>
                                    Reservar
                                </Button>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}
