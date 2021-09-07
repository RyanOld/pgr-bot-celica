//this module contains a function that distinguishes commadn words and return the neccessary response.
const replySwitch = (commandWords, prefix, database) => {
  switch (commandWords[0]) {
    case "construct":
      // return "okay";
      return JSON.stringify(database.constructs[20].ultimate);
    case "memory":
      return "think2";
    case "weapon":
      return "testing2";
    case "boss":
      return "boss ok";
    default:
      return `please do ${prefix}help for the list of commands`;
  }
};
exports.replySwitch = replySwitch;
