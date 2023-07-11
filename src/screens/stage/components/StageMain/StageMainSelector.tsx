import React from 'react';
import { Dimensions, View } from 'react-native';
import StageMainCard from './StageMainCard';
import globalStyles from '@/themes/globalStyles';
import Carousel from 'react-native-reanimated-carousel';
import { s, vs } from '@/utils/scale';
import { StageMainCardProps } from './type';

const StageMainSelector = () => {
  const width = Dimensions.get('window').width;

  return (
    <View style={[globalStyles.alignCenter]}>
      <Carousel
        loop
        width={width}
        height={vs(340)}
        data={['work', 'cafe', 'home']}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: 100,
          parallaxAdjacentItemScale: 0.9,
        }}
        renderItem={({ item }) => (
          <StageMainCard key={item} type={item as StageMainCardProps['type']} />
        )}
      />
    </View>
  );
};

export default StageMainSelector;
