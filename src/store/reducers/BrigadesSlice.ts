import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBrigades } from '../../models/IBrigades';
import { fetchBrigades } from './ActionCreators';
import { IDepartment } from '../../models/IDepartments';
import { IConnectionState } from '../../models/IConnectionState';

interface BrigadesState {
    brigades: IBrigades[];
    // filtredBrigades: IBrigades[];
    isLoading: boolean;
    error: string;
    department: undefined | IDepartment;
    connectionState: undefined | IConnectionState;
}

const initialState: BrigadesState = {
    brigades: [],
    // filtredBrigades: [],
    isLoading: false,
    error: '',
    department: undefined,
    connectionState: undefined,
};

export const BrigadesSlice = createSlice({
    name: 'brigades',
    initialState,
    reducers: {
        // filterByDepartments(state, action: PayloadAction<number | undefined>) {
        //     state.filtredBrigades = state.brigades.filter((brigade) => {
        //         if (action.payload === undefined) {
        //             return brigade;
        //         }
        //         return brigade.department.id === action.payload;
        //     });
        // },
        // filterByConnectionState(
        //     state,
        //     action: PayloadAction<number | undefined>
        // ) {
        //     state.filtredBrigades = state.brigades.filter((brigade) => {
        //         if (action.payload === undefined) {
        //             return brigade;
        //         }
        //         return brigade.connectionStateId === action.payload;
        //     });
        // },
    },
    extraReducers: {
        [fetchBrigades.fulfilled.type]: (
            state,
            action: PayloadAction<IBrigades[]>
        ) => {
            state.isLoading = false;
            state.error = '';
            state.brigades = action.payload;
            // state.filtredBrigades = state.brigades;
        },
        [fetchBrigades.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchBrigades.rejected.type]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});
// export const { filterByDepartments, filterByConnectionState } = BrigadesSlice.actions;
export default BrigadesSlice.reducer;
