import React from 'react';
import { Dimensions, View } from 'react-native';
import StageMainCard from './StageMainCard';
import globalStyles from '@/themes/globalStyles';
import Carousel from 'react-native-reanimated-carousel';
import { vs } from '@/utils/scale';
import { StageMainCardProps } from './type';

const StageMainSelector = () => {
  const width = Dimensions.get('window').width;
  const data: StageMainCardProps['type'][] = ['회사', '카페', '집'];
  return (
    <View style={[globalStyles.alignCenter]}>
      <Carousel
        loop
        width={width}
        height={vs(340)}
        data={data}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: 100,
          parallaxAdjacentItemScale: 0.9,
        }}
        renderItem={({ item }) => <StageMainCard key={item} type={item} />}
      />
    </View>
  );
};

export default StageMainSelector;
