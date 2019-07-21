
import { PixelRatio, Dimensions } from 'react-native';
// code taken from = https://github.com/react-native-training/react-native-elements/blob/master/src/helpers/normalizeText.js

const normalize = (
  size, 
  pixelRatio = PixelRatio.get(), 
  width = Dimensions.get('window').width,
  height = Dimensions.get('window').height
  ) => {
  // iphone 5s and older Androids
  if ( 2 <= pixelRatio && pixelRatio < 3 && width < 360) return size * 0.95
  // iphone 5
  if (2 <= pixelRatio && pixelRatio < 3 && height < 667) return size;
  // iphone 6-6s
  if (2 <= pixelRatio && pixelRatio < 3 && height >= 667 && height <= 735) return size * 1.15;
  // older phablets
  if (2 <= pixelRatio && pixelRatio < 3) return size * 1.25;
  // catch Android font scaling on small machines
  // where pixel ratio / font scale ratio => 3:3
  if (3 <= pixelRatio && pixelRatio < 3.5 && width <= 360) return size;
  // Catch other weird android width sizings
  if ( 3 <= pixelRatio && pixelRatio < 3.5 && height < 667) return size * 1.15;
  if ( 3 <= pixelRatio && pixelRatio < 3.5 && height >= 667 && height <= 735) return size * 1.2;
  // ie iphone 6s plus / 7 plus / mi note 等等
  if (3 <= pixelRatio && pixelRatio < 3.5) return size * 1.27;
  // catch Android font scaling on small machines
  // where pixel ratio / font scale ratio => 3:3
  if (pixelRatio >= 3.5 && width <= 360) return size;
  if (pixelRatio >= 3.5 && height < 667) return size * 1.2;
  if (pixelRatio >= 3.5 && height >= 667 && height <= 735) return size * 1.25;
  // catch larger phablet devices
  if (pixelRatio >= 3.5) return size * 1.4;
  return size;
};

export default normalize; // eslint-disable-line no-undef