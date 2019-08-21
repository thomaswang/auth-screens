import React from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
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
  content: {
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: scaleVertical(12)
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#D3D3D3",
    borderRadius: 50,
    padding: 18,
    marginVertical: scaleVertical(6),
    fontWeight: "bold"
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: scaleVertical(44),
    marginBottom: scaleVertical(8),
    paddingHorizontal: 8
  }
});

class ForgotPassword extends React.PureComponent {
  render() {
    return (
      <RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={() => true}
        onResponderRelease={() => Keyboard.dismiss()}
      >
        <View style={styles.header}>
          <FontAwesome
            name="unlock-alt"
            size={scaleVertical(50)}
            style={{ color: "#4A4A4A" }}
          />
          <Text
            style={{ fontSize: scale(28), fontWeight: "800", color: "#4A4A4A" }}
          >
            Password Reset
          </Text>
        </View>

        <View style={styles.all}>
          <RkCard rkType="heroImage shadowed" style={styles.content}>
            <TextInput
              placeholder="EMAIL"
              placeholderTextColor="#707070"
              style={styles.input}
            />
            <GradientButton
              style={{ marginTop: 8 }}
              textStyle={{ fontSize: 20 }}
              text="RESET"
              height={50}
              violetPink
              impact
            />
          </RkCard>
        </View>

        <View>
          <View style={styles.textRow}>
            <Text style={{ color: "#484848", fontSize: 18, marginTop: 8 }}>
              Remember your password?
            </Text>
            <Button
              title="Go to login."
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

export default ForgotPassword;
