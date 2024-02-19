import Logo from "../../assets/logo/logo";
import { DownOutlined } from "@ant-design/icons";

const Nav = () => {
  return (
    <nav className="py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="brand">
            <div className="logo">
              <Logo /> <span>Conva.</span>
            </div>
          </div>

          <div className="menu-burger flex gap-2 items-center">
            <span className="text-sm font-semibold text-gray-800 ">
              chida.codes@gmail.com
            </span>

            <DownOutlined className=" text-xs text-gray-500 font-bold" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
