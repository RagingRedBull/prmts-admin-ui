import { axiosClient } from "../../api/axiosClient";

export const getCompartmentsByFloorIdQueryFn = (floorId : string | undefined) => {
    return axiosClient.get('/compartments', {params: {floorId}}).then(({ data }) => data)
}