import Header from './components/Header';  
import Search from './components/Search';
import LatestReleases from './components/LatestReleases'; 
import styled from 'styled-components';


const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh; 
  background-image: linear-gradient(90deg, #70d6ff  45%, #06f1d9);
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
        <Header />
        <Search />
        <LatestReleases />
    </AppContainer>
    
  );
}

export default App;
