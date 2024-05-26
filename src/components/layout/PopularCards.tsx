import * as React from 'react';
import { Box, CardActionArea, Grid, Typography, CardMedia, Card, CardContent, Divider } from '@mui/material';
import Categories from './Categories';

const cardData = [
    {
        image: "./img/Cards/EA FC24.jpg",
        alt: "FC24",
        title: "EA FC24",
        description: "Se mueve, se ve y se juega como el futbol EA SPORTS FC™ 24 te acerca más al futbol que nunca gracias a las tres tecnologías que potencian el realismo del juego en cada partido."
    },
    {
        image: "./img/Cards/Warzone.jpg",
        alt: "Warzone",
        title: "Warzone",
        description: "Aventúrate, equípate, saquea para obtener recompensas ¡y combate por ser el último pelotón en pie!"
    },
    {
        image: "./img/Cards/Minecraft.jpg",
        alt: "Minecraft",
        title: "Minecraft",
        description: "¡Explora tus propios mundos únicos, sobrevive a la noche y crea todo lo que puedas imaginar!"
    },
    {
        image: "./img/Cards/Rocket League.jpg",
        alt: "Rocket League",
        title: "Rocket League",
        description: "¡Personaliza tu coche, entra a la cancha y compite en uno de los juegos deportivos más aclamados por la crítica!"
    }
];

export default function PopularCards() {
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
                Más populares
            </Typography>
            <Divider sx={{ width: '100%', height: '2px', margin: '15px 0', background: `url(${require('../../assets/Fondo.jpg')})`, backgroundSize: 'cover' }} />
            <Categories />
            <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
                {cardData.map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345, height: '350px', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'transparent', border: '2px solid', borderImage: 'linear-gradient(to right, #cc66ff, #00ffff) 1' }}>
                            <CardActionArea sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', height: '100%', overflow: 'hidden' }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={card.image}
                                    alt={card.alt}
                                    sx={{ width: '100%', objectFit: 'cover' }}
                                />
                                <Divider sx={{ width: '100%', height: '2px', background: `url(${require('../../assets/Fondo.jpg')})`, backgroundSize: 'cover' }} />
                                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxHeight: '100px', overflow: 'hidden', }}>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'white' }}>
                                        {card.title}
                                    </Typography>
                                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                                        <Typography variant="body2" color="white">
                                            {card.description}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}