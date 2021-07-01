import React from 'react';
import { View, Text } from 'react-native';

const Home = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      <Text>Bem vindo a Home</Text>
    </View>
  );
};


Home.navigationOptions = {
  title: 'Home',
};

export default Home;
