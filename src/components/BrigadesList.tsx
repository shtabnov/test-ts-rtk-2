import BrigadesCard from './BrigadesCard';
import { IBrigades } from '../models/IBrigades';
import { IDepartment } from '../models/IDepartments';
import { IConnectionState } from '../models/IConnectionState';
import { FC } from 'react';

interface BrigadesListProps {
    brigades: IBrigades[];
    departments: IDepartment[];
    connectionState: IConnectionState[];
    selectDepartment: number | undefined;
    selectConnectionState: number | undefined;
}

const BrigadesList: FC<BrigadesListProps> = ({
    brigades,
    departments,
    connectionState,
    selectDepartment,
    selectConnectionState,
}) => {
    const filtredBrigades = brigades
        .filter((brigade) => {
            if (selectDepartment === undefined) {
                return brigade;
            } else {
                return brigade.department.id === selectDepartment;
            }
        })
        .filter((brigade) => {
            if (selectConnectionState === undefined) {
                return brigade;
            } else {
                return brigade.connectionStateId === selectConnectionState;
            }
        });
    // handleCountBrigade(filtredBrigades.length);
    return (
        <div className="container w-full flex flex-wrap gap-3 justify-evenly mx-auto my-4 max-sm:mx-2">
            {filtredBrigades?.map((brigade: IBrigades) => {
                return (
                    <BrigadesCard
                        key={brigade.id}
                        brigade={brigade}
                        department={
                            departments?.filter((department: IDepartment) => {
                                return department.id === brigade.department.id;
                            })[0]
                        }
                        connectionState={
                            connectionState?.filter(
                                (cconnection: IConnectionState) => {
                                    return (
                                        cconnection.connectionStateId ===
                                        brigade.connectionStateId
                                    );
                                }
                            )[0]
                        }
                    />
                );
            })}
        </div>
    );
};

export default BrigadesList;
