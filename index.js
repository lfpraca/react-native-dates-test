/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from 'react-native-paper';
import {name as appName} from './app.json';

export default function Main() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <App />
      </PaperProvider>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
