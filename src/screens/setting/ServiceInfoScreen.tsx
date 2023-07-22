import React from 'react';
import { Linking, ScrollView, View } from 'react-native';

import Header from '@/common/components/Header/Header';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/navigations/types';
import AboutUsAccordion from './components/AboutUsAccordion';
import ImgAboutQuestionMark from '@/assets/images/serviceInfo/image_about_questionmark.png';
import ImgAboutFineme from '@/assets/images/serviceInfo/image_about_fineme.png';
import globalStyles from '@/themes/globalStyles';
import { Menu } from '@/common/components/Menu';
import { ScaledSheet } from '@/utils/scale';
import { GOOGLE_FORM_CONTACT_URL } from '@/constants/config';

const styles = ScaledSheet.create({
  aboutus: {
    marginBottom: '24@vs',
  },
  contact: {
    marginBottom: '100@vs',
  },
});

const ServiceInfoScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const openGoogleForm = async () => {
    if (GOOGLE_FORM_CONTACT_URL) await Linking.openURL(GOOGLE_FORM_CONTACT_URL);
  };
  return (
    <View>
      <Header title="서비스 소개" onPressLeadingIcon={navigation.goBack} />
      <ScrollView
        style={[
          globalStyles.defaultPadding,
          globalStyles.defaultBackgroundColor,
          { height: '100%' },
        ]}
      >
        <AboutUsAccordion
          style={styles.aboutus}
          subTitle="팀 소개"
          title="Question Mark"
          description={`안녕하세요, 저희는 Fine me의 제작자 
'Question mark'입니다.
저희의 로고처럼 스스로와 타인을 향한 '궁금증'을 조금이라도 해결하고 싶어 4명의 개발자, 2명의 디자이너
그리고 2명의 기획자가 모였습니다!
완전한 정답도, 불완전한 오답도 없는 "나"와 "타인"에 대해 조금 더 쉽고 재밌게 이해할 수 있도록 의기투합하며 열심히 준비했습니다!`}
          image={ImgAboutQuestionMark}
        />
        <AboutUsAccordion
          style={styles.aboutus}
          subTitle="서비스 소개"
          title="Fine Me"
          description={`Fine me'는 Question mark의 첫 번째 시작이자, 여러분과의 첫 만남입니다!평소 어떤 고민은 "나" 혼자서는 이해하기 어려울 수 있습니다. 하지만 "타인"의 관점에서는 쉽게 해결될 수도 합니다. 그건 내가 나를 이해하지 못하는 게 아니라, 너무 많이 이해하고 있기 때문입니다. 모래 속에서 바늘을 찾기 어려운 것처럼요.Fine me를 통해 내게는 어려웠던 고민을 "타인"을 통해 확인해 보세요! 나를 너무 많이 알고 있기에 놓친 것들을 다시 확인하고, 고민을 해결하는 데 도움이 될 겁니다!유저님들 모두 파인미를 통해 궁금하고, 어려웠던 고민거리를 재밌게 해결하시면 좋겠습니다!`}
          image={ImgAboutFineme}
        />
        <Menu
          style={styles.contact}
          title="연락하기"
          onPress={openGoogleForm}
        />
      </ScrollView>
    </View>
  );
};

export default ServiceInfoScreen;
