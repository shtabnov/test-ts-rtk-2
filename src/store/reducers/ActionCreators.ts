import { IBrigades } from '../../models/IBrigades';
import { IDepartment } from '../../models/IDepartments';
import { IConnectionState } from '../../models/IConnectionState';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBrigades = createAsyncThunk(
    'brigades/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IBrigades[]>(
                'https://v1336-api-test.onrender.com/getBrigadesData'
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('ошибка при загрузке данных');
        }
    }
);

export const fetchDepartments = createAsyncThunk(
    'departments/fetchAll',
    async () => {
        const response = await axios.get<IDepartment[]>(
            'https://v1336-api-test.onrender.com/getDepartments'
        );
        return response.data;
    }
);

export const fetchConnectionState = createAsyncThunk(
    'connectionState/fetchAll',
    async () => {
        const response = await axios.get<IConnectionState[]>(
            'https://v1336-api-test.onrender.com/getConnectionState'
        );
        return response.data;
    }
);
