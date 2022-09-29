const calcPassedTime = (date) => {
  const secs = Math.trunc((new Date() - date) / 1000);
  const minutes = Math.trunc(secs / 60);
  const hours = Math.trunc(minutes / 60);
  const days = Math.trunc(hours / 24);
  const weeks = Math.trunc(days / 7);
  const months = Math.trunc(days / 30);

  if (secs < 60) {
    return "Just now";
  } else if (minutes < 60) {
    return `${minutes}m ago`;
  } else if (hours < 24) {
    return `${hours}${hours > 1 ? "hrs" : "h"} ago`;
  } else if (days < 7) {
    return `${days} ${days > 1 ? "days" : "day"} ago`;
  } else if (weeks <= 4) {
    return `${weeks} ${weeks > 1 ? "weeks" : "week"} ago`;
  } else {
    return `${months} ${months > 1 ? "months" : "month"} ago`;
  }
};

export default calcPassedTime;
