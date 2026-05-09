import moment from "moment";

export const getCurrentGreeting = () => {
  const currentHour = parseInt(moment().format("HH"));
  let timeOfDay;

  if (currentHour >= 3 && currentHour < 12) {
    timeOfDay = "Morning";
  } else if (currentHour >= 12 && currentHour < 16) {
    timeOfDay = "Afternoon";
  } else if (currentHour >= 16 && currentHour < 20) {
    timeOfDay = "Evening";
  } else {
    timeOfDay = "Evening";
  }

  return timeOfDay;
};
