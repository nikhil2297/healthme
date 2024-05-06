import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

/**
 * Creates and configures the Redux store.
 * 
 * @param reducer - The root reducer function for the store.
 * @param middleware - An array of middleware functions to be applied to the store.
 * @returns The configured Redux store.
 */
export const store = configureStore({
    reducer,
    middleware: [thunk] 
});

/**
 * The persistor object used to persist the Redux store.
 */
export const persistor = persistStore(store);

/**
 * The root state type of the Redux store.
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;