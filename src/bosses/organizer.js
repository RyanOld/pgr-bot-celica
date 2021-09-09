const organizeBosses = (bosses) => {
  let bossList = [];
  bosses.forEach((element) => {
    bossList.push(element.name);
  });
  return bossList;
};
exports.organizeBosses = organizeBosses;
