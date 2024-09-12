const axios = require("axios");

const myIP = "176.36.0.36";

async function isAvailable() {
  try {
    const response = await axios.get(`https://vadymklymenko.com/ping/?ip=${myIP}`, {
      headers: { Accept: "application/json" },
    });

    return [response.data.status === "ok", response.data.error];
  } catch (error) {
    // Handle error (e.g., network issues)
    return [false, error.message];
  }
}

function getTextMessage(isWifiAvailable, errorText) {
  const titleText = isWifiAvailable ? "Світло є" : errorText || "Світла немає";
  return titleText;
}

async function checkLight() {
  const [isWifiAvailable, errorText] = await isAvailable();

  const text = getTextMessage(isWifiAvailable, errorText);

  return text;
}

module.exports = {
  checkLight,
};
