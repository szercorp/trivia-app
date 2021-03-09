import { wp, hp } from "../../libs";
import { colors, shadows } from "../../assets/global-styles/index";

export const styles = {
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#070723",
    alignItems: "center",
    justifyContent: "space-around",
  },
  quizScreenHeaderContainer: {
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
  quizScreenContentsContainer: {
    height: hp(250),
    width: wp(335),
    alignItems: "center",
    justifyContent: "space-around",
  },
  questionsContainer: {
    width: wp(335),
    height: hp(200),
    backgroundColor: "#1a1a36",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  questionsText: {
    color: colors.white,
    fontSize: 20,
    textAlign: "justify",
    width: "100%",
    lineHeight: hp(25),
    padding: 20,
  },
  questionsNumber: {
    color: colors.white,
    fontSize: 25,
  },
  quizScreenFooterContainer: {
    width: "100%",
    height: hp(90),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: hp(20),
  },
  trueButton: {
    height: hp(50),
    backgroundColor: "green",
    width: wp(150),
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  trueButtonText: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    color: colors.offWhite,
  },
  falseButton: {
    height: hp(50),
    backgroundColor: "red",
    width: wp(150),
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  falseButtonText: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    color: colors.white,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#070723",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingContainerText: {
    color: colors.white,
    fontSize: 30,
    fontFamily: "MontserratBold",
  },
};
