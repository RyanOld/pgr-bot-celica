const Fuse = require("fuse.js");
const singleConstructEmbed = (constructData, subCommands) => {
  console.log(constructData[2]);
  const fuse = new Fuse(constructData, {
    findAllMatches: false,
    keys: ["name"],
  });
  console.log(subCommands);
  let searchedConstruct = fuse.search(subCommands.join(" "))[0].item;
  console.log(subCommands.join(" "));
  console.log(searchedConstruct);
  return {
    components: [
      {
        type: 1,
        components: [
          {
            custom_id: `construct_select_menu`,
            placeholder: `Choose What You Want to Know More`,
            options: [
              {
                label: `Construct Main Menu`,
                value: `construct_main_menu`,
                description: `Go back to the main menu of this construct.`,
                default: false,
              },
              {
                label: `Orb Skills`,
                value: `orb_skills`,
                description: `See this construct's orb skills(red, blue, and yellow pings).`,
                default: false,
              },
              {
                label: `Active Skills`,
                value: `active_skills`,
                description: `See this construct's active skills(basic attack, QTE, and ultimate/signature moves).`,
                default: false,
              },
              {
                label: `Passive Skills`,
                value: `passive_skills`,
                description: `See this construct's passive skills(core, class-specific, leader, and rank up passive skills).`,
                default: false,
              },
              {
                label: `Construct Builds`,
                value: `construct_builds`,
                description: `See the recommended build for this construct(weapon and memories).`,
                default: false,
              },
              {
                label: `Team Builds`,
                value: `team_builds`,
                description: `See the recommended team builds for this construct.`,
                default: false,
              },
              {
                label: `Team Strategy`,
                value: `team_strategy`,
                description: `See tips on how to use this construct's team more effectively.`,
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
        title: searchedConstruct.name,
        color: 0x00ffff,
        fields: [
          {
            name: `Class`,
            value: searchedConstruct.construct_class.class,
          },
          {
            name: `Rank`,
            value: searchedConstruct.rank.replace("_", " "),
          },
          {
            name: `Elements`,
            value: searchedConstruct.element,
          },
          {
            name: `Weapon Type`,
            value: searchedConstruct.weapon_type.type,
          },
          {
            name: `Signature Weapon`,
            value: searchedConstruct.signature_weapon.name,
          },
        ],
        image: {
          url: `https://static.wikia.nocookie.net/punishing-gray-raven/images/e/e8/Karenina_-_Ember.png/revision/latest/scale-to-width-down/350?cb=20210718140127`,
        },
        thumbnail: {
          url: `https://static.wikia.nocookie.net/punishing-gray-raven/images/f/f1/Dialogue-Lotus-Icon.png/revision/latest/scale-to-width-down/70?cb=20210901034113`,
          height: 0,
          width: 0,
        },
        url: `https://punishing-gray-raven.fandom.com/wiki/${
          searchedConstruct.name[0] == " "
            ? searchedConstruct.name.replace(" ", "").replaceAll(" ", "_")
            : searchedConstruct.name.replaceAll(" ", "_")
        }`,
      },
    ],
  };
};
exports.singleConstructEmbed = singleConstructEmbed;
