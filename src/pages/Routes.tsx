import { Routes as RouterRoutes, Route } from "react-router-dom";
import Home from "./Home";

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
  </RouterRoutes>
);

export default Routes;
