import { ThemeContextProvider } from "@/common/context/theme-provider";
import { persistor, store } from "@/store/configureStore";
import { SplashScreen, Stack } from "expo-router";
import { colorScheme } from "nativewind";
import React, { useCallback, useState } from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";


export default function () {

    const [stateLoaded, setStateLoaded] = useState(false);
    
    const onLayout = useCallback(() => {
        SplashScreen.hideAsync();
    }, [])

    const onBeforeLift = useCallback(() => {
        setStateLoaded(true);
    }, [])

    return <Provider store={store}>
        <PersistGate persistor={persistor} onBeforeLift={onBeforeLift}>
            {
                stateLoaded && (<GestureHandlerRootView 
                onLayout={onLayout}
                className="flex-1"
                >
                    <RootLayout/>
                </GestureHandlerRootView>)
            }
        </PersistGate>
    </Provider>
}


const RootLayout = () => {
            return (
                <ThemeContextProvider>
                    <StatusBar />
                    <Stack
                        screenOptions={{
                            headerShown: false,
                            animation: 'slide_from_bottom',
                        }}
                    />
                </ThemeContextProvider>
            );
}