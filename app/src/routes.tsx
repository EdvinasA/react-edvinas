import type { Router } from '@remix-run/router';
import { createBrowserRouter } from 'react-router-dom';
import { RouteObject } from "react-router";
import AboutComponent from "./components/AboutComponent/AboutComponent";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import PortfolioComponent from "./components/PortfolioComponent/PortfolioComponent";
import HomeComponent from "./components/HomeComponent/HomeComponent";

const routeOptions: RouteObject[] = [
  {
    path: '/',
    element: <HomeComponent/>
  },
  {
    path: '/about',
    element: <AboutComponent/>
  },
  {
    path: '/contact',
    element: <ContactComponent/>
  },
  {
    path: '/portfolio',
    element: <PortfolioComponent/>
  }
];

export const routes: Router = createBrowserRouter(routeOptions);
