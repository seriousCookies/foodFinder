import Constants from "expo-constants";
const config = {
  api: {
    url:
      process.env.NODE_ENV === "development"
        ? Constants.manifest.extra.devAPI
        : Constants.manifest.extra.prodAPI,
  },
};

const REACT_APP_API = config.api.url;

export { REACT_APP_API };

export default config;
