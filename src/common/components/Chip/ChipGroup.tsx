import { View } from 'react-native';
import { PropsWithChildren } from 'react';
import { ScaledSheet } from '@/utils/scale';

interface ChipGroupProps extends PropsWithChildren {
}

const styles = ScaledSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: '10@s',
    rowGap: '10@vs',
  }
});

const ChipGroup = ({ children }: ChipGroupProps) => {
  return (
    <View
      style={styles.row}
    >
      {children}
    </View>
  );
};

export default ChipGroup;
