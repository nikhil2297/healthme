import { Slot, SplashScreen } from "expo-router";
export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
	initialRouteName: '(root)',
};

SplashScreen.preventAutoHideAsync();

export default function () {
  return <Slot />;
}
