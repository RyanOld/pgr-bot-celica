const { replySwitch } = require("./replier");
const listenAndReply = async (message, database) => {
  //this if to make the bot not reply to bots including itself.
  if (!message.author.bot) {
    //only replies in any channel marked with "bot" in its name.
    if (message.channel.name.toString().includes("bot")) {
      const prefix = "~";
      if (message.content[0] == prefix) {
        //split command sentence into word parts. remove prefix from first word.
        let commandWords = message.content.split(" ");
        commandWords[0] = commandWords[0].split(prefix)[1];
        console.log(commandWords);
        //detects keywords relating to database query.
        // message.reply(replySwitch(commandWords, prefix, database));
        message.reply({
          components: [
            {
              type: 1,
              components: [
                {
                  custom_id: `weapon_home_menu`,
                  placeholder: `Choose What You Wanna Find Out`,
                  options: [
                    {
                      label: `Orb Skills`,
                      value: `orb_skills`,
                      description: `See the effects/moves this character will do when you ping their corresponding orb.`,
                      default: false,
                    },
                    {
                      label: `Stats`,
                      value: `character_stats`,
                      description: `See the base stats this character will have at lv 1 and lv 80(inside bracket)`,
                      default: false,
                    },
                    {
                      label: `Active Skills`,
                      value: `active_skills`,
                      description: `The active skills that this character have. (Basic attack, Ultimate, QTE, etc).`,
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
              title: `Construct A`,
              description: `A subtitle?`,
              color: 0xcd012e,
              fields: [
                {
                  name: `Rank`,
                  value: `S Rank / 6 *`,
                },
                {
                  name: `Class`,
                  value: `Tank`,
                },
              ],
              image: {
                url: `https://static.wikia.nocookie.net/punishing-gray-raven/images/e/e8/Karenina_-_Ember.png/revision/latest?cb=20210718140127`,
                height: 300,
                width: 200,
              },
              thumbnail: {
                url: `https://static.wikia.nocookie.net/punishing-gray-raven/images/e/e8/Karenina_-_Ember.png/revision/latest?cb=20210718140127`,
                height: 0,
                width: 0,
              },
              url: `https://punishing-gray-raven.fandom.com/wiki/Karenina_-_Ember.com`,
            },
          ],
        });
      }
    }
  }
};

exports.listenAndReply = listenAndReply;
