import React, { useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { useHistory, useParams } from 'react-router-dom';
import { FormHandles, SubmitHandler } from '@unform/core';
import Button from '../Button';
import Input from '../Input';
import { Content, Center } from './style';
import { GetDragonDetail } from '../../services/DragonService';
import updateDragon from '../../services/DragonService/updateDragon';
import IDragonData from '../../interfaces/IDragonData';
import Header from '../Header';

interface Iparams {
  id: string;
}

const EditDragon: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { id } = useParams<Iparams>();

  const HandleSubmit: SubmitHandler = async ({ ...data }, { reset }) => {
    try {
      await updateDragon(id, data);

      history.push('/');
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const loadDragonDetail = async () => {
      const response = await GetDragonDetail(id);

      formRef.current?.setData({
        name: response.name,
        type: response.type,
      });
    };

    loadDragonDetail();
  }, [id]);

  return (
    <>
      <Header />
      <Content>
        <Center>
          <div>
            <div />
            <Form ref={formRef} onSubmit={HandleSubmit}>
              <div>
                <Input
                  name="name"
                  required
                  type="text"
                  placeholder="Nome do dragão"
                />
                <Input
                  name="type"
                  required
                  type="text"
                  placeholder="Tipo de dragão"
                />
                <Input
                  name="createdAt"
                  required
                  type="date"
                  placeholder="capturado"
                />
              </div>
              <Button type="submit">Alterar Dragão</Button>
            </Form>
          </div>
        </Center>
      </Content>
    </>
  );
};

export default EditDragon;
