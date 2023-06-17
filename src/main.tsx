import "@/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Calendar from "./pages/Calendar";
import NotFound from "./pages/misc/NotFound";
import ErrorBoundary from "./pages/misc/ErrorBoundary";
import Layout from "./components/layout/Layout";
import Trainings from "./pages/training/Trainings";
import Training from "./pages/training/Training";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route errorElement={<ErrorBoundary />}>
          <Route index element={<Calendar />} />
          <Route path='trainingen'>
            <Route index element={<Trainings />} />
            <Route path=':id' element={<Training />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Route>
    </>
  )
);

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider
      client={
        new QueryClient({
          defaultOptions: {
            queries: {
              retry: false,
              staleTime: 1000 * 60 * 5,
            },
          },
        })
      }
    >
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
