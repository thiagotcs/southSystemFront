import React from 'react';
import { FiPower } from 'react-icons/fi';

import logoImg from '../../assets/image/unnamed.png';
import { useAuth } from '../../hooks/Auth';
import { Container, Header, HeaderContent, Profile } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Header>
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
      </Header>
    </Container>
  );
};

export default Dashboard;
