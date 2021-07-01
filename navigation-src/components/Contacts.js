import React from 'react';
import { View, Text } from 'react-native';

const Contacts = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      <Text>Contatos</Text>
    </View>
  );
};


Contacts.navigationOptions = {
  title: 'Contacts',
};

export default Contacts;
