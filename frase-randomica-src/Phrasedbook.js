import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const phrases = [
  'Frase 1',
  'Frase 2',
  'Frase 3',
  'Frase 4',
  'Frase 5'
]

function getRandomPhrase(){
  return phrases[Math.floor(Math.random() * phrases.length)];
}

export default function PhrasedBook() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      {isOpen ? <Image
        source={require('../public/opened-book.png')}
      /> :
      <Image
        source={require('../public/closed-book.png')}
      />}
      {isOpen && <Text style={styles.title}>{dayPhrase}</Text>}
      <Button onClick={()=> {setIsOpen(true)}}>{getRandomPhrase()}</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(29, 161, 242)',
    marginTop: 30,
    marginHorizontal: 'auto'
  }
});