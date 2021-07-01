import { View } from 'react-native';
import Welcome from './components/Welcome';
import ImageText from './components/ImageText';
import EnterButton from './components/EnterButton';

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
      <Welcome name="Yago" />
      <ImageText text="Clique aqui para acessar" />
      <EnterButton />
    </View>
  )
}
