import { ArrowLeftOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Angry from "../../assets/emoji1.svg";
import Sad from "../../assets/emoji2.svg";
import Ok from "../../assets/emoji3.svg";
import Happy from "../../assets/emoji4.svg";
import excited from "../../assets/emoji5.svg";
import "./conva.css";
import {
  Button,
  Card,
  Modal,
  Pagination,
  Skeleton,
  Tooltip,
  message,
} from "antd";
import { BinX } from "../../assets/icons/icons";
import { useEffect, useState } from "react";
import { appServices } from "../../services/services";
import voteSystem from "../../utils/voteSystem";
import { useMutation } from "@tanstack/react-query";
import EmptyState from "../../components/empty/emptystate";
const Leads = () => {
  const location = useLocation();
  const campaignID = location.pathname.split("/")[2];
  const [page, setPage] = useState(1);
  const [leads, setLeads] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({});
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const { mutate } = useMutation({
    mutationFn: (payload) => appServices.getLeads(payload),
    onError: (error) => {
      return navigate("../campaigns");
    },
    onSuccess: ({ status, data }) => {
      if (status === 200) {
        setPayload(data);
        setLeads(data.leads);
        return setIsLoading(false);
      }

      messageApi.error("oops! somehing went wrong. please try again ");
    },
    onSettled: () => setIsLoading(false),
  });

  const destroy = useMutation({
    mutationFn: (payload) => appServices.xCampaign(payload),
    onError: (error) => {
      messageApi.error(error.response.data.message || "something went wrong");
    },
    onSuccess: ({ status, data }) => {
      if (status === 200) {
        messageApi.success("Campaign deleted successfully!");
        navigate("../campaigns", { state: { xcampaign: true } });
      }

      messageApi.error("oops! somehing went wrong. please try again ");
    },
    onSettled: () => {
      setLoading(false);
    },
  });

  useEffect(() => {
    setIsLoading(true);
    mutate({ id: campaignID, page: page });
  }, [page]);

  return (
    <div className="container">
      {contextHolder}
      <Modal
        okText="Yes, Delete"
        cancelText="No Cancel"
        footer={null}
        open={modal}
        onCancel={() => setModal(!modal)}
      >
        <div className="text-center my-10 py-10">
          <QuestionCircleOutlined className="text-red-300  text-4xl mb-4" />
          <h4 className="text-2xl font-bold mb-1 ">Delete Campaign</h4>
          <p className="text-slate-500 text-base">
            Are you sure you wish to proceed? this process can not be undone.
          </p>
        </div>
        <div className="flex justify-end gap-2">
          <Button onClick={() => setModal(!modal)} className="">
            No, Cancel
          </Button>
          <Button
            loading={loading}
            onClick={() => {
              setLoading(true);
              destroy.mutate(campaignID);
            }}
            className="bg-red-500 text-white hover:border-red-500 hover:text-red-500"
          >
            Yes, Proceed
          </Button>
        </div>
      </Modal>
      <div className="my-6">
        <div className="flex gap-y-4 items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            <Link
              to="../campaigns"
              className=" text-gray-500 cursor-pointer hover:text-blue-500"
            >
              <ArrowLeftOutlined />
            </Link>
            <div>
              <h3 className="font-black text-xl mt-4  text-gray-700">
                {" "}
                {payload.title}
              </h3>
              {isLoading ? (
                <Skeleton active className="w-20 h-16" />
              ) : (
                <p className="text-slate-400">{payload.totalDocs} Responses</p>
              )}
            </div>
          </div>

          <Tooltip
            title="Delete Campaign"
            className=" text-slate-600 hover:text-red-500 cursor-pointer gap-4"
          >
            <BinX
              onClick={() => {
                setModal(true);
              }}
            />
          </Tooltip>
        </div>
      </div>

      <div className="my-10 flex justify-center">
        {isLoading ? (
          <Skeleton active />
        ) : (
          <div className="lg:max-w-full lg:overflow-x-auto max-w-[95vw] my-10 overflow-x-scroll">
            {leads.length > 0 ? (
              <div>
                {payload.method === "emoji" && (
                  <div className="flex gap-4  leadrow">
                    <div className="bg-red-50 p-3 flex gap-2 items-center text-sm rounded-full">
                      <img src={Angry} alt="angry" />{" "}
                      <span className="font-bold">{payload.stats[1]}</span>
                    </div>
                    <div className="bg-orange-50 p-3 flex gap-2 items-center text-sm rounded-full">
                      <img src={Sad} alt="sad" />{" "}
                      <span className="font-bold">{payload.stats[2]}</span>
                    </div>
                    <div className="bg-yellow-50 p-3 flex gap-2 items-center text-sm rounded-full">
                      <img src={Ok} alt="ok" />{" "}
                      <span className="font-bold">{payload.stats[3]}</span>
                    </div>
                    <div className="bg-green-50 p-3 flex gap-2 items-center text-sm rounded-full">
                      <img src={Happy} alt="happy" />{" "}
                      <span className="font-bold">{payload.stats[4]}</span>
                    </div>
                    <div className="bg-blue-50 p-3 flex gap-2 items-center text-sm rounded-full">
                      <img src={excited} alt="excited" />{" "}
                      <span className="font-bold">{payload.stats[5]}</span>
                    </div>
                  </div>
                )}

                {payload.method === "rating" && (
                  <div className="flex gap-4  leadrow">
                    <div className="bg-red-50 p-3  text-red-500 flex gap-2 items-center text-sm rounded-full">
                      <span className="rating">
                        <span></span>
                      </span>
                      <span className="font-bold">{payload.stats[1]}</span>
                    </div>
                    <div className="bg-orange-50 text-orange-500 p-3 flex gap-2 items-center text-sm rounded-full">
                      <span className="rating">
                        <span></span>
                        <span></span>
                      </span>
                      <span className="font-bold">{payload.stats[2]}</span>
                    </div>
                    <div className="bg-purple-50 text-purple-500 p-3 flex gap-2 items-center text-sm rounded-full">
                      <span className="rating">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>

                      <span className="font-bold">{payload.stats[3]}</span>
                    </div>
                    <div className="bg-cyan-50 text-cyan-500 p-3 flex gap-2 items-center text-sm rounded-full">
                      <span className="rating">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>

                      <span className="font-bold">{payload.stats[4]}</span>
                    </div>
                    <div className="bg-green-50 text-green-500 p-3 flex gap-2 items-center text-sm rounded-full">
                      <span className="rating">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>

                      <span className="font-bold">{payload.stats[5]}</span>
                    </div>
                  </div>
                )}
                {payload.method === "vote" && (
                  <div className="flex gap-4  leadrow">
                    <div className="bg-red-50 p-3 flex gap-2 items-center text-sm rounded-full">
                      <span className="vote1"></span>
                      <span className="font-bold">{payload.stats[1]}</span>
                    </div>
                    <div className="bg-green-50 p-3 flex gap-2 items-center text-sm rounded-full">
                      <span className="vote2"></span>
                      <span className="font-bold">{payload.stats[2]}</span>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        )}
      </div>

      {isLoading ? (
        <div className="mt-26">
          <Skeleton active />
        </div>
      ) : (
        <section>
          {leads.length > 0 ? (
            <div>
              {" "}
              <div className="list mt-26">
                {leads.map((lead) => {
                  return (
                    <Card
                      key={lead._id.toString()}
                      className="rounded-xl listbox mb-4 xx-slide "
                    >
                      <div className="grid grid-cols-12  gap-6 gap-y-4 items-center">
                        {!lead.name && !lead.email ? null : (
                          <div className="flex lg:col-span-4 col-span-8 justify-between items-center">
                            <div>
                              <p className="font-semibold text-base">
                                {lead?.name}
                              </p>
                              <span className="text-slate-500">
                                {lead?.email}
                              </span>
                            </div>
                          </div>
                        )}
                        <div className="lg:col-span-1 col-span-4 flex ">
                          {voteSystem[payload.method](lead?.vote)}
                        </div>

                        <div className="lg:col-span-6 col-span-12">
                          <span className="text-slate-600">
                            {lead?.comment}
                          </span>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
              <div className=" mb-10 justify-end flex">
                <Pagination
                  defaultCurrent={page}
                  defaultPageSize={10}
                  total={Number(payload.totalDocs)}
                  onChange={(page) => setPage(page)}
                />
              </div>
            </div>
          ) : (
            <EmptyState text="you have'nt got any responses for this campaign. you can check back later" />
          )}
        </section>
      )}
    </div>
  );
};

export default Leads;
