import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Clock from "./widgets/clock.tsx";
import Today from "./widgets/today.tsx";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import "./index.css";

dayjs.locale("pt-br");

const router = createBrowserRouter([
  {
    path: "/clock",
    element: <Clock />,
  },
  {
    path: "/today",
    element: <Today />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="h-screen w-screen flex items-center justify-center bg-transparent text-9xl font-semibold">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
