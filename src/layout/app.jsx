import { Outlet } from "react-router-dom";
import Nav from "../components/nav/nav";
import UserProvider from "../context/user-context";
import Footer from "../components/footer/footer";

const AppLayout = () => {
  return (
    <UserProvider>
      <div className="">
        <Nav></Nav>
        <div className="mb-14 pb-14 bg-white ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </UserProvider>
  );
};

export default AppLayout;
