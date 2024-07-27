import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/homepage";
import Diagram from "./pages/diagram";
import "./styles/style.scss";
import EmployeeDetails from "./pages/employee-details";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/dijagram" element={<Diagram />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
