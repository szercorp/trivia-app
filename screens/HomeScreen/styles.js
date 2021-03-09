import { wp, hp } from "../../libs";
import { colors, shadows } from "../../assets/global-styles/index";

export const styles = {
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#070723",
    alignItems: "center",
    justifyContent: "space-around",
  },
  homeScreenHeaderContainer: {
    width: "100%",
    height: hp(90),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp(20),
  },
  headerHeading: {
    width: wp(335),
    color: colors.white,
    fontSize: 30,
    fontFamily: "MontserratBold",
    textAlign: "center",
  },
  homeScreenContentsContainer: {
    height: hp(150),
    alignItems: "center",
    justifyContent: "space-around",
  },
  contentsHeading: {
    width: wp(330),
    color: colors.white,
    fontSize: 20,
    fontFamily: "Montserrat",
    textAlign: "center",
  },
  homeScreenFooterContainer: {
    width: "100%",
    height: hp(90),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp(20),
  },
  beginButton: {
    width: wp(200),
    height: hp(50),
    borderRadius: 50,
    overflow: "hidden",
    //shadow - ios
    shadowOffset: shadows.purpleShadowOffset,
    shadowColor: shadows.purpleShadowColor,
    shadowOpacity: shadows.purpleShadowOpacity,
    shadowRadius: shadows.purpleShadowRadius,
    //shadow - android
    elevation: shadows.purpleShadowElevation,
  },
  beginButtonGradient: {
    width: wp(200),
    height: hp(50),
    justifyContent: "center",
    alignItems: "center",
  },
  beginButtonText: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    color: colors.white,
  },
};
