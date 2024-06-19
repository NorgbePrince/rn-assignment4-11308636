import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const LogIn = () => {
  return (
    <View style={[styles.logIn, styles.logInLayout]}>
      <View style={[styles.statusBarIphoneXOrNewe, styles.logInLayout]}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch1.png")}
        />
        <View style={[styles.rightSide, styles.iconLayout]}>
          <Image
            style={[styles.batteryIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/battery2.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/wifi2.png")}
          />
          <Image
            style={[styles.mobileSignalIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/mobile-signal2.png")}
          />
        </View>
        <View style={[styles.leftSide, styles.timeLayout]}>
          <View style={[styles.time, styles.timeLayout]}>
            <Text style={styles.text}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator1} />
      </View>
      <View style={[styles.statusBarIphoneXOrNewe, styles.logInLayout]}>
        <Image
          style={styles.notchIcon}
          contentFit="cover"
          source={require("../assets/notch1.png")}
        />
        <View style={[styles.rightSide, styles.iconLayout]}>
          <Image
            style={[styles.batteryIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/battery1.png")}
          />
          <Image
            style={[styles.wifiIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={[styles.mobileSignalIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/mobile-signal1.png")}
          />
        </View>
        <View style={[styles.leftSide, styles.timeLayout]}>
          <View style={[styles.time, styles.timeLayout]}>
            <Text style={styles.text1}>9:41</Text>
          </View>
        </View>
      </View>
      <Text
        style={[styles.haventAnAccountContainer, styles.orContinueWithTypo]}
      >
        <Text style={styles.haventAnAccount}>{`Haven’t an account? `}</Text>
        <Text style={styles.register}>Register</Text>
      </Text>
      <View style={styles.headlineParent}>
        <Text style={styles.headline}>Welcome Back 👋</Text>
        <Text style={styles.headline1}>Let’s log in. Apply to jobs!</Text>
      </View>
      <View style={styles.buttonParent}>
        <View style={[styles.button, styles.buttonLayout]}>
          <Text style={styles.next}>Log in</Text>
        </View>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={styles.groupChild} />
          <Text style={[styles.email, styles.nameClr]}>Email</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.groupChild} />
          <Text style={[styles.name, styles.nameClr]}>Name</Text>
        </View>
      </View>
      <View style={[styles.orContinueWithParent, styles.buttonLayout]}>
        <Text style={[styles.orContinueWith, styles.nameClr]}>
          Or continue with
        </Text>
        <View style={[styles.groupInner, styles.lineViewLayout]} />
        <View style={[styles.lineView, styles.lineViewLayout]} />
      </View>
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-55.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-56.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-54.png")}
        />
      </View>
      <Text style={styles.jobizz}>Jobizz</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logInLayout: {
    overflow: "hidden",
    width: 375,
  },
  iconLayout: {
    height: 11,
    position: "absolute",
  },
  timeLayout: {
    height: 21,
    width: 54,
    position: "absolute",
  },
  orContinueWithTypo: {
    fontFamily: FontFamily.circularStd,
    textAlign: "center",
  },
  buttonLayout: {
    width: 327,
    position: "absolute",
  },
  rectangleLayout: {
    height: 52,
    width: 327,
    position: "absolute",
  },
  nameClr: {
    color: Color.grey70,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 99,
    borderTopWidth: 0.5,
    top: 8,
    borderColor: Color.grey70,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildLayout: {
    width: 56,
    height: 56,
    top: 0,
    position: "absolute",
  },
  notchIcon: {
    top: -2,
    left: 78,
    width: 0,
    height: 0,
    position: "absolute",
  },
  batteryIcon: {
    right: 0,
    width: 24,
    top: 0,
  },
  wifiIcon: {
    right: 29,
    width: 15,
    top: 0,
  },
  mobileSignalIcon: {
    right: 50,
    width: 17,
    top: 0,
  },
  rightSide: {
    top: 17,
    right: 15,
    width: 67,
  },
  text: {
    width: 40,
    textAlign: "center",
    color: Color.pureWhite,
    fontFamily: FontFamily.defaultBoldSubheadline,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.regular15_size,
    left: 7,
    top: 1,
    position: "absolute",
  },
  time: {
    borderRadius: Border.br_5xl,
    left: 0,
    top: 0,
  },
  leftSide: {
    top: 12,
    left: 24,
  },
  statusBarIphoneXOrNewe: {
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
    display: "none",
    position: "absolute",
  },
  homeIndicator: {
    top: 778,
    height: 34,
    left: 0,
    position: "absolute",
    width: 375,
  },
  text1: {
    color: Color.black,
    width: 40,
    textAlign: "center",
    fontFamily: FontFamily.defaultBoldSubheadline,
    fontWeight: "600",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.regular15_size,
    left: 7,
    top: 1,
    position: "absolute",
  },
  haventAnAccount: {
    color: "#bdbec2",
  },
  register: {
    color: Color.colorSteelblue,
  },
  haventAnAccountContainer: {
    top: 694,
    left: 102,
    fontSize: FontSize.semibold14_size,
    fontFamily: FontFamily.circularStd,
    position: "absolute",
  },
  headline: {
    fontSize: FontSize.semibold24_size,
    lineHeight: 34,
    textAlign: "left",
    fontFamily: FontFamily.medium12,
    letterSpacing: -0.4,
    color: Color.black,
    fontWeight: "600",
    left: 0,
    top: 0,
    position: "absolute",
  },
  headline1: {
    top: 41,
    lineHeight: 22,
    opacity: 0.4,
    letterSpacing: -0.1,
    textAlign: "left",
    fontFamily: FontFamily.medium12,
    fontSize: FontSize.semibold14_size,
    color: Color.black,
    left: 0,
    position: "absolute",
  },
  headlineParent: {
    top: 147,
    width: 207,
    height: 63,
    left: 24,
    position: "absolute",
  },
  next: {
    fontSize: FontSize.semibold16_size,
    letterSpacing: -0.2,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.medium12,
    textAlign: "center",
    color: Color.pureWhite,
  },
  button: {
    top: 152,
    borderRadius: 5,
    backgroundColor: Color.colorSteelblue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_29xl,
    paddingVertical: Padding.p_base,
    left: 1,
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.grey70,
    borderStyle: "solid",
    height: 52,
    width: 327,
    left: 0,
    top: 0,
    position: "absolute",
  },
  email: {
    left: 15,
    lineHeight: 21,
    top: 15,
    color: Color.grey70,
    fontWeight: "500",
    letterSpacing: -0.1,
    textAlign: "left",
    fontFamily: FontFamily.medium12,
    fontSize: FontSize.semibold14_size,
  },
  rectangleParent: {
    top: 68,
    left: 1,
  },
  name: {
    left: 16,
    lineHeight: 21,
    top: 15,
    color: Color.grey70,
    fontWeight: "500",
    letterSpacing: -0.1,
    textAlign: "left",
    fontFamily: FontFamily.medium12,
    fontSize: FontSize.semibold14_size,
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  buttonParent: {
    top: 261,
    left: 23,
    width: 328,
    height: 208,
    position: "absolute",
  },
  orContinueWith: {
    left: 114,
    fontSize: FontSize.regular13_size,
    fontFamily: FontFamily.circularStd,
    textAlign: "center",
    top: 0,
  },
  groupInner: {
    left: 0,
  },
  lineView: {
    left: 229,
  },
  orContinueWithParent: {
    top: 534,
    height: 16,
    left: 24,
  },
  groupIcon: {
    left: 80,
  },
  groupChild1: {
    left: 0,
  },
  groupChild2: {
    left: 160,
  },
  groupParent: {
    top: 588,
    left: 79,
    width: 216,
    height: 56,
    position: "absolute",
  },
  jobizz: {
    top: 106,
    left: -16,
    fontSize: 22,
    width: 150,
    fontFamily: FontFamily.medium12,
    letterSpacing: -0.4,
    color: Color.colorSteelblue,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  logIn: {
    backgroundColor: Color.bG,
    height: 812,
  },
});

export default LogIn;
