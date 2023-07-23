import { Divider } from '@/common/components/Divider';
import Text from '@/common/components/Text';
import { COLORS } from '@/themes/colors';
import { ScaledSheet } from '@/utils/scale';
import React, { Fragment } from 'react';
import { View } from 'react-native';
import StageMainEmptyCustomCard from './StageMainEmptyCustomCard';
import StageMainCustomCard from './StageMainCustomCard';
import useGetCustomStageQuery from '@/api/Question/hooks/useGetCustomStageQuery';
import { useCustomStageStore } from '@/store/customStage';
import { map } from 'lodash';

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: '20@s',
  },
});

const StageMainCustomSection = () => {
  useGetCustomStageQuery();

  const { customStageLength, stageLists } = useCustomStageStore();

  const isEmptyCustomStage = customStageLength === 0;

  const renderCustomCards = map(stageLists, item => {
    return (
      <Fragment
        key={`${item?.createDate + item?.categoryName + item?.stageName}`}
      >
        <StageMainCustomCard
          title={item?.stageName}
          createdAt={item?.createDate || new Date()}
          category={item?.categoryName}
          stageId={String(item?.stageNo)}
        />
        <Divider vertical={20} />
      </Fragment>
    );
  });

  return (
    <View style={styles.container}>
      <Text fontSize="24" fontWeight="bold" color={COLORS.black}>
        커스텀 스테이지
      </Text>
      <Divider vertical={20} />
      {isEmptyCustomStage ? <StageMainEmptyCustomCard /> : renderCustomCards}
      <Divider vertical={40} />
    </View>
  );
};

export default StageMainCustomSection;
