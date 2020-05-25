import React from 'react';

import { FiClock } from 'react-icons/fi';
import Header from '../../components/Header';
import {
  Container,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Calendar,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars0.githubusercontent.com/u/6394522?s=460&u=fd39696a472492b5c59012836e08524f811a255a&v=4"
                alt="me"
              />

              <strong>Joao Victor</strong>
              <span>
                <FiClock /> 08:00
              </span>
            </div>
          </NextAppointment>
          <Section>
            <strong>Manhã</strong>
          </Section>
          <Section>
            <strong>Tarde</strong>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
