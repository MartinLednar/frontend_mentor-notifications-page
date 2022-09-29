import { Notification } from "../notification/notification.component";
import LoadingNotifications from "../loading/loading.component";
import { Fragment } from "react";

const NotificationsBox = ({ data }) => {
  return (
    <div className="notifications-box">
      {data ? (
        <Fragment>
          {data.map((notification, i) => (
            <Notification key={i} data={notification} />
          ))}
        </Fragment>
      ) : (
        <LoadingNotifications />
      )}
    </div>
  );
};

export default NotificationsBox;
