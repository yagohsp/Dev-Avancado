import React from 'react';
import { Button } from 'react-native';

const EnterButton = () => {

  return (
    <Button title="Entrar" color="blue" onPress={() => console.log("Clicou")} />
  );
};

export default EnterButton;
