import { FC } from "react"
import { RouterProvider } from "react-router-dom"
import { routes } from "@/shared/libs/react-router-dom"

export const App: FC = () => {
  return <RouterProvider router = {routes} />
}