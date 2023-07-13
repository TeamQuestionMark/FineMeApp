import { putProfile } from '@/api/User/api';
import { Gender } from '@/api/User/types';
import { Button } from '@/common/components/Button';
import Chip from '@/common/components/Chip/Chip';
import ChipGroup from '@/common/components/Chip/ChipGroup';
import Text from '@/common/components/Text';
import DateInputField from '@/features/Landing/Components/DateInputField';
import { useUserStore } from '@/store/user';
import globalStyles, { GLOBAL_HORIZONTAL_PADDING } from '@/themes/globalStyles';
import { ScaledSheet } from '@/utils/scale';
import { useState } from 'react';
import { View } from 'react-native';

const GENDER_OPTIONS: { label: string; value: Gender }[] = [
  {
    label: '남성',
    value: 'male',
  },
  {
    label: '여성',
    value: 'female',
  },
  {
    label: '기타',
    // TODO: api 명세 확인 필요
    value: 'etc',
  },
];

const styles = ScaledSheet.create({
  inputContainer: {
    marginBottom: '50@vs',
  },
  label: {
    marginBottom: '20@vs',
  },
  button: {
    position: 'absolute',
    bottom: '50@vs',
    left: GLOBAL_HORIZONTAL_PADDING,
    right: GLOBAL_HORIZONTAL_PADDING,
    width: '100%',
  },
});

const EditProfileScreen = () => {
  const [gender, setGender] = useState<string>();
  const [birth, setBirth] = useState<Date>();
  const { getUser } = useUserStore();
  const handleSubmit = async () => {
    if (gender && birth) {
      await putProfile({
        gender: gender as Gender,
        birth,
      });
      getUser();
    }
  };

  return (
    <View style={[globalStyles.defaultPadding, { height: '100%' }]}>
      <View style={styles.inputContainer}>
        <Text style={styles.label} fontWeight="bold" fontSize="16">
          성별
        </Text>
        <ChipGroup>
          {GENDER_OPTIONS.map(option => (
            <Chip
              key={option.value}
              value={option.value}
              onPress={setGender}
              isChecked={option.value === gender}
            >
              {option.label}
            </Chip>
          ))}
        </ChipGroup>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label} fontWeight="bold" fontSize="16">
          생년월일
        </Text>
        <DateInputField onInput={setBirth} />
      </View>
      <Button
        style={styles.button}
        title={'완료'}
        onPress={handleSubmit}
        width={'100%'}
        disabled={!(gender && birth)}
      />
    </View>
  );
};

export default EditProfileScreen;
