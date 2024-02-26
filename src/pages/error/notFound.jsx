import { Button } from "antd";
import { Lostx } from "../../assets/icons/icons";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <div className="flex justify-center text-center items-center">
        <div className="py-[25vh]">
          <div className="flex justify-center ">
            <Lostx className="h-48 w-48 text-slate-200" />
          </div>
          <h1 className="text-4xl font-black text-blue-400 mt-4">404</h1>
          <p className="my-4 text-base text-slate-600">
            This must have been a mistake, you are not meant to be here
          </p>
          <Link to="../../">
            <Button className="rounded-full">Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
