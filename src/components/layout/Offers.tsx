import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import * as React from 'react';

const offersData = [
    {
        image: "./img/Offers/Spiderman2.jpg",
        alt: "Spider Man 2",
        title: "Spider Man 2",
        price: '$1,875',
        priceOffer: '$1,181',
        descount: '37%',
        expire: '16:18:34'
    },
    {
        image: "./img/Offers/SuperSmash.jpg",
        alt: "Super Smash Bros Ultimate",
        title: "Super Smash Bros Ultimate",
        price: '$999',
        priceOffer: '$899',
        descount: '10%',
        expire: '18:34:22'
    },
    {
        image: "./img/Offers/MK.jpg",
        alt: "Mortal Kombat 11",
        title: "Mortal Kombat 11",
        price: '$1,040',
        priceOffer: '$842',
        descount: '19%',
        expire: '21:12:45'
    },
    {
        image: "./img/Offers/Cuphead.jpg",
        alt: "Cupehead",
        title: "Cuphead",
        price: '$699',
        priceOffer: '$496',
        descount: '29%',
        expire: '23:59:59'
    }
];

export default function Offers() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0 25px 25px 25px',
            marginLeft: 'auto',
            marginRight: 'auto',
        }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '30px', background: `url(${require('../../assets/FondoLetra.jpg')})`, backgroundSize: 'cover', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Ofertas
            </Typography>
            <Divider sx={{ width: '100%', height: '2px', margin: '15px 0', background: `url(${require('../../assets/Fondo.jpg')})`, backgroundSize: 'cover' }} />
            <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
                {offersData.map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ maxWidth: 345, height: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', background: 'transparent', border: '2px solid', borderImage: 'linear-gradient(to right, #cc66ff, #00ffff) 1' }}>
                            <CardMedia
                                component="img"
                                height="250"
                                image={card.image}
                                alt={card.alt}
                                sx={{ width: '100%', objectFit: 'cover' }}
                            />
                            <Divider sx={{ width: '100%', height: '2px', background: `url(${require('../../assets/Fondo.jpg')})`, backgroundSize: 'cover' }} />
                            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxHeight: '250px', overflow: 'hidden', alignItems: 'center' }}>
                                <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#B3AAFF', fontSize: '25px' }}>
                                    {card.title}
                                </Typography>
                                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '10px', justifyContent: 'center' }}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: '#0099ff',
                                        color: 'white',
                                        padding: '5px 10px',
                                        borderRadius: '5px',
                                        fontSize: '15px',
                                    }}>
                                        -{card.descount}
                                    </Box>
                                    <Typography variant="body2" color="gray" sx={{
                                        textDecoration: 'line-through',
                                        color: 'gray',
                                        fontSize: '20px',
                                    }}>
                                        {card.price}
                                    </Typography>
                                    <Typography variant="body2" color="white" sx={{ fontSize: '20px' }}>
                                        {card.priceOffer}
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '5px',
                                    marginTop: '10px',
                                }}>
                                    <Typography variant="body2" color="gray" sx={{ fontSize: '20px' }}>
                                        Vence en: <span style={{ color: '#B3AAFF' }}>{card.expire}</span>
                                    </Typography>
                                    <AccessTimeIcon sx={{ color: '#B3AAFF' }} />
                                </Box>
                                <Button variant="contained" sx={{
                                    color: 'black',
                                    background: 'white',
                                    borderRadius: '20px',
                                    marginTop: '10px',
                                    padding: '10px 40px',
                                    fontWeight: 'bold',
                                    ":hover": {
                                        background: '#B3AAFF',
                                    }
                                }}>
                                    Comprar
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}