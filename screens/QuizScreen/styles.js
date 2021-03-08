import { wp, hp } from "../../libs/scaling";
import { colors, shadows } from "../../assets/global-styles/index";

export const styles = {
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#070723",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quizScreenHeaderContainer: {
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
  quizScreenContentsContainer: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  questionsContainer: {
    width: wp(350),
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
    height: hp(50),
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: hp(40),
  },
  trueButton: {
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
