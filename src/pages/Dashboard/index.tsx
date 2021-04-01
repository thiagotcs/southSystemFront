/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect } from 'react';
import { FiEdit, FiPlusCircle, FiPower, FiTrash } from 'react-icons/fi';
import { FaDragon } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import logoImg from '../../assets/image/unnamed.png';
import { useAuth } from '../../hooks/Auth';
import IDragonData from '../../interfaces/IDragonData';
import { DeleteDragon, getDragon } from '../../services/DragonService';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Card,
  CardInfo,
  CardBtn,
} from './styles';
import {
  firstCapitalLetter,
  formatDatePT,
  orderByArray,
} from '../../utils/functions';

const Dashboard: React.FC = () => {
  const [listDragon, setListDragon] = useState<IDragonData[]>([]);

  const loadDragon = async () => {
    const response = await getDragon();
    setListDragon(response);
  };

  useEffect(() => {
    loadDragon();
  }, []);

  const deleteDragon = async (id: string) => {
    await DeleteDragon(id);
    loadDragon();
  };

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
      <Content>
        <Schedule>
          <h1>
            Dragões capturados
            <NavLink to="/new">
              <FiPlusCircle />{' '}
            </NavLink>
          </h1>
          {orderByArray(listDragon).map(({ id, name, createdAt, type }) => (
            <Card key={id}>
              {/* <strong>Novo Dragon</strong> */}
              <div>
                <CardInfo>
                  <img
                    src="https://us.123rf.com/450wm/refluo/refluo1804/refluo180400017/99912726-dragon-head-in-darkness.jpg?ver=6"
                    alt="dragon"
                  />
                  <div>
                    <strong>Nome: {firstCapitalLetter(name)}</strong>
                    <span>Tipo: {firstCapitalLetter(type)} </span>
                    <span>Data: {formatDatePT(createdAt)} </span>
                  </div>
                </CardInfo>
                <CardBtn>
                  <NavLink type="button" to={`/detail/${id}`}>
                    <FaDragon />{' '}
                  </NavLink>

                  <NavLink type="button" to={`/edit/${id}`}>
                    <FiEdit />{' '}
                  </NavLink>
                  <NavLink
                    type="button"
                    onClick={() => deleteDragon(id)}
                    to="/"
                  >
                    <FiTrash />{' '}
                  </NavLink>
                </CardBtn>
              </div>
            </Card>
          ))}
        </Schedule>
      </Content>
    </Container>
  );
};

export default Dashboard;
