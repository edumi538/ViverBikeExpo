import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import { AsyncStorage } from "react-native";
import { NativeModules } from "react-native";

let viverbike;

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const hostName = scriptURL.split("://")[1].split(":")[0];
  viverbike = Reactotron.configure({
    host: hostName,
    name: "Viver Bike APP",
  })
    .useReactNative()
    .use(reactotronRedux())
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  console.viverbike = viverbike;
  viverbike.clear();
}

export default viverbike;
