import { Fragment } from "react";
import actionsTexts from "../../utils/actionsTexts";
import { BaseNotification, CommentNotification, MessageNotification, LoadingNotification } from "./notification.styles";
import CustomLink from "../CustomLink/custom-link.component";
import calcPassedTime from "../../utils/calcPassedTime";

const getNotificationStyle = (type) =>
  ({
    commentPicture: CommentNotification,
    message: MessageNotification,
    leave: BaseNotification,
    reaction: BaseNotification,
    join: BaseNotification,
    follow: BaseNotification,
  }[type]);

export const Notification = ({ data }) => {
  const NotificationStyle = getNotificationStyle(data.type);

  return (
    <NotificationStyle read={data.read}>
      <img className="profile" src={data.imgUrl} alt="Profile" />
      <div className="notification-title-box">
        <div>
          <CustomLink to="#" type="dark">
            {data.name}
          </CustomLink>{" "}
          {actionsTexts[data.type]}{" "}
          {data.type === "reaction" || data.type === "join" || data.type === "leave" ? (
            <Fragment>
              {data.targetType === "post" ? (
                <CustomLink to="/" type="light">
                  {data.target}
                </CustomLink>
              ) : (
                <CustomLink to="/" type="blue">
                  {data.target}
                </CustomLink>
              )}
            </Fragment>
          ) : (
            ""
          )}
          <span className="dot"></span>
        </div>
        <p>{calcPassedTime(data.date)}</p>
      </div>

      {data.type === "message" ? <p className="message-text">{data.message}</p> : ""}
      {data.type === "commentPicture" ? <img src={data.postImgUrl} alt="Post preview" className="post-image" /> : ""}
    </NotificationStyle>
  );
};

export const NotificationLoading = ({ textWidth, dateWidth }) => {
  return (
    <LoadingNotification textWidth={textWidth} dateWidth={dateWidth}>
      <div className="loading-dash" />
      <span className="profile-picture" />
      <div className="notification-title-box">
        <div></div>
        <p></p>
      </div>
    </LoadingNotification>
  );
};
