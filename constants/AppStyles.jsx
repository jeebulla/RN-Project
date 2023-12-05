import { StyleSheet, Dimensions } from "react-native";
const { width, height, fontScale, scale } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  confetti: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  confirmation: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  confirmationText: {
    fontSize: fontScale * 24,
    fontWeight: "bold",
    color: "#390D7C",
    textAlign: "center",
    width: width * 0.65,
  },
  //Buttons
  textWhite: {
    color: "#fff",
    textAlign: "center",
    fontSize: fontScale * 18,
  },
  textColored: {
    color: "#390D7C",
    textAlign: "center",
    fontSize: fontScale * 18,
  },
  coloredBtn: {
    width: width * 0.8,
    textAlign: "center",
    alignSelf: "center",
    backgroundColor: "#390D7C",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  outlineBtn: {
    width: width * 0.8,
    textAlign: "center",
    alignSelf: "center",
    borderColor: "#390D7C",
    borderRadius: 10,
    borderWidth: 2,
    padding: 20,
    marginTop: 20,
  },
  // Rewards Styles
  rewardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  rewardTop: {
    flexDirection: "column",
    backgroundColor: "#390D7C",
    position: "absolute",
    top: 0,
    width: "100%",
    height: height * 0.27,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  backButton: {
    position: "absolute",
    left: 23,
    borderWidth: 1,
    padding: 5,
    borderRadius: "50%",
    borderColor: "#ae9cc9",
  },
  rewardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    top: scale * 15,
  },
  rewardHeading: {
    alignSelf: "center",
    textAlign: "center",
    color: "#fff",
    fontSize: fontScale * 30,
  },
  rewardBody: {
    width: "90%",
    alignSelf: "center",
    bottom: 20,
    padding: 5,
    position: "absolute",
  },
  rewardBodyText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: fontScale * 18,
    width: "60%",
    padding: 10,
    lineHeight: 25,
  },
  trophyTilt: {
    position: "absolute",
    bottom: -75,
    right: 0,
    transform: [{ rotate: "25deg" }],
  },
  timestampContainer: {
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: height * 0.3,
    zIndex: -1,

    borderRadius: 20,
    borderShadowOffset: { width: 2, height: 2 },
    backgroundColor: "#eee",
    boxShadowColor: "#333",
    borderShadowOffset: { width: 1, height: 2 },
    borderShadowRadius: 10,
    color: "#390D7C",
    padding: 10,
    width: "70%",
  },
  timestamp: {
    color: "#333",
    fontWeight: "bold",
    fontSize: fontScale * 16,
  },
  // Reward type style
  send: {
    backgroundColor: "#fdedf1",
    borderWidth: 1,
    borderColor: "#ee6888",
    padding: 5,
    borderRadius: 10,
    marginVertical: 5,
    width: width * 0.9,
  },
  receive: {
    backgroundColor: "#eef8f6",
    borderWidth: 1,
    borderColor: "#54baa9",
    padding: 5,
    borderRadius: 10,
    marginVertical: 5,
    width: width * 0.9,
  },
  rewardInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rewards: {
    position: "absolute",
    top: height * 0.37,
    height: height * 0.6,
  },
  rewardTypeText: {
    color: "#333",
    fontSize: fontScale * 16,
    padding: 10,
    lineHeight: 20,
    width: width * 0.7,
  },
  rewardImage: {
    width: 60,
    height: 60,
    transform: [{ rotate: "-10deg" }],
    borderRadius: 40,
  },
  timestampActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 3,
  },

  // Notification Styles
  notificationContainer: {
    flex: 1,
    alignItems: "center",
  },
  lunchHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 30,
  },
  lunchHeading: {
    alignSelf: "center",
    textAlign: "center",
    color: "#390D7C",
    fontWeight: "bold",
    fontSize: fontScale * 30,
  },
  lunchImage: {
    alignSelf: "center",
    resizeMode: "contain",
  },
  lunchText: {
    color: "#390D7C",
    fontWeight: "semibold",
    fontSize: fontScale * 18,
    width: "90%",
    textAlign: "center",
    alignSelf: "center",
    padding: 10,
    lineHeight: 25,
  },
  testimonial: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#e3e3e3",
    borderRadius: 10,
    marginVertical: 30,
  },
  testimonialText: {
    fontSize: fontScale * 15,
    textAlign: "center",
    color: "#333",
    padding: 15,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#eee",
  },
  author: {
    color: "#444",
    fontWeight: "bold",
    fontSize: fontScale * 14,
  },
});

export default styles;
