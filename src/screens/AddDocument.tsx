import React from 'react';

import { Background } from '../components/Background';
import { Container } from '../components/Container';
import { Header } from '../components/Header';

export const AddDocument: React.FC = () => {
  return (
    <Background>
      <Container>
        <Header
          title="Adicionar"
          subtitle="Verifique as informações do seu documento."
        />
      </Container>
    </Background>
  );
};
