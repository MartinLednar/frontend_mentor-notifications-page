import { NotificationLoading } from "../notification/notification.component";
import loadingData from "../../utils/loadingData";

const LoadingNotifications = () => {
  return (
    <div>
      {loadingData.map(({ text, date }, i) => {
        return <NotificationLoading key={i} textWidth={text} dateWidth={date} />;
      })}
    </div>
  );
};

export default LoadingNotifications;
