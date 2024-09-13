import { Link } from 'react-router-dom';
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
`;

const icons = [
  { src: profile, path: '/profile' },
  { src: store, path: '/store' }
];

function IconsHeader(props) {
  return (
    <Icons>
      {icons.map((icon, index) => (
        <Icon key={index}>
          <Link to={icon.path}>
            <img src={icon.src} alt={`Icon ${index}`} />
          </Link>
        </Icon>
      ))}
    </Icons>
  );
}

export default IconsHeader;
