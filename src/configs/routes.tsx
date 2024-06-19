import Home from '@/pages/home';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
];

const routeBrowser = createBrowserRouter(routes);

export default routeBrowser;
