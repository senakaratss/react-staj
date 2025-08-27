import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./view-transitions.css";
import Home from "./pages/Home.tsx";
import AddTodo from "./pages/addTodo.tsx";
import Timer from "./pages/timer.tsx";
import Reports from "./pages/reports.tsx";
import Account from "./pages/account.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayot from "./pages/mainLayot.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayot />}>
          <Route path="/" element={<Home />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="/addTodo" element={<AddTodo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
