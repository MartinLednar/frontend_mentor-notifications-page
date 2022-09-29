import "./App.css";
import NotificationsBox from "./components/notifications-box/notifications-box.component";
import CustomLink from "./components/CustomLink/custom-link.component";

import dummyData from "./utils/dummyData";

function App() {
  return (
    <main className="app-container">
      <div className="content-wrapper">
        <div className="notifications-contianer">
          <header>
            <div className="title-box">
              <h1>Notifications</h1>
              <span>3</span>
            </div>
            <CustomLink to="#" type="light" thin>
              Mark all as read
            </CustomLink>{" "}
          </header>

          <NotificationsBox data={dummyData} />
        </div>
      </div>
    </main>
  );
}

export default App;
