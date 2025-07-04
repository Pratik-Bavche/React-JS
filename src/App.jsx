import "./App.css";
import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Navabar from "./components/Navabar";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navabar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div>
        <Navabar />
        <Paste />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div>
        <Navabar />
        <ViewPaste />
      </div>
    ),
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
