import styled from "styled-components";
import { Title } from "../Title";

const Card = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    padding: 20px;
    width: ${props => props.width || '600px'};
    height: ${props => props.height || '300px'};
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    margin: 20px;
    transition: transform 0.2s ease-in-out;
    align-self: center;

    &:hover {
    transform: scale(1.05);
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 60%;
    gap: 5px;
`;

const Subtitle = styled.h4`
    font-size: 14px;
    font-weight: 600;
    color: #333;
    text-align: center;
    margin: 0; 
`;

const Description = styled.p`
    font-size: 12px;
    color: #666;
    text-align: center;
    margin: 5px 0;
`;

const GameImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 10px 4px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    background-color: #06f1d9;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
    background-color: #70d6ff;
    }
`;

function RecommendationCard({ title, subtitle, description, img }) {
  return (
    <Card>
      <TextContainer>
        <Title fontSize="16px"  border="none" color="#000" >
          {title}
        </Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
        <Button>See more</Button>
      </TextContainer>
        <GameImage src={img} alt={title} />
    </Card>
  );
}

export default RecommendationCard;
