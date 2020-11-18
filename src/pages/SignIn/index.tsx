import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Title,
  ForgoutPassoord,
  ForgoutPassoordText,
  CreateAccoutButton,
  CreateAccoutButtonText,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Faça seu logon</Title>
            </View>
            <Input name="email" icon="mail" placeholder="email" />
            <Input name="password" icon="lock" placeholder=" senha" />
            <Button
              onPress={() => {
                console.log('deu');
              }}
            >
              Entrar
            </Button>
            <ForgoutPassoord
              onPress={() => {
                console.log('ok');
              }}
            >
              <ForgoutPassoordText>Esqueci minha senha </ForgoutPassoordText>
            </ForgoutPassoord>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccoutButton
        onPress={() => {
          console.log('create');
        }}
      >
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccoutButtonText>criar uma conta</CreateAccoutButtonText>
      </CreateAccoutButton>
    </>
  );
};

export default SignIn;
