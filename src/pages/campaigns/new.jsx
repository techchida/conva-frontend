import { Button, Checkbox, Input, Select, Form, message, Modal } from "antd";
import "./campaigns.css";
import "./conva.css";
import { useState } from "react";
import {
  ArrowLeftOutlined,
  CheckCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { appServices } from "../../services/services";
import Widget from "../../components/widget/widget";
import { appValidation } from "../../utils/validators";
import copy from "copy-to-clipboard";

const NewCampaign = () => {
  const [campTitle, setCampTitle] = useState("How do you feel?");
  const [campSubtitle, setCampSubtitle] = useState(
    "Tell us how you feel about our app"
  );
  const [allowName, setAllowName] = useState(false);
  const [allowEmail, setAllowEmail] = useState(false);
  const [allowText, setAllowText] = useState(false);
  const [activeTye, setActiveType] = useState("emoji");
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [exitModal, setExitModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const [embedURL, setEmbedURL] = useState("");

  const { mutate } = useMutation({
    mutationFn: (payload) => appServices.createCampaign(payload),
    onError: (error) => {
      messageApi.error(error.response.data.message || "something went wrong");
    },
    onSuccess: ({ status, data }) => {
      if (status === 200) {
        setEmbedURL(`${process.env.REACT_APP_BASEURL}/widget/${data?.id}`);
        return setCompleteModal(true);
      }

      messageApi.error("oops! somehing went wrong. please try again ");
    },
    onSettled: (data) => {
      setIsLoading(false);
      console.cog("sakda", data);
    },
  });

  return (
    <div className="container my-10">
      {contextHolder}
      <div className="mb-6 mt-6 items-center flex gap-6">
        <div>
          <h3 className="font-black text-xl  text-slate-700">New Campaign</h3>
          <p className="text-gray-400">Create a new campaign</p>
        </div>
      </div>
      <Form
        layout="vertical"
        requiredMark={false}
        onFinish={(payload) => {
          setIsLoading(true);
          mutate(payload);
          console.log(payload);
        }}
        className="lg:grid grid-cols-12 gap-16 gap-y-10 mt-16 justify-between  builder"
      >
        <div className="col-span-6 mb-12">
          <Form.Item
            label="Campaign Name"
            name="campaign"
            rules={appValidation.requiredField("Campaign name")}
          >
            <Input
              placeholder="My new campaign"
              size="large"
              variant="filled"
            />
          </Form.Item>
          <Form.Item
            label="Title"
            name="title"
            rules={appValidation.requiredField("Title")}
          >
            <Input
              onChange={(e) => {
                setCampTitle(e.target.value);
              }}
              placeholder="How do you feel"
              size="large"
              variant="filled"
            />
          </Form.Item>

          <Form.Item label={"subtitle"} name="subtitle">
            <Input
              onChange={(e) => {
                setCampSubtitle(e.target.value);
              }}
              placeholder="Tell us how you feel about our app"
              size="large"
              variant="filled"
            />
          </Form.Item>
          <Form.Item
            label="Feedback Method"
            initialValue="Generic"
            name="type"
            rules={appValidation.requiredField("Feedback method")}
          >
            <Select
              defaultValue="Generic"
              size="large"
              style={{ width: "100%" }}
              onChange={(type) => {
                setActiveType(type);
              }}
              options={[
                {
                  value: "generic",
                  label: "Generic",
                },
                {
                  value: "emoji",
                  label: "Emotion",
                },
                {
                  value: "rating",
                  label: "Rating",
                },
                {
                  value: "vote",
                  label: "Vote",
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            label={""}
            name="name"
            valuePropName="checked"
            initialValue={false}
          >
            <Checkbox
              name="name"
              onChange={(e) => setAllowName(e.target.checked)}
            >
              Collect users fullname
            </Checkbox>
          </Form.Item>
          <Form.Item name="email" valuePropName="checked" initialValue={false}>
            <Checkbox onChange={(e) => setAllowEmail(e.target.checked)}>
              Collect e-mail Addresses
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="comment"
            valuePropName="checked"
            initialValue={false}
          >
            <Checkbox onChange={(e) => setAllowText(e.target.checked)}>
              Accept comment text field
            </Checkbox>
          </Form.Item>
        </div>
        <div className="col-span-6">
          <Widget
            allowEmail={allowEmail}
            allowName={allowName}
            allowText={allowText}
            campTitle={campTitle}
            campSubtitle={campSubtitle}
            activeTye={activeTye}
          />
        </div>

        <div className="flex col-span-12 justify-center my-6 mb-24 gap-4">
          <Button
            onClick={() => setExitModal(true)}
            className="h-12 rounded-full bg-slate-300"
          >
            Cancel
          </Button>
          <Button
            loading={isLoading}
            className="h-12 rounded-full"
            type={"primary"}
            htmlType="submit"
          >
            Save Campaign
          </Button>
        </div>
      </Form>

      <Modal
        open={exitModal}
        onCancel={() => setExitModal(!exitModal)}
        onOk={() => navigate("../campaigns")}
      >
        <div className="py-16 text-center">
          <QuestionCircleOutlined className="text-blue-300 text-4xl" />
          <h3 className="text-2xl font-bold pt-4"> Are you sure?</h3>
          <p className="text-slate-500">Your campaign will not be saved</p>
        </div>
      </Modal>
      <Modal
        open={completeModal}
        onCancel={() => {
          messageApi.info("copied to clipboard");
          copy(`<script src="${embedURL.toString()}"></script>`);
        }}
        okText="done"
        cancelText="copy"
        onOk={() => navigate("../campaigns")}
      >
        <div className="py-16 text-center">
          <CheckCircleOutlined className="text-green-300 text-4xl" />
          <h3 className="text-2xl font-bold pt-4"> Campaign Started</h3>
          <p className="text-slate-500">
            copy and paste the html code below to receive feedback
          </p>

          <div className="mt-8 p-4 rounded-lg bg-slate-200">
            <code>
              <span className="w-full overflow-x-scroll text-nowrap py-4 block">
                &lt;script src="{embedURL}" &gt; &lt;/script&gt;
              </span>
            </code>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NewCampaign;
