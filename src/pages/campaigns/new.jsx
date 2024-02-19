import { Button, Checkbox, Input, Select } from "antd";
import "./campaigns.css";
import "./conva.css";
import { useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const NewCampaign = () => {
  const [campTitle, setCampTitle] = useState("How do you feel?");
  const [campSubtitle, setCampSubtitle] = useState(
    "Tell us how you feel about our app"
  );
  const [allowName, setAllowName] = useState(false);
  const [allowEmail, setAllowEmail] = useState(false);
  const [allowText, setAllowText] = useState(false);
  const [activeTye, setActiveType] = useState("emoji");

  return (
    <div className="container my-10">
      <div className="mb-6">
        <Link
          to="../campaigns"
          className="mb-4 text-gray-500 cursor-pointer hover:text-blue-500"
        >
          <ArrowLeftOutlined />
        </Link>
        <h3 className="font-black text-xl  text-gray-700">New Campaign</h3>
      </div>
      <div className="lg:grid grid-cols-12 gap-16 justify-between  builder">
        <div className="col-span-6">
          <div className="input-area">
            <label>Campaign Name</label>
            <Input placeholder="jane@doe.com" size="large" variant="filled" />
          </div>
          <div className="input-area">
            <label>Title</label>
            <Input
              onChange={(e) => {
                setCampTitle(e.target.value);
              }}
              placeholder="jane@doe.com"
              size="large"
              variant="filled"
            />
          </div>
          <div className="input-area">
            <label>
              Subtitle <span className="text-gray-300">(Optional)</span>
            </label>
            <Input
              onChange={(e) => {
                setCampSubtitle(e.target.value);
              }}
              placeholder="jane@doe.com"
              size="large"
              variant="filled"
            />
          </div>
          <div className="input-area">
            <label>Feedback Method</label>
            <Select
              defaultValue={"Generic"}
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
          </div>
          <div className="input-area ">
            <Checkbox onChange={(e) => setAllowName(e.target.checked)}>
              Accept name entry field
            </Checkbox>
          </div>
          <div className="input-area  ">
            <Checkbox onChange={(e) => setAllowEmail(e.target.checked)}>
              Accept Email Address field
            </Checkbox>
          </div>
          <div className="input-area  ">
            <Checkbox onChange={(e) => setAllowText(e.target.checked)}>
              Accept comment text field
            </Checkbox>
          </div>
        </div>
        <div className="col-span-6">
          <div className="my-6 rounded-xl yield">
            <div className="py-24 flex justify-center items-center px-10 lg:px-20">
              <div className="w-full">
                <div className="xx-widget isActive w-full">
                  <div className="xx-widget-box xx-slide">
                    <div className="xx-submited xx-slide">
                      <div>
                        <div className="xx-checked">
                          <span></span>
                        </div>
                        <p className="xx-txt">Thanks for your feedback.</p>
                      </div>
                    </div>
                    <h1 className="xx-title">{campTitle}</h1>
                    <small className="xx-subtitle">{campSubtitle}</small>
                    {activeTye === "generic" && <div className="my-6"></div>}
                    {activeTye === "emoji" && (
                      <div className="xx-action-area">
                        <span className="xx-emoji xx-actions" action="1"></span>
                        <span className="xx-emoji xx-actions" action="2"></span>
                        <span className="xx-emoji xx-actions" action="3"></span>
                        <span className="xx-emoji xx-actions" action="4"></span>
                        <span className="xx-emoji xx-actions" action="5"></span>
                      </div>
                    )}
                    {activeTye === "rating" && (
                      <div className="xx-action-area">
                        <span className="xx-star xx-actions" action="1"></span>
                        <span className="xx-star xx-actions" action="2"></span>
                        <span className="xx-star xx-actions" action="3"></span>
                        <span className="xx-star xx-actions" action="4"></span>
                        <span className="xx-star xx-actions" action="5"></span>
                      </div>
                    )}
                    {activeTye === "vote" && (
                      <div className="xx-action-area">
                        <span className="xx-thumb xx-actions" action="1"></span>
                        <span className="xx-thumb xx-actions" action="2"></span>
                      </div>
                    )}
                    {allowName && (
                      <input
                        className="xx-input-area"
                        placeholder="Full name"
                        name="name"
                        required=""
                      />
                    )}
                    {allowEmail && (
                      <input
                        className="xx-input-area"
                        placeholder="Email address"
                        name="name"
                        required=""
                      />
                    )}
                    {allowText && (
                      <textarea
                        className="xx-input-area"
                        name="comment"
                        placeholder="say something. . ."
                        rows="5"
                        required=""
                      ></textarea>
                    )}

                    <input
                      type="hidden"
                      name="campaignID"
                      value="65cd634647173f19e14c205f"
                    />
                    <button type="button">submit </button>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="xx-bubble">
                    <span class="close xx-pop"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-4 gap-4">
        <Button className="h-12 rounded-full bg-slate-300">Cancel</Button>
        <Button className="h-12 rounded-full" type={"primary"}>
          Save Campaign
        </Button>
      </div>
    </div>
  );
};

export default NewCampaign;
