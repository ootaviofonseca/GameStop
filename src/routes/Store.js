import GameStoreContainer from '../components/Store';
import styled from 'styled-components';
import { useState } from 'react';

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh; 
  background-image: linear-gradient(90deg, #70d6ff  45%, #06f1d9);
  display: flex;
  flex-direction: column;
`;
  

function Store() {

  return (
    <AppContainer>
      <GameStoreContainer />
    </AppContainer>
    
  );
}

export default Store;
