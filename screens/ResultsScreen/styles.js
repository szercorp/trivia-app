import { colors, shadows } from "../../assets/global-styles/index";

export const styles = {
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#070723",
    alignItems: "center",
    justifyContent: "space-between",
  },
  resultsScreenHeaderContents: {
    width: "100%",
    height: 100,
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
  headerScore: {
    color: colors.white,
    fontSize: 25,
  },
  resultsScreenContentsContainer: {
    width: 350,
    height: 500,
    backgroundColor: "#1a1a36",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  contentsMessage: {
    color: colors.white,
    fontSize: 25,
    textAlign: "center",
  },
  goatImage: { width: 150, height: 150, marginTop: 50 },
  resultsScreenFooterContainer: {
    width: "100%",
    height: 50,
    marginBottom: 50,
    alignItems: "center",
  },
  playAgainButton: {
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
  playAgainButtonGradient: {
    width: 200,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  playAgainButtonText: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    color: colors.offWhite,
  },
};
