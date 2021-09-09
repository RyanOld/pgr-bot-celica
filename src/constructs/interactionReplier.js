const constructInteractionReplier = (interaction) => {
  switch (interaction.values[0]) {
    case "construct_main_menu":
      return;
    case "orb_skills":
      return;
    case "active_skills":
      return;
    case "passive_skills":
      return;
    case "stats":
      return;
    case "construct_builds":
      return;
    case "team_builds":
      return;
    case "team_strategy":
      return;
    default:
      return;
  }
};
exports.constructInteractionReplier = constructInteractionReplier;
