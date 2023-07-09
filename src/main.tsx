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
import Calendar from "./pages/calendar/Calendar";
import NotFound from "./pages/misc/NotFound";
import ErrorBoundary from "./pages/misc/ErrorBoundary";
import Layout from "./components/layout/Layout";
import Overview from "./pages/misc/Overview";
import Manage from "./pages/misc/Manage";
import Leden from "./components/manage/Leden";
import Tarieven from "./components/manage/Tarieven";
import Events from "./pages/event/Events";
import Event from "./pages/event/Event";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route errorElement={<ErrorBoundary />}>
          <Route index element={<Calendar />} />
          <Route path='trainingen'>
            <Route index element={<Events />} />
            <Route path=':id' element={<Event />} />
          </Route>
          <Route path='uitbetalingen' element={<Overview />} />
          <Route path='beheer' element={<Manage />} />
          <Route path='beheer/leden' element={<Leden />} />
          <Route path='beheer/tarieven' element={<Tarieven />} />
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
