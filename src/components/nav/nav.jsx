import Logo from "../../assets/logo/logo";
import { PoweroffOutlined } from "@ant-design/icons";
import { UserContext } from "../../context/user-context";
import { useContext } from "react";
import { Dropdown } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { PersonX } from "../../assets/icons/icons";

const Nav = () => {
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: (
        <div
          onClick={() => {
            localStorage.clear();
            navigate("../sign-in");
          }}
          className="text-gray-400 flex items-center gap-3 hover:text-red-500"
        >
          <PoweroffOutlined /> <span>Logout</span>
        </div>
      ),
    },
  ];
  const { email } = useContext(UserContext);
  return (
    <nav className="py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="brand">
            <Link to="./campaigns">
              <div className="logo">
                <Logo /> <span>Conva.</span>
              </div>
            </Link>
          </div>

          <div className="menu-burger text-slate-700 hover:text-blue-500">
            <Dropdown menu={{ items }}>
              <div className="flex gap-2 items-center cursor-pointer">
                <PersonX />
                <span className="text-sm font-semibold ">
                  {email.toString().split("@")[0]}
                </span>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
