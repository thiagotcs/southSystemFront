import React, { useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles, SubmitHandler } from '@unform/core';
import { useHistory } from 'react-router-dom';
import Input from '../Input';
import Button from '../Button';
import Header from '../Header';

import AddDragonData from '../../services/DragonService/addDragon';
import { Content, Center } from './style';

const AddDragon: React.FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const HandleSubmit: SubmitHandler = async ({ ...data }, { reset }) => {
    try {
      data.histories = data.histories.split(' ');
      await AddDragonData(data);

      history.push('/');
      reset();
    } catch (error) {
      alert(error);
    }
  };

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
                  name="type"
                  required
                  type="text"
                  placeholder="Tipo de dragão"
                />

                <Input
                  name="histories"
                  required
                  type="text"
                  placeholder="História deste dragão"
                />
              </div>
              <Button type="submit">Adicionar Dragão</Button>
            </Form>
          </div>
        </Center>
      </Content>
    </>
  );
};

export default AddDragon;
