import "./notifications-box.styles.scss";
import Notification from "../notification/notification.component";

const NotificationsBox = ({ data }) => {
  return (
    <div className="notifications-box">
      {data.map((notification, i) => (
        <Notification key={i} data={notification} />
      ))}
    </div>
  );
};

export default NotificationsBox;
