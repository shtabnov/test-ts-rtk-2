import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchDepartments } from './ActionCreators';
import { IDepartment } from '../../models/IDepartments';

interface DepartmentsState {
    departments: IDepartment[];
    selectDepartment: number | undefined;
}

const initialState: DepartmentsState = {
    departments: [],
    selectDepartment: undefined,
};

export const DepartmentsSlice = createSlice({
    name: 'departments',
    initialState,
    reducers: {
        selectDepartment(state, action) {
            state.selectDepartment = action.payload;
        },
    },
    extraReducers: {
        [fetchDepartments.fulfilled.type]: (
            state,
            action: PayloadAction<IDepartment[]>
        ) => {
            state.departments = action.payload;
        },
    },
});
export const { selectDepartment } = DepartmentsSlice.actions;
export default DepartmentsSlice.reducer;
