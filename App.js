import { createStackNavigator } from "react-navigation";

import SignIn from "./src/SignIn";
import SocialAuth from "./src/SocialAuth";
import SignUp from "./src/SignUp";
import ForgotPassword from "./src/ForgotPassword";

const AuthStack = createStackNavigator(
  {
    SignIn,
    SignUp,
    ForgotPassword,
    SocialAuth
  },
  {
    headerMode: "none"
  }
);

export default AuthStack;
