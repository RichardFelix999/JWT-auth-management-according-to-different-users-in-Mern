export const getDateString = (date) => {
  let dateString = "" + date.getFullYear() + "-";
  //get Month
  date.getMonth() < 9
    ? (dateString += "0" + (date.getMonth() + 1))
    : (dateString += date.getMonth() + 1);
  dateString += "-";
  //get Date
  date.getDate() < 10
    ? (dateString += "0" + date.getDate())
    : (dateString += date.getDate());

  return dateString;
};
