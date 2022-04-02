import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NativeRouter, Route, Link, Routes } from 'react-router-native';
import { Profile, StudentAuth } from './src/components';
// import Cropper from './src/components/Cropper';

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/stdauth" element={<StudentAuth />} />
      </Routes>
      <View style={styles.container}>
        <Link to="/profile" style={styles.tab}>
          <Text>프로필 사진</Text>
        </Link>
        <Link to="/stdauth" style={styles.tab}>
          <Text>학생증 인증</Text>
        </Link>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginBottom: 50,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
});
