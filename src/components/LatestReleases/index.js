import React from 'react';
import Slider from 'react-slick';
import { games } from './latestReleasesData';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css'; // Using to create the carousel style
import 'slick-carousel/slick/slick-theme.css'; // Using to create the carousel style

const CarrosselContainer = styled.div`
    width: 80%;
    margin: 20px auto;
`;

const Slide = styled.div`
    text-align: center;
    padding: 50px;
`;

const GameImage = styled.img`
    width: 200px;
    border-radius: 10px;
    box-shadow: 10px 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    color: #FFF;
    font-size: 36px;
    text-align: center;
    margin: 0; 
    border: 2px solid #FFF; 
    border-radius: 10px; 
    box-sizing: border-box;  
`;

// React-slick settings for the carousel
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

function LatestReleases() {
    return (
        <CarrosselContainer>
            <Title>Latest Releases</Title>
            <Slider {...settings}>
                {games.map(game => (
                    <Slide key={game.id}>
                        <GameImage src={game.src} alt={game.name} />
                    </Slide>
                ))}
            </Slider>
        </CarrosselContainer>
    );
}

export default LatestReleases;
