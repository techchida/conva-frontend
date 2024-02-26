import { GithubOutlined, HeartTwoTone } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = ({ bg }) => {
  return (
    <footer
      className={`z-[-1] ${bg}  py-4 fixed bottom-0 w-full border-t-stone-700`}
    >
      <div className="container">
        <div className="grid grid-cols-3 gap-y-10 justify-between">
          <div className="col-span-1">
            &copy; {new Date().getFullYear()} Conva
          </div>
          <div className="col-span-2 lg:col-span-1  text-slate-500 hover:text-slate-800 justify-end md:justify-center flex gap-4">
            <Link to={"https://github.com/techchida"}>
              <GithubOutlined />
            </Link>
          </div>

          <div className="col-span-3 lg:flex lg:justify-end hidden justify-start gap-2 lg:col-span-1">
            <span> made with</span> <HeartTwoTone classID="mx-4" />{" "}
            <Link to={"https://www.linkedin.com/in/codecherub/"}>
              <span>@chida</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
