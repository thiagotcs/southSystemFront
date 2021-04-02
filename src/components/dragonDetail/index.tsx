import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/Auth';
import { Content, NameUser, Text, InitialText } from './style';

import { GetDragonDetail } from '../../services/DragonService';
import { formatDatePT } from '../../utils/functions';
import IDragonData from '../../interfaces/IDragonData';
import Header from '../Header';

interface Iparams {
  id: string;
}

const DragonDetail: React.FC = () => {
  const [detail, setDetail] = useState<IDragonData>();
  const { id } = useParams<Iparams>();

  useEffect(() => {
    const loadDragonDetail = async () => {
      const response = await GetDragonDetail(id);
      setDetail(response);
    };
    loadDragonDetail();
  }, [id]);

  if (!detail) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { signOut } = useAuth();

  return (
    <>
      <Header />
      <Content>
        <NameUser>DB server</NameUser>

        <NameUser>Detalhes do Dragão</NameUser>

        <Text>
          <strong>Nome: </strong> {detail.name}
        </Text>
        <Text>
          <strong>Tipo: </strong> {detail.type}
        </Text>

        <InitialText>
          <Text>
            <strong>Capturado: </strong>
            {formatDatePT(detail.createdAt)}
          </Text>
        </InitialText>
        <Text>
          <strong>História: </strong>{' '}
          {detail.histories.length > 0 ? (
            <span>{detail.histories.join('')}</span>
          ) : (
            <span> - </span>
          )}
        </Text>
      </Content>
    </>
  );
};

export default DragonDetail;
