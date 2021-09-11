const { Client, Intents, MessageEmbed } = require("discord.js");
//organizers
const { organizeConstructByRank } = require("./constructs/organizer");
const { organizeMemoryByStar } = require("./memories/organizer");
const { organizeWeaponByStar } = require("./weapons/organizer");
const { organizeBosses } = require("./bosses/organizer");

const { listenAndReply } = require("./commandListener");
const fetch = require("node-fetch");
const dotenv = require("dotenv");

dotenv.config();
let database = {};
//initialize client. then request permissions.
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"],
});
//do this once the bot is online.
client.once("ready", () => {
  console.log(`Ready! Logged in as ${client.user.tag}`);
});
//for every instance of an event of x kind happening, do y.
client.on("messageCreate", async (message) => {
  listenAndReply(message, database);
});
//respond to select menu exclusively
client.on("interactionCreate", async (interaction) => {
  interaction.update(interactionReplier(interaction, database));
});

//grab data from database url and when finished, make the bot online.
grabDataAndRun("https://pgr-bot-celica-db.herokuapp.com");

(async () => {
  database = grabData("https://pgr-bot-celica-db.herokuapp.com");
  await client.login(process.env.BOT_SECRET_TOKEN);
})();
