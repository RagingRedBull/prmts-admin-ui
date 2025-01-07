import { axiosClient } from "../../api/axiosClient";
import { Floor } from "./Floor";

export const getFloorsQueryFn = () => {
    return axiosClient.get('/floors').then(({data} : {data: Floor[]}) => data)
};

export const getFloorBySequenceQueryFn = (sequence: number) => {
    return axiosClient.get('/floors', {params: {sequence}}).then(({data} : {data: Floor[]}) => data)
};