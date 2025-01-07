import { createFileRoute } from '@tanstack/react-router'
import { ViewFloorPage } from "../../features/floor/pages/ViewFloorPage";

export const Route = createFileRoute('/floors/$sequence')({
  component: ViewFloorPage,
})