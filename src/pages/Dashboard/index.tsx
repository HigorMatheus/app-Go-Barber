import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/Auth';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <View>
      <Text>Dashboard </Text>
      <Button onPress={signOut}>sair</Button>
    </View>
  );
};

export default Dashboard;
