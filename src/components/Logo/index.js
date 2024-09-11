import logo from '../../images/logo.svg';
import styled from 'styled-components';


const LogoContainer = styled.div`
  display: flex;
  font-size:20px;
  align-items: center;
`;

const LogoImg = styled.img`
  margin-right: 10px;
  width: 50px;
`;

function Logo() {
  return (
    <LogoContainer>
        <LogoImg src={logo} alt="logo"  />
        <p><strong>GAME</strong>STOP</p>
    </LogoContainer>
    );
}

export default Logo; 