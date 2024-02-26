const Widget = (props) => {
  return (
    <div className={`my-6 rounded-xl ${props?.boxbg || "bg-slate-100"}`}>
      <div className="py-24 flex justify-center items-center px-10 md:px-44 lg:px-24">
        <div className="w-full">
          <div className="vvx-widget isActive w-full">
            <div className="vvx-widget-box vvx-slide">
              <div className="vvx-submited vvx-slide">
                <div>
                  <div className="vvx-checked">
                    <span></span>
                  </div>
                  <p className="vvx-txt">Thanks for your feedback.</p>
                </div>
              </div>
              <h1 className="vvx-title">{props.campTitle}</h1>
              <small className="vvx-subtitle">{props.campSubtitle}</small>
              {props.activeTye === "generic" && <div className="my-6"></div>}
              {props.activeTye === "emoji" && (
                <div className="vvx-action-area">
                  <span className="vvx-emoji vvx-actions" action="1"></span>
                  <span className="vvx-emoji vvx-actions" action="2"></span>
                  <span className="vvx-emoji vvx-actions" action="3"></span>
                  <span className="vvx-emoji vvx-actions" action="4"></span>
                  <span className="vvx-emoji vvx-actions" action="5"></span>
                </div>
              )}
              {props.activeTye === "rating" && (
                <div className="vvx-action-area">
                  <span className="vvx-star vvx-actions" action="1"></span>
                  <span className="vvx-star vvx-actions" action="2"></span>
                  <span className="vvx-star vvx-actions" action="3"></span>
                  <span className="vvx-star vvx-actions" action="4"></span>
                  <span className="vvx-star vvx-actions" action="5"></span>
                </div>
              )}
              {props.activeTye === "vote" && (
                <div className="vvx-action-area">
                  <span className="vvx-thumb vvx-actions" action="1"></span>
                  <span className="vvx-thumb vvx-actions" action="2"></span>
                </div>
              )}
              {props.allowName && (
                <div className="vvx-input-area">Fullname</div>
              )}
              {props.allowEmail && (
                <div className="vvx-input-area">
                  <span className="text-slate-500">Email address </span>
                </div>
              )}
              {props.allowText && (
                <div className="vvx-input-area h-32">
                  <span className="text-slate-500">Say something. . . </span>
                </div>
              )}

              <button type="button">submit </button>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="vvx-bubble">
              <span className="close vvx-pop"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
