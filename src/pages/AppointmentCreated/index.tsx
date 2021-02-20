/* eslint-disable import/no-duplicates */
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  Title,
  Description,
  OkButton,
  OKButtonText,
} from './styles';

interface IRouteParams {
  date: number;
}

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute();

  const routeParams = params as IRouteParams;

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [
        {
          name: 'Dashboard',
        },
      ],
      index: 0,
    });
  }, [reset]);

  const formatedDate = useMemo(() => {
    return format(
      routeParams.date,
      "EEEE', dia' dd 'de' MMMM 'de ' yyyy 'ás' HH:mm 'h' ",
      { locale: ptBR },
    );
  }, [routeParams]);
  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />
      <Title>Agendamento concluido</Title>
      <Description>{formatedDate}</Description>
      <OkButton onPress={handleOkPressed}>
        <OKButtonText> Ok</OKButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
