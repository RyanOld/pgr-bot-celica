const organizeWeaponByStar = (weapons) => {
  let weaponByStar = {
    sixStar: [],
    fiveStar: [],
    fourStar: [],
    threeStar: [],
    twoStar: [],
  };
  weapons.forEach((element) => {
    if (element.rank == "Six_Star") {
      weaponByStar["sixStar"].push(element.name);
    } else if (element.rank == "Five_Star") {
      weaponByStar["fiveStar"].push(element.name);
    }
  });
  return weaponByStar;
};
exports.organizeWeaponByStar = organizeWeaponByStar;
