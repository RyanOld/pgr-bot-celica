const memoryEmbed = (prefix) => {
  return {
    components: [
      {
        type: 1,
        components: [
          {
            custom_id: `memory_select`,
            placeholder: `Find out more about a certain memory here`,
            options: [
              {
                label: `[memory name] | [Rarity] | [Use Case]`,
                value: `memory_[name]`,
                default: false,
              },
            ],
            min_values: 1,
            max_values: 1,
            type: 3,
          },
        ],
      },
    ],
    embeds: [
      {
        type: "rich",
        title: `Memory`,
        description: `Look up a memory's detailed info.`,
        color: 0xd1c701,
        fields: [
          {
            name: `Get here by :`,
            value: `- typing the command ${prefix}memory.\n- or by selecting \"memories\" in main menu.`,
          },
          {
            name: `How to use this menu?`,
            value: `The select menu below contains the list of all memories in the database with the format :`,
          },
          {
            name: "\u200B",
            value: `Memory Name | Rarity/Star | Use Case/Role`,
          },
          {
            name: "\u200B",
            value: `You can click the name of the memory you want to find out more about. It may take some time as the bot is retrieving the data from the database.`,
          },
        ],
        url: `https://punishing-gray-raven.fandom.com/wiki/Memories_(Consciousness_chips)`,
      },
    ],
  };
};
exports.memoryEmbed = memoryEmbed;
