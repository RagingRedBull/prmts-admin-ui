import { createFileRoute, Navigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getFloorsQueryFn } from "../features/floor/floorApi";
import { LoadingOverlay } from "@mantine/core";

export const Index = () => {
    const {  isPending, data: floorData } = useQuery({
        queryKey: ['floors'],
        queryFn: getFloorsQueryFn,
        staleTime: Number.POSITIVE_INFINITY
    });

    return (
        <>
            <LoadingOverlay visible={isPending} title="Loading..." />
            { floorData && <Navigate to={ `/floors/${ floorData[0].sequence }` }/> }
        </>
    )
}

export const Route = createFileRoute('/')({
    component: Index,
})
