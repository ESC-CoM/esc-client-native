import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import { userSchoolInfoMocks } from '../../__mocks__/userschoolinfo';
import { UserSchoolInfoSchema } from '../../types/userschoolinfo';
import { accessAlbum } from '../../utils';

const element = 'auth';
export default function StudentAuth() {
  const [image, setImage] = useState<string | undefined>(
    'https://user-images.githubusercontent.com/63364990/161173091-5ab9c316-30b5-4f94-a253-32e2929b2911.jpeg'
  );
  const [userSchoolInfo, setUserSchoolInfo] = useState<UserSchoolInfoSchema>();

  const attachStdIdPhoto = async () => {
    await accessAlbum(element)
      .then((image) => {
        setImage(image.path);
        setUserSchoolInfo(userSchoolInfoMocks);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.h1}>학생증을 인증해주세요</Text>
          <Text style={styles.h2}>모바일 학생증 캡쳐사진을 첨부해주세요!</Text>
        </View>
        <View style={styles.content}>
          <Pressable onPress={attachStdIdPhoto}>
            <Image source={{ uri: image }} style={styles.stdIdImage} />
          </Pressable>
          <Pressable onPress={attachStdIdPhoto} style={styles.button}>
            <Text>학생증 첨부</Text>
          </Pressable>
          <View style={styles.info}>
            <Text>단과대학</Text>
            <TextInput value={userSchoolInfo?.college} style={styles.input} />
            <Text>학과(부)</Text>
            <TextInput
              value={userSchoolInfo?.department}
              style={styles.input}
            />
            <Text>학번</Text>
            <TextInput
              value={userSchoolInfo?.studentNum}
              style={styles.input}
            />
            <Text>이름</Text>
            <TextInput value={userSchoolInfo?.userName} style={styles.input} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    overflow: 'scroll',
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
    fontSize: 17,
  },
  content: {
    alignItems: 'center',
  },
  stdIdImage: {
    width: 200,
    height: 300,
  },
  button: {
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: '#ff5c66',
  },
  info: {
    margin: 12,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
  },
});
