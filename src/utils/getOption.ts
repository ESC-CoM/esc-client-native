import { Options } from 'react-native-image-crop-picker';
import {
  common_size_1,
  common_size_2,
  color,
  title_1,
  title_2,
  choose_text,
  cancel_text,
  loading_text,
} from '../__mocks__/albumoptions';

export default function getOption(os: string, element: string): Options {
  if (os === 'android') {
    if (element === 'profile') {
      return {
        width: common_size_1,
        height: common_size_1,
        mediaType: 'photo',
        cropping: true,
        freeStyleCropEnabled: true,
        cropperCircleOverlay: true,
        cropperActiveWidgetColor: color,
        cropperToolbarTitle: title_1,
      };
    }
    if (element === 'auth') {
      return {
        width: common_size_1,
        height: common_size_2,
        mediaType: 'photo',
        cropping: true,
        freeStyleCropEnabled: true,
        cropperActiveWidgetColor: '#ff5c66',
        cropperToolbarTitle: title_2,
      };
    }
  }
  if (os === 'ios') {
    if (element === 'profile') {
      return {
        width: common_size_1,
        height: common_size_1,
        mediaType: 'photo',
        cropping: true,
        freeStyleCropEnabled: true,
        cropperCircleOverlay: true,
        cropperChooseText: choose_text,
        cropperCancelText: cancel_text,
        loadingLabelText: loading_text,
      };
    }
    if (element === 'auth') {
      return {
        width: common_size_1,
        height: common_size_2,
        mediaType: 'photo',
        cropping: true,
        freeStyleCropEnabled: true,
        cropperChooseText: choose_text,
        cropperCancelText: cancel_text,
        loadingLabelText: loading_text,
      };
    }
  }
  return {};
}
