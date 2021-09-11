const {
  constructInteractionReplier,
} = require("./constructs/interactionReplier");
const interactionReplier = (interaction, database) => {
  if (interaction.isSelectMenu()) {
    switch (interaction.customId) {
      case "main_menu":
        switch (interaction.values[0]) {
          case "constructs":
            return;
          case "memories":
            return;
          case "weapons":
            return;
          case "bosses":
            return;
        }
      case "construct_select_menu":
        return;
      case "memory_select_menu":
        return;
      case "weapon_select_menu":
        return;
      case "boss_select_menu":
        return;
      default:
        return;
    }
  } else if (interaction.isButton()) {
    return;
  } else {
    return;
  }
};
exports.interactionReplier = interactionReplier;
