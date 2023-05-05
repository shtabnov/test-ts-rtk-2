import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchConnectionState } from './ActionCreators';
import { IConnectionState } from '../../models/IConnectionState';

interface DepartmentsState {
    connectionState: IConnectionState[];
    selectConnectionState: number | undefined;
}

const initialState: DepartmentsState = {
    connectionState: [],
    selectConnectionState: undefined,
};

export const ConnectionStateSlice = createSlice({
    name: 'connectionState',
    initialState,
    reducers: {
        selectConnectionState(state, action) {
            state.selectConnectionState = action.payload;
        },
    },
    extraReducers: {
        [fetchConnectionState.fulfilled.type]: (
            state,
            action: PayloadAction<IConnectionState[]>
        ) => {
            state.connectionState = action.payload;
        },
    },
});

export const { selectConnectionState } = ConnectionStateSlice.actions;
export default ConnectionStateSlice.reducer;
