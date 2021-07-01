import React from 'react';
import { View, Text } from 'react-native';

const Store = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      <Text>Loja</Text>
    </View>
  );
};


Store.navigationOptions = {
  title: 'Store',
};

export default Store;
