import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import Generator from "../pages/Generator";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Generator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
