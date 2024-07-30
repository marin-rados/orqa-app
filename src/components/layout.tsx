import ContentLayout from "../pages/content-layout";

import Sidebar from "./sidebar";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <ContentLayout />
    </div>
  );
};

export default Layout;
