/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  HomeNavigationStack,
} from './routes/HomeNavigationStack';
import {Splashscreen} from './screens/Splashscreen';

const App = () => {
  const [loadHomeScreen, setLoadHomeScreen] = useState(false);
  const screentoLoad = loadHomeScreen ? (
    <HomeNavigationStack />
  ) : (
    <Splashscreen setLoadHomeScreen={setLoadHomeScreen} />
  );

  return <>{screentoLoad}</>;
};

export default App;
