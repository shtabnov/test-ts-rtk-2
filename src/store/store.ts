import { combineReducers, configureStore } from '@reduxjs/toolkit';
import brigadesReducer from './reducers/BrigadesSlice';
import departmentsReducer from './reducers/DepartmentsSlice';
import connectionStateReducer from './reducers/ConnectionStateSlice';

const rootReducer = combineReducers({
    brigadesReducer,
    departmentsReducer,
    connectionStateReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
