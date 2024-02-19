import { Outlet } from "react-router-dom";
import Nav from "../components/nav/nav";

const AppLayout = () => {
  return (
    <div className="">
      <Nav></Nav>
      <Outlet />
    </div>
  );
};

export default AppLayout;
