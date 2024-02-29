import {
  Button,
  Card,
  Pagination,
  Skeleton,
  Spin,
  Tooltip,
  message,
} from "antd";
import "./campaigns.css";
import { PlusOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { CopyX, RightX } from "../../assets/icons/icons";
import { useEffect, useState } from "react";
import { appServices } from "../../services/services";
import copy from "copy-to-clipboard";
import EmptyState from "../../components/empty/emptystate";

const Campaigns = () => {
  const [page, setPage] = useState(1);
  const [campaigns, setCampaigns] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [payload, setPayload] = useState({});
  const location = useLocation();


  const [messageApi, contextHolder] = message.useMessage();

  if (location.state?.xcampaign) {
    messageApi.success("campaign deleted successfully");
    setTimeout(() => {
      location.state = {};
    }, 1000);
  }

  useEffect(() => {
    setIsLoading(true);
    let getCampaigns = async () => {
      return await appServices.getCampaigns(page);
    };
    getCampaigns(page).then((res) => {
      if (res.status === 200) {
        setPayload(res.data);
        setCampaigns(res.data.campaigns);
        return setIsLoading(false);
      }

      return messageApi.error("oops! something went wrong.");
    });
  }, [page]);
  return (
    <div className="container">
      {contextHolder}
      <div className="banner my-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-black text-xl  text-slate-800">My Campaigns</h3>
            {isLoading ? (
              <div className="text-slate-400">
                <Spin size="small" /> Active
              </div>
            ) : (
              <p className="text-slate-400">{payload.totalDocs} Active</p>
            )}
          </div>
          <div className="flex">
            <Link to="./new">
              <Button className="rounded-full  flex items-center h-12">
                <PlusOutlined /> <span> campaign</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* list  */}
      {isLoading ? (
        <div className="mt-24">
          <Skeleton active />
        </div>
      ) : (
        <section>
          {payload.campaigns.length > 0 ? (
            <div>
              <div className="list mt-24 ">
                {campaigns.map(function (campaign) {
                  return (
                    <Card
                      key={campaign._id}
                      className="rounded-xl listbox mb-4 xx-slide cursor-pointer hover:border-blue-400 hover:text-blue-600 "
                    >
                      <div className="grid grid-cols-12 justify-between items-center">
                        <Link
                          to={`./${campaign._id}/leads`}
                          className="col-span-8 lg:grid grid-cols-5 gap-4 items-center justify-between"
                        >
                          <div className="col-span-3">
                            <p className="font-semibold text-base">
                              {campaign.campaign}
                            </p>
                            <p className="text-slate-500 ">
                              <span>{campaign.leads} responses</span>
                            </p>
                          </div>
                          <div className=" col-span-2 lg:mt-0 mt-4 gap-1">
                            <span
                              className={`font-semibold capitalize rounded-full ${
                                campaign.type === "emoji"
                                  ? "bg-orange-100 text-orange-500"
                                  : campaign.type === "rating"
                                  ? "bg-blue-100 text-blue-500"
                                  : "bg-green-100 text-green-500"
                              } px-3 py-1`}
                            >
                              {" "}
                              {campaign.type === "emoji"
                                ? "Emotion"
                                : campaign.type}
                            </span>
                          </div>
                        </Link>

                        <div className="flex gap-6 col-span-4 justify-center items-center lg:justify-end text-xl text-slate-400">
                          <Tooltip title="copy embed code">
                            <CopyX
                              onClick={() => {
                                copy(
                                  `<script src="${process.env.REACT_APP_BASEURL}/widget/${campaign._id}"></script>`
                                );
                                messageApi.success("copied to clipboard");
                              }}
                              className="hover:text-green-500 cursor-pointer copx"
                            />
                          </Tooltip>

                          <Tooltip title="view responses">
                            <Link to={`./${campaign._id}/leads`}>
                              <RightX className="hover:text-blue-500 cursor-pointer" />
                            </Link>
                          </Tooltip>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
              <div className="py-4 justify-end flex">
                <Pagination
                  defaultCurrent={page}
                  defaultPageSize={10}
                  total={Number(payload.totalDocs)}
                  onChange={(page) => setPage(page)}
                />
              </div>
            </div>
          ) : (
            <div className="py-24">
              <EmptyState
                text="You do not have any active campaigns yet, use the button above to
            start a campaign"
              />
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default Campaigns;
