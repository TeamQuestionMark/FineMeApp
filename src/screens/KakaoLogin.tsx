import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import * as Kakao from '@react-native-seoul/kakao-login';

export default function KakaoLogin(): JSX.Element {
  const [result, setResult] = useState<string>('');

  const login = async (): Promise<void> => {
    try {
      const token = await Kakao.login();
      setResult(JSON.stringify(token));
    } catch (err) {
      console.error('login err', err);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      const message = await Kakao.logout();

      setResult(message);
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  const getProfile = async (): Promise<void> => {
    try {
      const profile = await Kakao.getProfile();

      setResult(JSON.stringify(profile));
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  const unlink = async (): Promise<void> => {
    try {
      const message = await Kakao.unlink();

      setResult(message);
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={login}>
        <Text style={styles.text}>카카오 로그인</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={getProfile}>
        <Text style={styles.text}>프로필 조회</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={logout}>
        <Text style={styles.text}>카카오 로그아웃</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={unlink}>
        <Text style={styles.text}>링크 해제</Text>
      </Pressable>
      <View style={styles.resultViewContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  resultViewContainer: {
    width: '100%',
    marginTop: 60,
  },
  resultText: {
    color: 'black',
  },
  button: {
    backgroundColor: 'black',
    width: '100%',
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});
