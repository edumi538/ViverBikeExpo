import { ResponseType } from "expo-auth-session";
import * as Facebook from "expo-auth-session/providers/facebook";
import { useEffect } from "react";
import { Button } from "react-native";
import * as AuthSession from "expo-auth-session";

export default function LogFacebook() {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: "518791596770097",
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    responseType: ResponseType.Code,
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      console.log("teste:", code);
    }
  }, [response]);

  return (
    <Button disabled={!request} title="Login" onPress={() => promptAsync()} />
  );
}
