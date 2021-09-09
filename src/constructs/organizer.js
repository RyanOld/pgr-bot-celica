const organizeConstructByRank = (constructs) => {
  let constructByRank = {
    BRank: [],
    ARank: [],
    SRank: [],
  };
  constructs.forEach((element) => {
    if (element.rank == "B_Rank") {
      constructByRank["BRank"].push(element.name);
    } else if (element.rank == "A_Rank") {
      constructByRank["ARank"].push(element.name);
    } else if (element.rank == "S_Rank") {
      constructByRank["SRank"].push(element.name);
    } else return;
  });
  return constructByRank;
};
exports.organizeConstructByRank = organizeConstructByRank;
