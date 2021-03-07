import { colors, shadows } from "../../assets/global-styles/index";

export const styles = {
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#070723",
    alignItems: "center",
    justifyContent: "space-between",
  },
  resultsScreenHeaderContainer: {
    width: "100%",
    height: 120,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerHeading: {
    color: colors.white,
    fontSize: 30,
    fontFamily: "MontserratBold",
  },
  headerScore: {
    color: colors.white,
    fontSize: 25,
  },
  headerMessage: {
    color: colors.white,
    fontSize: 18,
  },
  resultsScreenContentsContainer: {
    width: 355,
    height: 500,
    backgroundColor: "#1a1a36",
    borderRadius: 20,
    alignItems: "center",
  },
  perfectScoreContainer: {
    width: "95%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  flatListContainer: {
    marginTop: 16,
  },
  listItem: {
    flex: 1,
    width: 320,
    height: 218,
    flexDirection: "row",
    marginBottom: 30,
    backgroundColor: "#070723",
    borderRadius: 15,
  },
  checkIconContainer: {
    marginTop: 10,
    marginLeft: 15,
  },
  checkIcon: {
    width: 30,
    height: 30,
  },
  questionText: {
    width: 250,
    height: "100%",
    fontSize: 18,
    color: colors.white,
    textAlign: "left",
    lineHeight: 25,
    marginLeft: 15,
    marginTop: 6,
  },
  contentsMessage: {
    color: colors.white,
    fontSize: 20,
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
    color: colors.white,
  },
};
