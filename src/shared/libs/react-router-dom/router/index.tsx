import { Layout } from "@/app/Layouts/ui/Layout";
import { HomePage } from "@/pages/Home";
import { NotFoundPage } from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <HomePage />
            </Layout>
        ),
    },
    {
        path: "*",
        element: <NotFoundPage />
    },
])

// export const routes = [
//     {
//         path: "/",
//         element: <HomePage />
//     },
//     {
//         path: "*",
//         element: <NotFoundPage />
//     },
// ]