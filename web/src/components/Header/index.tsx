import React from 'react';

import { FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import logoImg from '../../assets/logo.svg';

import { Container, HeaderContent, Profile, Info } from './styles';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <HeaderContent>
        <img src={logoImg} alt="logo" />

        <Profile>
          <img src={user.avatar_url} alt={user.id} />
          <Info>
            <span>Bem-vindo(a), </span>
            <strong>{user.name}</strong>
          </Info>
        </Profile>

        <button onClick={signOut} type="button">
          <FiPower />
        </button>
      </HeaderContent>
    </Container>
  );
};

export default Header;
