import { colors, shadows } from "../../assets/global-styles/index";

export const styles = {
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#070723",
    alignItems: "center",
    justifyContent: "space-between",
  },
  quizScreenHeading: {
    width: 300,
    color: colors.white,
    fontSize: 30,
    fontFamily: "MontserratBold",
    marginTop: 50,
    textAlign: "center",
  },
  quizScreenContents: {
    alignItems: "center",
  },
  questionsContainer: {
    width: 350,
    height: 400,
    backgroundColor: "#1a1a36",
    borderRadius: 20,
  },
  questionsNumber: {
    color: colors.white,
    fontSize: 20,
    marginTop: 25,
  },
  checkButtonContainer: {
    width: 350,
    height: 50,
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
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
    color: colors.offWhite,
  },
};
