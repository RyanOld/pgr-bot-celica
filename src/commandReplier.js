//this module contains a function that distinguishes commadn words and return the neccessary response.
const { singleConstructEmbed } = require("./constructs/embeds/singleConstruct");
const { singleMemoryEmbed } = require("./memories/embeds/singleMemory");
const { singleWeaponEmbed } = require("./weapons/embeds/singleWeapon");
const { singleBossEmbed } = require("./bosses/embeds/singleBoss");

const { constructEmbed } = require("./constructs/embeds/main");
const { weaponEmbed } = require("./weapons/embeds/main");
const { memoryEmbed } = require("./memories/embeds/main");
const { bossEmbed } = require("./bosses/embeds/main");

const { helpEmbed } = require("./mainEmbeds/helpEmbed");
const { menuEmbed } = require("./mainEmbeds/menuEmbed");
//now this in the main entry point for command embed operations.
//this function must return an object with component and embed attributes. or an error message.
const commandReplier = (commandWords, prefix, database) => {
  let subCommands = [];
  let a;
  [a, ...subCommands] = commandWords;
  switch (commandWords[0]) {
    case "help":
      return helpEmbed(prefix);
    case "menu":
      return menuEmbed(prefix);
    case "construct":
      return subCommands.length == 0
        ? constructEmbed(prefix, database.constructs)
        : singleConstructEmbed(database.constructs, subCommands);
    case "memory":
      return subCommands.length == 0
        ? memoryEmbed(prefix, database.memories)
        : singleMemoryEmbed(database.memories, subCommands);
    case "weapon":
      return subCommands.length == 0
        ? weaponEmbed(prefix, database.weapons)
        : singleWeaponEmbed(database.weapons, subCommands);
    case "boss":
      return subCommands.length == 0
        ? bossEmbed(prefix, database.bosses)
        : singleBossEmbed(database.bosses, subCommands);
    default:
      return `please do ${prefix}help for the list of commands or ${prefix}menu to get a more user-friendly interface`;
  }
};
exports.commandReplier = commandReplier;
