import React from 'react';
import { FiPower } from 'react-icons/fi';
import logoImg from '../../assets/image/unnamed.png';
import { useAuth } from '../../hooks/Auth';

import { Container, HeaderContent, Profile } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <>
      <Container>
        <HeaderContent>
          <img src={logoImg} alt="South System" />
          <Profile>
            <img
              src="https://avatars.githubusercontent.com/u/53226663?v=4"
              alt="Thiago Carvalho"
            />
            <div>
              <span>Bem-Vindo,</span>
              <strong>Thiago Carvalho</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Container>
    </>
  );
};

export default Header;
