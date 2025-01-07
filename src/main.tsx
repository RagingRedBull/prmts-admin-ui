import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, MantineColorsTuple, MantineProvider } from "@mantine/core";

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

export const queryClient = new QueryClient();

const orange : MantineColorsTuple = [
    "#fff6e0",
    "#ffebca",
    "#ffd699",
    "#ffc063",
    "#ffad36",
    "#ffa118",
    "#ff9a04",
    "#e48600",
    "#cb7600",
    "#b16500"
]

const red : MantineColorsTuple = [
    "#ffe7e9",
    "#ffcfd1",
    "#ff9ca2",
    "#fd676f",
    "#fb3943",
    "#fa1c28",
    "#fb0819",
    "#e0000d",
    "#c8000a",
    "#af0005"
];

const theme = createTheme({
    colors: {
        'my-orange': orange,
        'my-red': red
    }
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={ router }/>
            </QueryClientProvider>
        </MantineProvider>
    </StrictMode>,
)
