import React from 'react';
import { View, Text } from 'react-native';

const Chat = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      <Text>Chat</Text>
    </View>
  );
};


Chat.navigationOptions = {
  title: 'Chat',
};

export default Chat;
