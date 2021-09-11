const helpEmbed = (prefix) => {
  return {
    type: "rich",
    title: `Are you stuck, Commandant?`,
    description: `Here's a list of commands you can use.`,
    color: 0xb1041e,
    fields: [
      {
        name: `${prefix}help`,
        value: `Get to this help page.`,
      },
      {
        name: `${prefix}menu`,
        value: `Opens up a more user-friendly alternative to using commands, if a bit slower.`,
      },
      {
        name: `----------> Command Info <------------`,
        value: `Use the commands below like you would a search engine. You can use it even if you're not sure what their names are or if you only know parts of it.`,
      },
      {
        name: `${prefix}memory [memory name]`,
        value: `Look up the info on a certain memory. Such as :\nTheir rarity, effects, stats, and use cases.`,
      },
      {
        name: `${prefix}weapon [weapon name]`,
        value: `Find out more about a weapon. Such as :\nTheir rarity, effects, stats, weapon type,  and who the weapon is signature of.`,
      },
      {
        name: `${prefix}construct [construct name]`,
        value: `Get more info on a construct. Such as :\nTheir rank, class, elements, weapon type, signature weapon, builds, teams, and usage strategies.`,
      },
      {
        name: `${prefix}boss [boss name]`,
        value: `Get your hands on some juicy info on how to defeat a certain boss and their moveset.`,
      },
    ],
  };
};
exports.helpEmbed = helpEmbed;
