import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Work from "./pages/work";
import Landing from "./pages/landing";

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/portfolio" index element={<Landing />} />
        <Route path="work" element={<Work />} />
        <Route path="*" element={<>Not Found</>} />
      </Route>
    </>
  )
);
