/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { QueryClient, QueryClientProvider } from 'react-query';
import Text from './common/components/Text';
import { TEXT_COLORS } from './themes/colors';

const queryClient = new QueryClient();
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}
        >
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}
          >
            <Text
              typography="body1"
              fontWeight="regular"
              color={TEXT_COLORS.textPrimary}
              isFontTypeEnglish={false}
            >
              한글 테스트
            </Text>
            <Text
              typography="body1"
              fontWeight="regular"
              color={TEXT_COLORS.textPrimary}
              isFontTypeEnglish={true}
            >
              Test
            </Text>

            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
