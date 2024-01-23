import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SendNotification from "./pages/SendNotification";
import { Route, Routes } from "react-router-dom";
import { GetNotification } from "./pages/GetNotification";
import Layouts from "./Layouts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="/send" element={<SendNotification />} />
          <Route path="/get" element={<GetNotification />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
