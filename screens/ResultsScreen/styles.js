import { wp, hp } from "../../libs/scaling";
import { colors, shadows } from "../../assets/global-styles/index";

export const styles = {
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#070723",
    alignItems: "center",
    justifyContent: "space-around",
  },
  resultsScreenHeaderContainer: {
    width: "100%",
    height: hp(90),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp(20),
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
    width: wp(350),
    height: hp(340),
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
    marginTop: hp(15),
  },
  listItem: {
    flex: 1,
    width: wp(320),
    height: hp(150),
    flexDirection: "row",
    backgroundColor: "#070723",
    borderRadius: 15,
    marginBottom: hp(13),
  },
  checkIconContainer: {
    marginLeft: wp(10),
    marginRight: wp(10),
  },
  checkIcon: {
    width: 30,
    height: 30,
    marginTop: hp(8),
  },
  questionText: {
    width: wp(260),
    fontSize: 15,
    color: colors.white,
    textAlign: "left",
    lineHeight: hp(25),
  },
  contentsMessage: {
    color: colors.white,
    fontSize: 20,
    textAlign: "justify",
  },
  goatImage: { width: 150, height: 150, marginTop: 50 },
  resultsScreenFooterContainer: {
    width: "100%",
    height: hp(90),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: hp(20),
  },
  playAgainButton: {
    width: wp(200),
    borderRadius: 50,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    //shadow - ios
    shadowOffset: shadows.purpleShadowOffset,
    shadowColor: shadows.purpleShadowColor,
    shadowOpacity: shadows.purpleShadowOpacity,
    shadowRadius: shadows.purpleShadowRadius,
    //shadow - android
    elevation: shadows.purpleShadowElevation,
  },
  playAgainButtonGradient: {
    width: wp(200),
    height: hp(50),
    justifyContent: "center",
    alignItems: "center",
  },
  playAgainButtonText: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    color: colors.white,
  },
};
