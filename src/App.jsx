import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-5 p-7 max-w-5xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
