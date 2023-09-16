import { putProfile } from '@/api/User/api';
import { Gender } from '@/api/User/types';
import { Button } from '@/common/components/Button';
import Chip from '@/common/components/Chip/Chip';
import ChipGroup from '@/common/components/Chip/ChipGroup';
import Text from '@/common/components/Text';
import DateInputField from '@/features/Landing/Components/DateInputField';
import { useUserStore } from '@/store/user';
import { COLORS } from '@/themes/colors';
import globalStyles, { GLOBAL_HORIZONTAL_PADDING } from '@/themes/globalStyles';
import { ScaledSheet } from '@/utils/scale';
import { useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
  skip: {
    alignSelf: 'center',
    marginTop: '10@vs',
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

  const handleSkip = async () => {
    await putProfile({
      gender: null,
      birth: null,
    });
    getUser();
  };

  return (
    <View
      style={[
        globalStyles.defaultPadding,
        globalStyles.defaultBackgroundColor,
        { height: '100%' },
      ]}
    >
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
      <View style={styles.button}>
        <Button
          title={'완료'}
          onPress={handleSubmit}
          width={'100%'}
          disabled={!(gender && birth)}
        />
        <TouchableOpacity style={styles.skip} onPress={handleSkip}>
          <Text
            fontSize="16"
            fontWeight="bold"
            color={COLORS.gray300}
            textDecorationLine="underline"
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfileScreen;
