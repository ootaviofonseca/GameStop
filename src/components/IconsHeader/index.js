import profile from '../../images/profile.svg';
import store from '../../images/store.svg';
import styled from 'styled-components';

const Icon = styled.li`
  margin-right: 40px;
  
  img {
    width: 30px; 
    
  }
`;

const Icons = styled.ul`
  display: flex;
    align-items: center;
`

const icons = [profile,store]

function IconsHeader(props) {
  return (
    <Icons>
      {icons.map((icon) => (
        <Icon><img src={icon} /></Icon>
      ))}
    </Icons>
  );
}


export default IconsHeader;