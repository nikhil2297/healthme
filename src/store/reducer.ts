import authReducer from '@/features/auth/index.slice.';
import userReducer from '@/features/user/index.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const rootPersistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['temp'],
}

const combineReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
});

type MainReducer = ReturnType<typeof combineReducer>;

const persistedReducer = persistReducer<MainReducer>(rootPersistConfig, combineReducer);

export default function reducer(state: any, action: any) {
    if (action.type === 'RESET') {
        state = undefined;
    }
    return persistedReducer(state, action);
}