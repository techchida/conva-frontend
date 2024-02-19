import { Badge, Button, Card } from "antd";
import "./campaigns.css";
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  ExportOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Campaigns = () => {
  return (
    <div className="container">
      <div className="banner my-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-black text-xl  text-gray-700">New Campaign</h3>
            <p className="text-slate-400">24 active campaigns</p>
          </div>
          <div className="flex">
            <Button
              type="primary"
              className="rounded-full flex items-center h-12"
            >
              <Link to="./new">
                <PlusOutlined /> <span> campaign</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* list  */}
      <div className="list my-24">
        <Card className="rounded-xl listbox mb-4 xx-slide ">
          <div className="lg:flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-base">
                Feedback emotion campaign
              </h4>
              <small>45 Responses</small>
            </div>
            <Badge className="py-6 lg:py-0" count={"Emotion"} />
            <div className="flex gap-8 text-xl text-slate-400">
              {/* <CopyOutlined /> */}
              <DeleteOutlined className="hover:text-red-400" />
              <EditOutlined className="hover:text-green-600" />
              <ExportOutlined className="hover:text-blue-500" />
            </div>
          </div>
        </Card>
        <Card className="rounded-xl listbox mb-4 xx-slide ">
          <div className="lg:flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-base">
                Feedback emotion campaign
              </h4>
              <small>45 Responses</small>
            </div>
            <Badge className="py-6 lg:py-0" count={"Emotion"} />
            <div className="flex gap-8 text-xl text-slate-400">
              {/* <CopyOutlined /> */}
              <DeleteOutlined className="hover:text-red-400" />
              <EditOutlined className="hover:text-green-600" />
              <ExportOutlined className="hover:text-blue-500" />
            </div>
          </div>
        </Card>
        <Card className="rounded-xl listbox mb-4 xx-slide ">
          <div className="lg:flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-base">
                Feedback emotion campaign
              </h4>
              <small>45 Responses</small>
            </div>
            <Badge className="py-6 lg:py-0" count={"Emotion"} />
            <div className="flex gap-8 text-xl text-slate-400">
              {/* <CopyOutlined /> */}
              <DeleteOutlined className="hover:text-red-400" />
              <EditOutlined className="hover:text-green-600" />
              <ExportOutlined className="hover:text-blue-500" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Campaigns;
