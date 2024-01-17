import { createBrowserRouter } from "react-router-dom"
import Homepage from "../pages/Homepage"

const routes = [
  {
      path: "/",
      element: <Homepage />,
    },
]

const routeBrowser = createBrowserRouter(routes)

export default routeBrowser