import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ExportOutlined } from "@ant-design/icons";

import Angry from "../../assets/emoji1.svg";
import Sad from "../../assets/emoji2.svg";
import Ok from "../../assets/emoji3.svg";
import Happy from "../../assets/emoji4.svg";
import excited from "../../assets/emoji5.svg";
import "./conva.css";
import { Card } from "antd";
const Leads = () => {
  return (
    <div className="container">
      <div className="my-6">
        <div className="lg:flex gap-y-4 items-center justify-between mb-6">
          <div>
            <Link
              to="../campaigns"
              className=" text-gray-500 cursor-pointer hover:text-blue-500"
            >
              <ArrowLeftOutlined />
            </Link>
            <h3 className="font-black text-xl mt-4  text-gray-700">
              {" "}
              Campaign Title
            </h3>
            <p className="text-slate-400">24 Responses</p>
          </div>

          <div className="flex gap-4  leadrow">
            <div className="bg-red-100 p-3 flex gap-2 items-center text-sm rounded-full">
              <img src={Angry} alt="angry" />{" "}
              <span className="font-bold">25</span>
            </div>
            <div className="bg-orange-100 p-3 flex gap-2 items-center text-sm rounded-full">
              <img src={Sad} alt="sad" /> <span className="font-bold">25</span>
            </div>
            <div className="bg-yellow-100 p-3 flex gap-2 items-center text-sm rounded-full">
              <img src={Ok} alt="ok" /> <span className="font-bold">25</span>
            </div>
            <div className="bg-green-100 p-3 flex gap-2 items-center text-sm rounded-full">
              <img src={Happy} alt="happy" />{" "}
              <span className="font-bold">25</span>
            </div>
            <div className="bg-blue-100 p-3 flex gap-2 items-center text-sm rounded-full">
              <img src={excited} alt="excited" />{" "}
              <span className="font-bold">25</span>
            </div>
          </div>
        </div>
      </div>

      <div className="list my-24">
        <Card className="rounded-xl listbox mb-4 xx-slide ">
          <div className="lg:grid grid-cols-12 justify-between items-center">
            <div className="col-span-3">
              <p className="font-semibold text-base">Henry Topher</p>
              <small>Chida.codes@gmail.com</small>
            </div>
            <div className="col-span-1">
              <span className="bg-green-100 text-green-800 text-bold p-1 px-2s rounded-full">
                Like
              </span>
            </div>
            <div className="col-span-7">
              <span className="text-slate-600">
                There is a flamboyant incumbent astigmaray falajus Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Placeat ipsa eius
                ipsum adipisci velit nemo quis, aspernatur, ea, consectetur et
                vitae blanditiis non eum autem architecto minima ex tempora hic.
              </span>
            </div>
            <div className="flex justify-end gap-8 text-xl text-slate-400">
              {/* <CopyOutlined /> */}
              <ExportOutlined className="hover:text-blue-500" />
            </div>
          </div>
        </Card>
        <Card className="rounded-xl listbox mb-4 xx-slide ">
          <div className="lg:grid grid-cols-12 justify-between items-center">
            <div className="col-span-2">
              <p className="font-semibold text-base">Henry Topher</p>
              <small>Chida.codes@gmail.com</small>
            </div>
            <div className="col-span-2 justify-center flex">
              <span className="bg-red-100 text-red-800 font-semibold p-1 px-2 rounded-full">
                Dislike
              </span>
            </div>
            <div className="col-span-7">
              <span className="text-slate-600">
                There is a flamboyant incumbent astigmaray falajus Lorem ipsum
              </span>
            </div>
            <div className="flex justify-end gap-8 text-xl text-slate-400">
              {/* <CopyOutlined /> */}
              <ExportOutlined className="hover:text-blue-500" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Leads;
