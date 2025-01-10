import { useFonts } from 'expo-font';

const App = () => {
  const [fontsLoaded] = useFonts({
    'Lobster': require('./assets/fonts/Lobster-Regular.ttf'),
  });

if (!fontsLoaded) {
    return null;
  }

  return (
    <Text style={{ fontFamily: 'Lobster' }}>Hello world!</Text>
  );
};

export default App;