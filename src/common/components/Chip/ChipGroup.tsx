import { StyleSheet, View } from 'react-native';
import { PropsWithChildren } from 'react';

interface ChipGroupProps extends PropsWithChildren {
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 10,
    rowGap: 10,
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
