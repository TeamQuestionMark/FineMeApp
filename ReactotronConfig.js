/* eslint-disable react-hooks/rules-of-hooks */
import { NativeModules } from 'react-native';
import Reactotron, { asyncStorage, networking } from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reactotronPluginZustand from 'reactotron-plugin-zustand';

const { zustandStore } = require('./src/store/store');

// First, set some configuration settings on how to connect to the app
Reactotron.configure({
  name: 'FineMe',
}).use(reactotronPluginZustand({ stores: zustandStore }));

// add every built-in react native feature.  you also have the ability to pass
// an object as a parameter to configure each individual react-native plugin
// if you'd like.
Reactotron.useReactNative({
  asyncStorage: { ignore: ['secret'] },
  networking: {
    ignoreUrls: /https:\/\/clients3.google.com\/generate_204/,
  },
});

// add some more plugins for redux & redux-saga
Reactotron.use(asyncStorage(), networking());
// for ease of debugging, wrap console.log with reactotron.log
const goodOldConsoleLog = console.log;
console.log = (...args) => {
  goodOldConsoleLog(...args);
  Reactotron.log(...args);
};

let scriptHostname;
if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;

  scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

// if we're running in DEV mode, then let's connect!
if (__DEV__) {
  Reactotron.setAsyncStorageHandler(AsyncStorage);
  if (scriptHostname) {
    Reactotron.configure({ host: scriptHostname });
  }
  Reactotron.connect();
  Reactotron.clear();
}

export default Reactotron;
