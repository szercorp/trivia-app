import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from "react-native-responsive-screen";

const wp = (dimension) => {
  return wp2dp((dimension / 375) * 100 + "%");
};
const hp = (dimension) => {
  return hp2dp((dimension / 667) * 100 + "%");
};

export { wp, hp };
