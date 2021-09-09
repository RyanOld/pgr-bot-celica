//this module contains a function that distinguishes commadn words and return the neccessary response.
const { constructEmbed } = require("./constructs/embeds/main");
const { weaponEmbed } = require("./weapons/embeds/main");
const { memoryEmbed } = require("./memories/embeds/main");
const { bossEmbed } = require("./bosses/embeds/main");

//now this in the main entry point for embed operations.
//this function must return an object with component and embed attributes.
const replySwitch = (commandWords, prefix, database) => {
  let subCommands = [];
  let a;
  [a, ...subCommands] = commandWords;
  switch (commandWords[0]) {
    case "menu":
      return "Welcome. this message is supposed to be the main home page embed";
    case "construct":
      return constructEmbed(database.constructs, subCommands);
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
