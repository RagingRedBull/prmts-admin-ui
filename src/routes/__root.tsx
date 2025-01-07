import { createRootRoute, Outlet } from "@tanstack/react-router";
import { lazy } from "react";
import { AppLayout } from "../components/AppLayout";

const TanStackRouterDevtools =
    import.meta.env.NODE_ENV === 'production'
        ? () => null // Render nothing in production
        : lazy(() =>
            // Lazy load in development
            import('@tanstack/router-devtools').then((res) => ( {
                default: res.TanStackRouterDevtools,
                // For Embedded Mode
                // default: res.TanStackRouterDevtoolsPanel
            } )),
        )

const RootComponent = () => {
    return (
        <AppLayout>
            <Outlet/>
            <TanStackRouterDevtools/>
        </AppLayout>
    )
}

export const Route = createRootRoute({
    component: RootComponent
})