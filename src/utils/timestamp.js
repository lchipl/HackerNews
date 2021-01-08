export const timestamp = (timeUnix) => {
  let dateUnix = new Date(timeUnix * 1000);
  let correctTime = `${dateUnix.getDate()}/${
    dateUnix.getMonth() + 1
  }/${dateUnix.getFullYear()} ${dateUnix.getHours()}: ${dateUnix.getMinutes()}`;
  return correctTime;
};
