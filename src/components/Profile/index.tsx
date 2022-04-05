// import styles from './style.scss';
import React, { useState } from 'react';
import {
  ScrollView,
  Image,
  View,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';
import { accessAlbum } from '../../utils';

export default function Profile() {
  const [image, setImage] = useState<string | undefined>(
    'data:image/jpeg;base64,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'
  );

  const setProfilePhoto = async () => {
    const element = 'profile';
    await accessAlbum(element)
      .then((image) => {
        setImage(image.path);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.h1}>프로필 사진을 설정해보세요</Text>
        <Text style={styles.h2}>
          다른 사용자에게 공개돼요! {'\n'}꼭 본인 사진이 아니여도 좋아요
        </Text>
      </View>
      <View style={styles.content}>
        <Pressable onPress={setProfilePhoto}>
          <Image source={{ uri: image }} style={styles.profile} />
        </Pressable>
        <Pressable onPress={setProfilePhoto} style={styles.button}>
          <Text style={styles.text}>프로필 설정하기</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    flex: 1,
  },
  title: {
    marginLeft: 30,
    marginBottom: 30,
  },
  h1: {
    fontSize: 25,
    fontWeight: '800',
  },
  h2: {
    fontSize: 16,
    color: 'gray',
  },
  content: {
    alignItems: 'center',
  },
  button: {
    width: 100,
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 4,
    marginTop: 5,
    backgroundColor: '#ff5c66',
  },
  text: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
    color: 'white',
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 80,
  },
});
