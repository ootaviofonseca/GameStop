import FavoritesComponets from '../components/Favorites';
import styled from 'styled-components';


const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh; 
  background-image: linear-gradient(90deg, #70d6ff  45%, #06f1d9);
  display: flex;
  flex-direction: column;
`;

function Favorites() {
  return (
    <AppContainer>
        <FavoritesComponets/>
    </AppContainer>
    
  );
}

export default Favorites;
