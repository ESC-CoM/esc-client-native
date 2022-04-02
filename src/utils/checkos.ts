import { Platform } from 'react-native';

export default function checkOs(): string {
  if (Platform.OS === 'android') {
    return 'android';
  }
  if (Platform.OS === 'ios') {
    return 'ios';
  }
  return '';
}
