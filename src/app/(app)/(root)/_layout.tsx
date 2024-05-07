import useAppSelector from "@/common/hooks/useAppSelector";
import { selectLoggedIn } from "@/features/auth/index.slice.";
import { Redirect, Stack } from "expo-router";
import React from "react";

export default function () {
    const loggedIn = useAppSelector(selectLoggedIn);

    if(!loggedIn) {
        console.log('Not logged in');
        return <Redirect href={'/auth/'} />;
    }

	return (
		<Stack
			screenOptions={{
				animation: 'slide_from_left',
				headerShadowVisible: false,
				headerStyle: {},
				headerTitleStyle: {
					fontFamily: 'SFBold',
				},
			}}
		/>
	);
}