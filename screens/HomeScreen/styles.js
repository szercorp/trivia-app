import { colors, shadows } from "../../assets/global-styles/index";

export const styles = {
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#070723",
    alignItems: "center",
    justifyContent: "space-between",
  },
  homeScreenHeading: {
    width: 300,
    color: colors.white,
    fontSize: 30,
    fontFamily: "MontserratBold",
    marginTop: 50,
    textAlign: "center",
  },
  homeScreenSubheading: {
    width: 250,
    color: colors.white,
    fontSize: 20,
    fontFamily: "Montserrat",
    marginTop: 100,
    textAlign: "center",
  },
  beginButton: {
    width: 311,
    height: 50,
    borderRadius: 50,
    overflow: "hidden",
    margin: 50,
    //shadow - ios
    shadowOffset: shadows.purpleShadowOffset,
    shadowColor: shadows.purpleShadowColor,
    shadowOpacity: shadows.purpleShadowOpacity,
    shadowRadius: shadows.purpleShadowRadius,
    //shadow - android
    elevation: shadows.purpleShadowElevation,
  },
  beginButtonGradient: {
    width: 311,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  beginButtonText: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    color: colors.offWhite,
  },
};
