import { useFonts } from 'expo-font';

const App = () => {
  const [fontsLoaded] = useFonts({
    'Lobster2': require('./assets/fonts/Lobster-Regular.ttf'), //Renamed the font to Lobster2
  });

if (!fontsLoaded) {
    return null;
  }

  return (
    <Text style={{ fontFamily: 'Lobster2' }}>Hello world!</Text>
  );
};

export default App;