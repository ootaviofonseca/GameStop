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

const GameCard = styled.div`
    display: flex;
    flex-direction: column;
    {/*align-items: center;
    justify-content: center;*/}
    width: 185px;
    height: 225px;
    background-color: rgba(255, 255, 255, 0.8);
    
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    padding: 10px;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

const GameImage = styled.img`
    width: 180px;
    height: 220px; 
    border-radius: 10px;
    margin-bottom: 10px;
    align-self: center;
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
                       <GameCard>
                            <GameImage src={game.src} alt={game.name} />
                            
                        </GameCard>
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
