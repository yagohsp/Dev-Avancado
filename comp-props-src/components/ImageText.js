import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageText = ({ text }) => {

  return (
    <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'center' }}>
      <Image
        style={{
          width: 66,
          height: 58,
          marginBottom: 5
        }}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text>{text}</Text>
    </View>
  );
};

export default ImageText;
