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
    height: 120,
    marginTop: 50,
    alignItems: "center",
    // justifyContent: "center",
  },
  headerHeading: {
    color: colors.white,
    fontSize: 30,
    fontFamily: "MontserratBold",
    textAlign: "center",
  },
  quizScreenContentsContainer: {
    height: 500,
    alignItems: "center",
    justifyContent: "space-around",
  },
  questionsContainer: {
    width: 350,
    height: 300,
    backgroundColor: "#1a1a36",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  questionsText: {
    color: colors.white,
    fontSize: 20,
    textAlign: "left",
    width: 300,
    lineHeight: 25,
  },
  questionsNumberContainer: {
    marginBottom: 45,
  },
  questionsNumber: {
    color: colors.white,
    fontSize: 20,
  },
  quizScreenFooterContainer: {
    width: "100%",
    height: 50,
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  trueButton: {
    backgroundColor: "green",
    width: 150,
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
    width: 150,
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
