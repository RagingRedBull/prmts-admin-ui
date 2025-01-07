import { Layer, Stage } from "react-konva";
import { LoadingOverlay } from "@mantine/core";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Route } from "../../../routes/floors/$sequence";
import { getFloorsQueryFn } from "../floorApi";
import { getCompartmentsByFloorIdQueryFn } from "../../compartment/compartmentApi";

export const ViewFloorPage = () => {
    const { sequence } = Route.useParams();
    const {  isPending: isPendingFloorData, data: floorData } = useQuery({
        queryKey: ['floors'],
        queryFn: getFloorsQueryFn,
        select: (floors) => floors.find(f => f.sequence === Number(sequence)),
        refetchOnMount: false,
    });
    const {isPending: isPendingCompartmentsData, data: compartmentsData} = useQuery({
        queryKey: ['compartments', sequence],
        queryFn: () => getCompartmentsByFloorIdQueryFn(floorData?.id),
        staleTime: 432000,
        enabled: !!floorData,
        refetchOnMount: false,
        refetchOnReconnect: false,
    })
    useEffect(() => {
        if(!floorData) return;
        document.title = `PRMTS Admin - ${floorData.name} Floor`;
    }, [floorData, sequence]);

    return (
        <>
            <LoadingOverlay visible={ isPendingFloorData || isPendingCompartmentsData } zIndex={ 1000 }/>
            <Stage width={ window.innerWidth } height={ window.innerHeight }>
                <Layer>

                </Layer>
            </Stage>
        </>
    )
}