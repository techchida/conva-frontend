import { Spin } from "antd";

const Loader = () => {
  return (
    <div>
      <div className="w-full h-full fixed flex justify-center items-center">
        <Spin size="large" />
      </div>
    </div>
  );
};

export default Loader;
