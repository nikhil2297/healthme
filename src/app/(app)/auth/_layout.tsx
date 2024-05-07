import useAppSelector from "@/common/hooks/useAppSelector";
import { Redirect, Stack } from "expo-router";

export default function () {
    const loggedIn = useAppSelector((state) => state.auth.loggedIn);

    if (loggedIn) {
        return <Redirect href={'/'} />;
    }

    console.log('On Login Layout');

    return (
        <Stack
        screenOptions={{
            animation: 'slide_from_left',
            headerShadowVisible: false,
        }}
        initialRouteName="login"
        >

            <Stack.Screen name="login"></Stack.Screen>

        </Stack>
    )
}