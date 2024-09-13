import MyGamesComponent from '../components/MyGames';
import styled from 'styled-components';


const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh; 
  background-image: linear-gradient(90deg, #70d6ff  45%, #06f1d9);
  display: flex;
  flex-direction: column;
`;

function MyGames() {
  return (
    <AppContainer>
        <MyGamesComponent/>
    </AppContainer>
    
  );
}

export default MyGames;
