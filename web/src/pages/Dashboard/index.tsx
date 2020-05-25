import React, { useState, useCallback } from 'react';

import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { FiClock } from 'react-icons/fi';
import Header from '../../components/Header';
import {
  Container,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

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
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/6394522?s=460&u=fd39696a472492b5c59012836e08524f811a255a&v=4"
                  alt="me"
                />

                <strong>Joao Victor</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/6394522?s=460&u=fd39696a472492b5c59012836e08524f811a255a&v=4"
                  alt="me"
                />

                <strong>Joao Victor</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                13:00
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/6394522?s=460&u=fd39696a472492b5c59012836e08524f811a255a&v=4"
                  alt="me"
                />

                <strong>Joao Victor</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                14:00
              </span>
              <div>
                <img
                  src="https://avatars0.githubusercontent.com/u/6394522?s=460&u=fd39696a472492b5c59012836e08524f811a255a&v=4"
                  alt="me"
                />

                <strong>Joao Victor</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            selectedDays={selectedDate}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
