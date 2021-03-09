import { wp, hp } from "../../libs/scaling";
import { colors, shadows } from "../../assets/global-styles/index";

export const styles = {
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#070723",
    alignItems: "center",
    justifyContent: "space-between",
  },
  homeScreenHeaderContainer: {
    width: "100%",
    height: hp(120),
    alignItems: "center",
    justifyContent: "center",
  },
  headerHeading: {
    color: colors.white,
    fontSize: 30,
    fontFamily: "MontserratBold",
    textAlign: "center",
  },
  homeScreenContentsContainer: {
    height: hp(400),
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
    height: hp(50),
    alignItems: "center",
    marginBottom: hp(40),
  },
  beginButton: {
    width: 200,
    height: "100%",
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
    width: 200,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  beginButtonText: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    color: colors.white,
  },
};
