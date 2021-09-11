const fetch = require("node-fetch");
const grabData = async (link) => {
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
  return database;
};
exports.grabData = grabData;
