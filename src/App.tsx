import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import {
    fetchBrigades,
    fetchDepartments,
    fetchConnectionState,
} from './store/reducers/ActionCreators';
import Loading from './components/Loading';
import Filters from './components/Filters';
import BrigadesList from './components/BrigadesList';

function App() {
    const dispatch = useAppDispatch();

    const { brigades, isLoading, error } = useAppSelector(
        (state) => state.brigadesReducer
    );
    const { departments, selectDepartment } = useAppSelector(
        (state) => state.departmentsReducer
    );
    const { connectionState, selectConnectionState } = useAppSelector(
        (state) => state.connectionStateReducer
    );

    useEffect(() => {
        dispatch(fetchBrigades());
        dispatch(fetchDepartments());
        dispatch(fetchConnectionState());
    }, [dispatch]);

    let content;

    if (isLoading) {
        content = <Loading />;
    }
    if (!isLoading) {
        content = (
            <>
                <header className="w-screen sticky top-0 z-10">
                    <Filters
                        departments={departments}
                        connectionState={connectionState}
                    />
                </header>
                <BrigadesList
                    brigades={brigades}
                    departments={departments}
                    connectionState={connectionState}
                    selectDepartment={selectDepartment}
                    selectConnectionState={selectConnectionState}
                />
            </>
        );
    }

    if (error) {
        content = <h1>{error}</h1>;
    }

    return (
        <div className="container h-screen mx-auto flex flex-wrap gap-3 items-center justify-center">
            {content}
        </div>
    );
}

export default App;
