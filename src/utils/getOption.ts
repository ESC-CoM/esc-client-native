import { Options } from 'react-native-image-crop-picker';
import {
  commonSize1,
  commonSize2,
  color,
  title1,
  title2,
  chooseText,
  cancelText,
  loadingText,
} from '../__mocks__/albumoptions';

export default function getOption(os: string, element: string): Options {
  if (os === 'android') {
    if (element === 'profile') {
      return {
        width: commonSize1,
        height: commonSize1,
        mediaType: 'photo',
        cropping: true,
        freeStyleCropEnabled: true,
        cropperCircleOverlay: true,
        cropperActiveWidgetColor: color,
        cropperToolbarTitle: title1,
      };
    }
    if (element === 'auth') {
      return {
        width: commonSize1,
        height: commonSize2,
        mediaType: 'photo',
        cropping: true,
        freeStyleCropEnabled: true,
        cropperActiveWidgetColor: '#ff5c66',
        cropperToolbarTitle: title2,
      };
    }
  }
  if (os === 'ios') {
    if (element === 'profile') {
      return {
        width: commonSize1,
        height: commonSize1,
        mediaType: 'photo',
        cropping: true,
        freeStyleCropEnabled: true,
        cropperCircleOverlay: true,
        cropperChooseText: chooseText,
        cropperCancelText: cancelText,
        loadingLabelText: loadingText,
      };
    }
    if (element === 'auth') {
      return {
        width: commonSize1,
        height: commonSize2,
        mediaType: 'photo',
        cropping: true,
        freeStyleCropEnabled: true,
        cropperChooseText: chooseText,
        cropperCancelText: cancelText,
        loadingLabelText: loadingText,
      };
    }
  }
  return {};
}
