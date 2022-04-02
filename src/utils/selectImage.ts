import ImagePicker from 'react-native-image-crop-picker';
import checkOs from './checkos';
import getElement from './getOption';

export default async function selectImage(element: string) {
  try {
    const os = checkOs();
    const option = getElement(os, element);
    const result = await ImagePicker.openPicker(option);
    return Promise.resolve(result);
  } catch {
    return Promise.reject('cancel');
  }
}
