import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  username: "",
  userRole: "",
  organizationCode: "",
  organizationId: "",
  email: "",
  numberofLaunchedSent: 0,
  numberofLaunchesRedeemed: 0,
  numberOfLaunchedReceived: 0,
  numberOfLanchesTransferred: 0,

  isAuthenticated: false,
  authenticate: (
    token,
    username,
    userRole,
    organizationCode,
    organizationId,
    email,
    numberofLaunchedSent,
    numberofLaunchesRedeemed,
    numberOfLaunchedReceived,
    numberOfLanchesTransferred
  ) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState("");
  const [username, setUsername] = useState("");
  const [userRole, setUserRole] = useState("");
  const [organizationCode, setOrganizationCode] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  const [email, setEmail] = useState("");
  const [numberofLaunchedSent, setNumberofLaunchSent] = useState(0);
  const [numberofLaunchesRedeemed, setNumberOfLaunchRedeemed] = useState(0);
  const [numberOfLanchesTransferred, setNumberOfLanchTransferred] = useState(0);
  const [numberOfLaunchedReceived, setNumberOfLanchReceived] = useState(0);

  const authenticate = (
    token,
    username,
    userRole,
    organizationCode,
    organizationId,
    email,
    numberofLaunchedSent,
    numberofLaunchesRedeemed,
    numberOfLaunchedReceived,
    numberOfLanchesTransferred
  ) => {
    setAuthToken(token);
    setUsername(username);
    setUserRole(userRole);
    setOrganizationCode(organizationCode);
    setOrganizationId(organizationId);
    setEmail(email);
    setNumberOfLanchReceived(numberOfLaunchedReceived);
    setNumberOfLanchTransferred(numberOfLanchesTransferred);
    setNumberOfLaunchRedeemed(numberofLaunchesRedeemed);
    setNumberofLaunchSent(numberofLaunchedSent);

    AsyncStorage.setItem("username", username);
    AsyncStorage.setItem("userrole", userRole);
    AsyncStorage.setItem("token", token);
    AsyncStorage.setItem("organization_code", organizationCode);
    AsyncStorage.setItem("organization_id", organizationId);
    AsyncStorage.setItem("email", email);
    AsyncStorage.setItem(
      "number_of_launched_received",
      numberOfLaunchedReceived
    );
    AsyncStorage.setItem(
      "number_of_launched_transferred",
      numberOfLanchesTransferred
    );
    AsyncStorage.setItem(
      "number_of_launched_redeemed",
      numberofLaunchesRedeemed
    );
    AsyncStorage.setItem("number_of_launched_sent", numberofLaunchedSent);
  };

  const logout = () => {
    setAuthToken(null);
    setUsername(null);
    setUserRole(null);
    setOrganizationCode(null);
    setOrganizationId(null);
    setEmail(null);
    setNumberofLaunchSent(0);
    setNumberOfLaunchRedeemed(0);
    setNumberOfLanchTransferred(0);
    setNumberOfLanchReceived(0);
    AsyncStorage.clear();
  };
  const value = {
    token: authToken,
    authenticate: authenticate,
    isAuthenticated: !!authToken,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
