import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import { ScaledSheet, vs } from '@/utils/scale';
import Tooltip from '@/assets/images/description/image_add_item_description.png';
import ButtonImage from '@/assets/icons/Add/icon_circle_add.png';
import globalStyles from '@/themes/globalStyles';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

const styles = ScaledSheet.create({
  container: {
    position: 'relative',
    right: '20@s',
  },
  tooltip: {
    width: '158@s',
    height: '34@vs',
  },
  icon: {
    width: '46@s',
    height: '46@s',
  },
});

const StageMainAddButton = () => {
  const isFocused = useIsFocused();
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(true);

  // TODO: 이동
  const onPressAddButton = () => {};

  useEffect(() => {
    if (isFocused) {
      setIsTooltipVisible(true);
    }
    setTimeout(() => setIsTooltipVisible(false), 5000);
  }, [isFocused]);

  return (
    <View
      style={[
        styles.container,
        globalStyles.alignItemsFlexEnd,
        { bottom: vs(isTooltipVisible ? 102 : 68) },
      ]}
    >
      {isTooltipVisible && (
        <FastImage source={Tooltip} style={styles.tooltip} />
      )}
      <TouchableOpacity activeOpacity={0.7} onPress={onPressAddButton}>
        <FastImage source={ButtonImage} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default StageMainAddButton;
