const organizeMemoryByStar = (memories) => {
  let memoryByStar = {
    twoStar: [],
    threeStar: [],
    fourStar: [],
    fiveStar: [],
    sixStar: [],
  };
  memories.forEach((element) => {
    if (element.rank == "Six_Star") {
      memoryByStar["sixStar"].push(element.name);
    } else if (element.rank == "Five_Star") {
      memoryByStar["fiveStar"].push(element.name);
    } else if (element.rank == "Four_Star") {
      memoryByStar["fourStar"].push(element.name);
    } else if (element.rank == "Three_Star") {
      memoryByStar["threeStar"].push(element.name);
    } else if (element.rank == "Two_Star") {
      memoryByStar["twoStar"].push(element.name);
    }
  });
  return memoryByStar;
};
exports.organizeMemoryByStar = organizeMemoryByStar;
