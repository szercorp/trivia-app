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
    height: 120,
    marginTop: 50,
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
    height: 400,
    alignItems: "center",
    justifyContent: "space-around",
  },
  contentsHeading: {
    color: colors.white,
    fontSize: 25,
    fontFamily: "Montserrat",
    textAlign: "center",
  },
  homeScreenFooterContainer: {
    width: "100%",
    height: 50,
    marginBottom: 50,
    alignItems: "center",
  },
  beginButton: {
    width: 200,
    height: "100%",
    borderRadius: 50,
    overflow: "hidden",
    // margin: 50,
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
    color: colors.offWhite,
  },
};
