import React, { useContext } from "react";
import { themes } from '../../constants/theme';
import { useColorScheme } from "nativewind";
import { View } from "react-native";

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = React.createContext<{
    theme: "dark" | "light"
}>({theme: "dark"});

export const ThemeContextProvider = ({children}: ThemeProviderProps) => {
    const { colorScheme } = useColorScheme();

    return (
        <ThemeContext.Provider value={{ theme: colorScheme }}>
            <View style={themes[colorScheme]} className="flex-1">
                {children}
            </View>
        </ThemeContext.Provider>
    )
};

export function useThemeContext() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within an ThemeProvider');
    }

    
    return context;
}