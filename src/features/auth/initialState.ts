type AuthState = {
    loggedIn: boolean;
    timestamp: number;
}

export const initialState: AuthState = {
    loggedIn: false,
    timestamp: 0
}