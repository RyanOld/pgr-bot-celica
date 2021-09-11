const menuEmbed = (prefix) => {
  return {
    components: [
      {
        type: 1,
        components: [
          {
            custom_id: `main_menu`,
            placeholder: `Choose what you want to find about out today.`,
            options: [
              {
                label: `A Construct`,
                value: `construct`,
                description: `Get some info on a certain construct.`,
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
        title: `Main Menu`,
        description: "",
        color: 0x86abfb,
        fields: [
          {
            name: `Welcome to the more user-friendly UI of this bot.`,
            value: ` Use the select menu below to get around.`,
          },
          {
            name: "\u200B",
            value: `You can get here by typing :`,
          },
          {
            name: "\u200B",
            value: `${prefix}menu`,
          },
          {
            name: "\u200B",
            value: `Or by choosing \"Main Menu\" in a Select Menu to get back without typing any extra command.`,
          },
          {
            name: "\u200B",
            value: `As of now this bot can show you data about :\n\nConstructs, Weapons, Memories, and Bosses.`,
          },
        ],
        image: {
          url: `[image link]`,
          height: 300,
          width: 250,
        },
        thumbnail: {
          url: `[thumbnail link]`,
          height: 0,
          width: 0,
        },
      },
    ],
  };
};
exports.menuEmbed = menuEmbed;
