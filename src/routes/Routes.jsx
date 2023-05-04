import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import ChefsRecipes from "../pages/home/chefsRecipes/ChefsRecipes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/chefInfo/:id',
                element: <ChefsRecipes></ChefsRecipes>,
                loader: ({ params }) => fetch(`http://localhost:5000/chefsInfo/${params.id}`)
            }
        ]
    }
])

export default router;