import React, { useCallback, useState } from 'react';
import { View } from 'react-native';

import Header from '@/common/components/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/navigations/types';
import { TextField } from '@/common/components/TextField';
import globalStyles from '@/themes/globalStyles';
import { Button } from '@/common/components/Button';
import Validator from '@/utils/Validator';
import { ScaledSheet } from '@/utils/scale';
import { useUserStore } from '@/store/user';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: '60@vs',
  },
});
const validator = new Validator().min(2).max(8);
const EditNicknameScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const { user, editNickname } = useUserStore();

  const [input, setInput] = useState('');
  const submit = useCallback(async () => {
    await editNickname(input);
    navigation.goBack();
  }, [editNickname, input, navigation]);
  return (
    <>
      <Header title="" onPressLeadingIcon={navigation.goBack} />
      <View
        style={[
          globalStyles.defaultFlexContainer,
          globalStyles.defaultBackgroundColor,
          globalStyles.defaultPadding,
          styles.container,
        ]}
      >
        <TextField
          label="닉네임"
          placeholder="최소2~8자의 닉네임을 입력해주세요"
          defaultValue={user?.nickname}
          validator={validator}
          maxLength={8}
          onInput={setInput}
        />
        <Button title="저장하기" width={'100%'} onPress={submit} />
      </View>
    </>
  );
};

export default EditNicknameScreen;
