/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
// ios에서 백그라운드 알림을 받았을 시 루트 리액트 컴포넌트를 마운트하지 않는다
function HeadlessCheck({ isHeadless }) {
  if (isHeadless) {
    // background
    return null;
  }
  // foreground
  return <App />;
}

AppRegistry.registerComponent(appName, () => App);
