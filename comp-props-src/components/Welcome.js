import React from 'react';
import { Text } from 'react-native';

const Welcome = ({ name }) => {

  return (
    <Text style={{ marginBottom: 15, fontSize: 18, color: 'blue'}}>Olá, seja bem vindo {name}</Text>
  );
};

export default Welcome;
