const minuteMs = 60000;
const hourMs = 3600000;

const dummyData = [
  {
    name: "Mark Webber",
    type: "reaction",
    target: "My first tournament today!",
    targetType: "post",
    imgUrl: "/imgs/avatar-mark-webber.webp",
    date: new Date(), //Always Just now
    read: false,
  },
  {
    name: "Angela Gray",
    type: "follow",
    imgUrl: "/imgs/avatar-angela-gray.webp",
    date: new Date() - minuteMs, //Always 1 minute ago
    read: false,
  },
  {
    name: "Jacob Thompson",
    type: "join",
    target: "Chess Club",
    targetType: "group",
    imgUrl: "/imgs/avatar-jacob-thompson.webp",
    date: new Date() - hourMs, //Always 1 hour ago
    read: false,
  },
  {
    name: "Rizky Hasanuddin",
    type: "message",
    imgUrl: "/imgs/avatar-rizky-hasanuddin.webp",
    message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    date: new Date() - hourMs * 3, //Always 3 hours ago
    read: true,
  },
  {
    name: "Kimberly Smith",
    type: "commentPicture",
    imgUrl: "/imgs/avatar-kimberly-smith.webp",
    postImgUrl: "/imgs/image-chess.webp",
    date: new Date(2022, 8, 14),
    read: true,
  },
  {
    name: "Nathan Peterson",
    imgUrl: "/imgs/avatar-nathan-peterson.webp",
    type: "reaction",
    target: "5 end-game strategies to increas your win rate",
    targetType: "post",
    date: new Date(2022, 6, 20),
    read: true,
  },
  {
    name: "Anna Kim",
    type: "leave",
    target: "Chess Club",
    targetType: "group",
    imgUrl: "/imgs/avatar-anna-kim.webp",
    date: new Date(2022, 8, 28),
    read: true,
  },
];

export default dummyData;
