import React from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Constants from "expo-constants";
import { RkCard, RkAvoidKeyboard } from "react-native-ui-kitten";
import { FontAwesome } from "react-native-vector-icons";
import { scale, scaleVertical } from "./utilities/scale";
import GradientButton from "react-native-gradient-buttons";

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: scaleVertical(28),
    paddingHorizontal: scale(16),
    flex: 1,
    backgroundColor: "rgb(245, 245, 245)"
  },
  back: {
    position: "absolute",
    top: Constants.statusBarHeight + 8,
    left: 16,
    zIndex: 1
  },
  header: {
    marginTop: scaleVertical(36),
    alignItems: "center",
    justifyContent: "center"
  },
  all: {
    flex: 1,
    justifyContent: "space-evenly"
  },
  image: {
    height: scaleVertical(70),
    resizeMode: "contain"
  },
  buttons: {
    justifyContent: "space-between",
    paddingVertical: scaleVertical(16),
    paddingHorizontal: 8
  },
  login: {
    height: 50,
    marginVertical: 8,
    paddingVertical: 0,
    paddingHorizontal: 0
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: scaleVertical(44),
    marginBottom: scaleVertical(8),
    paddingHorizontal: 8
  }
});

class SocialAuth extends React.PureComponent {
  render() {
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={() => true}
        onResponderRelease={() => Keyboard.dismiss()}
      >
        <View style={styles.header}>
          <FontAwesome
            name="id-badge"
            size={scaleVertical(50)}
            style={{ color: "#4A4A4A", marginBottom: scaleVertical(8) }}
          />
          <Text
            style={{ fontSize: scale(28), fontWeight: "800", color: "#4A4A4A" }}
          >
            Social Login
          </Text>
        </View>

        <View style={styles.all}>
          <RkCard rkType="heroImage shadowed" style={styles.buttons}>
            <GradientButton
              style={{ marginTop: 8 }}
              textStyle={{ fontSize: 20 }}
              height={50}
              gradientBegin="#DB4437"
              gradientEnd="#641F19"
              impact
            >
              <FontAwesome
                name="google"
                style={{ color: "white", fontSize: 18 }}
              />{" "}
              Sign-In with Google
            </GradientButton>

            <GradientButton
              style={{ marginTop: 8 }}
              textStyle={{ fontSize: 20 }}
              height={50}
              gradientBegin="#e1306c"
              gradientEnd="#e1306c"
              impact
            >
              <FontAwesome
                name="instagram"
                style={{ color: "white", fontSize: 18 }}
              />{" "}
              Sign-In with Instagram
            </GradientButton>

            <GradientButton
              style={{ marginTop: 8 }}
              textStyle={{ fontSize: 20 }}
              height={50}
              gradientBegin="gold"
              gradientEnd="#F4AC45"
              impact
            >
              <FontAwesome
                name="snapchat"
                style={{ color: "white", fontSize: 18 }}
              />{" "}
              Sign-In with Snapchat
            </GradientButton>

            <GradientButton
              style={{ marginTop: 8 }}
              textStyle={{ fontSize: 20 }}
              height={50}
              gradientBegin="#3b5998"
              gradientEnd="#1B2946"
              impact
            >
              <FontAwesome
                name="facebook"
                style={{ color: "white", fontSize: 18 }}
              />{" "}
              Sign-In with Facebook
            </GradientButton>

            <GradientButton
              style={{ marginTop: 8 }}
              textStyle={{ fontSize: 20 }}
              height={50}
              gradientBegin="#1da1f2"
              gradientEnd="#0B3B58"
              impact
            >
              <FontAwesome
                name="twitter"
                style={{ color: "white", fontSize: 18 }}
              />{" "}
              Sign-In with Twitter
            </GradientButton>
          </RkCard>
        </View>

        <View>
          <View style={styles.textRow}>
            <Text style={{ color: "#484848", fontSize: 18, marginTop: 8 }}>
              Logging in with email instead?
            </Text>
            <Button
              title="Go back."
              onPress={() => this.props.navigation.navigate("SignIn")}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.back}
          onPress={() => this.props.navigation.goBack()}
        >
          <FontAwesome
            name="chevron-left"
            size={27}
            style={{ color: "#4A4A4A" }}
          />
        </TouchableOpacity>
      </RkAvoidKeyboard>
    );
  }
}

export default SocialAuth;
