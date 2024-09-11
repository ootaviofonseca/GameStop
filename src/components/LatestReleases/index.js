import React from 'react';
import Slider from 'react-slick';
import { games } from './latestReleasesData';
import {Title} from '../Title';
import gameCover from '../../images/Black_Ops.jpeg';
import RecommendationCard from '../RecommendationCard';
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
    transition: transform 0.2s ease-in-out;
    
    &:hover {
    transform: scale(1.08);
    }
`;

const GameImage = styled.img`
    width: 200px;
    height: 250px; 
    border-radius: 10px;
    box-shadow: 10px 4px 8px rgba(0, 0, 0, 0.2);
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
        <>
        <CarrosselContainer>
            <Title>LATEST RELEASES</Title>
            <Slider {...settings}>
                {games.map(game => (
                    <Slide key={game.id}>
                        <GameImage src={game.src} alt={game.name} />
                    </Slide>
                ))}

            </Slider>
             
        </CarrosselContainer> 
        <RecommendationCard 
            title={"Maybe you'll be interested in this"} 
            subtitle={"Call of Duty: Black Ops Cold War"}  
            description={"The iconic Black Ops series is back with Call of Duty®: Black Ops Cold War - the direct sequel to the original and fan-favorite Call of Duty®: Black Ops."} 
            img={gameCover}
        />
        </>     
    );     
}

export default LatestReleases;
