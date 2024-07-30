import { Outlet } from "react-router-dom";
import Header from "../components/header";

const ContentLayout = () => {
  return (
    <>
      <div className="content-layout">
        <Header />
        <div className="displayed-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default ContentLayout;
