import { useState, useEffect } from "react";

import "./App.css";
import NotificationsBox from "./components/notifications-box/notifications-box.component";
import CustomLink from "./components/CustomLink/custom-link.component";

import dummyData from "./utils/dummyData";

function App() {
  const [notifications, setNotifications] = useState(null);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setNotifications(dummyData);
    }, 2500);
  }, []);

  useEffect(() => {
    if (!notifications) return;
    const countUnread = notifications.reduce((acc, notification) => {
      if (!notification.read) {
        return (acc += 1);
      } else {
        return acc;
      }
    }, 0);

    setUnread(countUnread);
  }, [notifications]);

  const handleClick = () => {
    const setAllAsRead = notifications.map((notification) => ({ ...notification, read: true }));

    setNotifications(setAllAsRead);
  };

  return (
    <main className="app-container">
      <div className="content-wrapper">
        <div className="notifications-contianer">
          <header>
            <div className="title-box">
              <h1>Notifications</h1>
              <span>{unread}</span>
            </div>
            <CustomLink to="#" type="light" thin onClick={handleClick}>
              Mark all as read
            </CustomLink>{" "}
          </header>

          <NotificationsBox data={notifications} />
        </div>
      </div>
    </main>
  );
}

export default App;
