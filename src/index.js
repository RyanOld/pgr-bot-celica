const { Client, Intents, MessageEmbed } = require("discord.js");
//organizers
const { organizeConstructByRank } = require("./constructs/organizer");
const { organizeMemoryByStar } = require("./memories/organizer");
const { organizeWeaponByStar } = require("./weapons/organizer");
const { organizeBosses } = require("./bosses/organizer");

const { listenAndReply } = require("./listener");
const fetch = require("node-fetch");
const dotenv = require("dotenv");

dotenv.config();
//grabbing data from database at my place, https://pgr-bot-asimov-db.herokuapp.com
let weapons = {};
let constructs = {};
let memories = {};
let bosses = {};
let weaponByStar = {};
let weaponByType = {};
let constructByRank = {};
let constructByClass = {
  attacker: [],
  tank: [],
  support: [],
  compositor: [],
};
let memoryByStar = {};
let memoryByUsage = {
  selfOffensiveBuff: [],
  selfDefensiveBuff: [],
  teamOffensiveBuff: [],
  teamDefensiveBuff: [],
  healing: [],
  utility: [],
};
let bossList = [];
let database = {
  weapons: weapons,
  constructs: constructs,
  memories: memories,
  bosses: bosses,
  weaponByStar: weaponByStar,
  weaponByType: weaponByType,
  constructByRank: constructByRank,
  constructByClass: constructByClass,
  memoryByStar: memoryByStar,
  memoryByUsage: memoryByUsage,
  bossList: bossList,
};

//general function to grab data and run things up when everything are ready.
//takes in the location of the database as an argument.
async function grabDataAndRun(link) {
  //grabbing data from the database in the cloud.
  const weaponsResponse = await fetch(`${link}/weapons`);
  weapons = await weaponsResponse.json();
  database.weapons = weapons;
  //organizing grabbed data into displayable, simple data.
  weaponByStar = organizeWeaponByStar(weapons);
  database.weaponByStar = weaponByStar;
  const constructsResponse = await fetch(`${link}/constructs`);
  constructs = await constructsResponse.json();
  database.constructs = constructs;
  //organize construct data. by rank.
  constructByRank = organizeConstructByRank(constructs);
  database.constructByRank = constructByRank;
  //organize construct data by class.
  const memoriesResponse = await fetch(`${link}/memories`);
  memories = await memoriesResponse.json();
  database.memories = memories;
  //organize memory data by star rating.
  memoryByStar = organizeMemoryByStar(memories);
  database.memoryByStar = memoryByStar;
  //organize memory data by usage case.
  const bossesResponse = await fetch(`${link}/bosses`);
  bosses = await bossesResponse.json();
  database.bosses = bosses;
  bossList = organizeBosses(bosses);
  database.bossList = bossList;
  //logging in after all the processes are completed.
  await client.login(process.env.BOT_SECRET_TOKEN);
}
exports.grabDataAndRun = grabDataAndRun;

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
