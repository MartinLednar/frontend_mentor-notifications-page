import "./App.css";

const dummyData = [
  {
    name: "Mark Webber",
    type: "reaction",
    target: "My first tournament today!",
    targetType: "post",
    imgUrl: "/imgs/avatar-mark-webber.webp",
    date: new Date(),
    read: false,
  },
  {
    name: "Angela Gray",
    type: "follow",
    imgUrl: "/imgs/avatar-angela-gray.webp",
    date: new Date(2022, 8, 27, 20),
    read: false,
  },
  {
    name: "Jacob Thompson",
    type: "join",
    target: "Chess Club",
    targetType: "group",
    imgUrl: "/imgs/avatar-jacob-thompson.webp",
    date: new Date(2022, 7, 10, 20),
    read: false,
  },
  {
    name: "Rizky Hasanuddin",
    type: "message",
    imgUrl: "/imgs/avatar-rizky-hasanuddin.webp",
    message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    date: new Date(2022, 6, 1, 20),
    read: true,
  },
  {
    name: "Kimberly Smith",
    type: "comment",
    imgUrl: "/imgs/avatar-kimberly-smith.webp",
    postImgUrl: "/imgs/image-chess.webp",
    date: new Date(2022, 6, 1, 20),
    read: true,
  },
  {
    name: "Nathan Peterson",
    type: "reaction",
    target: "5 end-game strategies to increas your win rate",
    targetType: "post",
    imgUrl: "/imgs/avatar-nathan-peterson.webp",
    postImgUrl: "/imgs/image-chess.webp",
    date: new Date(2022, 6, 1, 20),
    read: true,
  },
  {
    name: "Anna Kim",
    type: "leave",
    target: "Chess Club",
    targetType: "group",
    imgUrl: "/imgs/avatar-anna-kim.webp",
    date: new Date(2022, 6, 1, 20),
    read: true,
  },
];

const actionsMessages = {
  reaction: "reacted to your recent post",
  follow: "followed you",
  join: "has joined your group",
  message: "sent you a private message",
  commentPicture: "commented on your picture",
  leave: "left the group",
};

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
            <a href="#" className="link link-light link-thin">
              Mark all as read
            </a>{" "}
          </header>

          <div className="notifications-box">
            <div className="notification unread">
              <img className="profile" src="/imgs/avatar-mark-webber.webp" alt="Profile" />
              <div className="notification-title-box">
                <div>
                  <a href="#" className="link link-dark">
                    Mark Webber
                  </a>{" "}
                  {actionsMessages["reaction"]}{" "}
                  <a href="#" className="link link-light">
                    My first tournament today!
                  </a>{" "}
                  <span className="dot"></span>
                </div>
                <p>1m ago</p>
              </div>
            </div>

            <div className="notification unread">
              <img className="profile" src="/imgs/avatar-angela-gray.webp" alt="Profile" />
              <div className="notification-title-box">
                <div>
                  <a href="#" className="link link-dark">
                    Angela Gray
                  </a>{" "}
                  followed you <span className="dot"></span>
                </div>
                <p>5m ago</p>
              </div>
            </div>

            <div className="notification unread">
              <img className="profile" src="/imgs/avatar-jacob-thompson.webp" alt="Profile" />
              <div className="notification-title-box">
                <div>
                  <a href="#" className="link link-dark">
                    Jacob Thompson
                  </a>{" "}
                  {actionsMessages["join"]}{" "}
                  <a href="#" className="link link-blue">
                    Chess Club
                  </a>{" "}
                  <span className="dot"></span>
                </div>
                <p>5m ago</p>
              </div>
            </div>

            <div className="notification message">
              <img className="profile" src="/imgs/avatar-rizky-hasanuddin.webp" alt="Profile" />
              <div className="notification-title-box">
                <div>
                  <a href="#" className="link link-dark">
                    Rizky Hasanuddin
                  </a>{" "}
                  {actionsMessages["message"]} <span className="dot"></span>
                </div>
                <p>5m ago</p>
              </div>

              <p className="message-text">
                Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.
              </p>
            </div>

            <div className="notification comment">
              <img className="profile" src="/imgs/avatar-kimberly-smith.webp" alt="Profile" />
              <div className="notification-title-box">
                <div>
                  <a href="#" className="link link-dark">
                    Kimberly Smith
                  </a>
                  {actionsMessages["commentPicture"]} <span className="dot"></span>
                </div>
                <p>5m ago</p>
              </div>

              <img src="/imgs/image-chess.webp" alt="Chess player" className="post-image" />
            </div>

            <div className="notification">
              <img className="profile" src="/imgs/avatar-nathan-peterson.webp" alt="Profile" />
              <div className="notification-title-box">
                <div>
                  <a href="#" className="link link-dark">
                    Nathan Peterson
                  </a>
                  {actionsMessages["reaction"]}{" "}
                  <a href="#" className="link link-light">
                    5 end-game strategies to increase your win rate
                  </a>
                  <span className="dot"></span>
                </div>
                <p>2 weeks ago</p>
              </div>
            </div>

            <div className="notification">
              <img className="profile" src="/imgs/avatar-anna-kim.webp" alt="Profile" />
              <div className="notification-title-box">
                <div>
                  <a href="#" className="link link-dark">
                    Anna Kim
                  </a>
                  {actionsMessages["leave"]}
                  <a href="#" className="link link-blue">
                    Chess Club
                  </a>{" "}
                  <span className="dot"></span>
                </div>
                <p>2 weeks ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
