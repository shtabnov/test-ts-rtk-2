import { Select } from 'antd';
import { IConnectionState } from '../models/IConnectionState';
import { IDepartment } from '../models/IDepartments';
import { FC } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { selectDepartment } from '../store/reducers/DepartmentsSlice';
import { selectConnectionState } from '../store/reducers/ConnectionStateSlice';

interface FiltersListProps {
    connectionState: IConnectionState[];
    departments: IDepartment[];
}

const Filters: FC<FiltersListProps> = ({ connectionState, departments }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="filters p-5 sticky top-0 z-10 bg-slate-200 ">
            <div className="container mx-auto flex flex-col justify-between items-center sm:flex-row">
                <div className="selectContainer flex flex-col sm:flex-row">
                    <div className="select-box w-52">
                        <span>Соединение:</span>
                        <Select
                            defaultValue={undefined}
                            style={{ width: 200 }}
                            allowClear
                            options={connectionState?.map(
                                (status: IConnectionState) => {
                                    return {
                                        id: status.connectionStateId,
                                        value: status.connectionStateId,
                                        label: status.name,
                                    };
                                }
                            )}
                            onChange={(value: number) =>
                                dispatch(selectConnectionState(value))
                            }
                        />
                    </div>
                    <div className="select-box w-52">
                        <span>Департамент:</span>
                        <Select
                            defaultValue={undefined}
                            style={{ width: 200 }}
                            allowClear
                            options={departments?.map(
                                (department: IDepartment) => {
                                    return {
                                        id: department.id,
                                        value: department.id,
                                        label: department.name,
                                    };
                                }
                            )}
                            onChange={(value: number) =>
                                dispatch(selectDepartment(value))
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filters;
