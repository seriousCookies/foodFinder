import { styles } from "../styles";
export const rules = {
  Fett: {
    green: 3,
    yellow: 17.5,
  },
  "Mettet fett": {
    green: 1.5,
    yellow: 5,
  },
  Sukkerarter: {
    green: 5,
    yellow: 22.5,
  },
  Salt: {
    green: 0.3,
    yellow: 1.5,
  },
};
export const trafficColour = (displayName, amount, rules) => {
  if (displayName === "Energi") {
    return "";
  } else {
    return amount <= rules[displayName].green
      ? styles.trafficColourGreen
      : amount <= rules[displayName].green
      ? styles.trafficColourYellow
      : styles.trafficColourRed;
  }
};

export const trafficColourLabel = (colour) => {
  switch (colour) {
    case "#abedac":
      return "LAV";
    case "#e5edab":
      return "MED";
    case "#d84f34":
      return "HØY";

    default:
      return null;
  }
};
