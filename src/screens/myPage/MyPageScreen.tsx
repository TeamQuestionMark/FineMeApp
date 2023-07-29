import React from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';

import { COLORS } from '@/themes/colors';
import { MyPageMain } from './components';
import globalStyles from '@/themes/globalStyles';
import useGetQuestionResultsQuery from '@/api/Question/hooks/useGetQuestionResultsQuery';

const MyPageScreen = () => {
  const { refetchLists, isLoading } = useGetQuestionResultsQuery();

  return (
    <View
      style={[
        globalStyles.defaultFlexContainer,
        { backgroundColor: COLORS.white },
      ]}
    >
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetchLists} />
        }
      >
        <MyPageMain />
      </ScrollView>
    </View>
  );
};

export default MyPageScreen;
