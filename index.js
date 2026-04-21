function combineUsers(...arrays) {
  let mergedUsers = [].concat(...arrays);
  let today = new Date().toISOString().split("T")[0];
  return {
    users: mergedUsers,
    merge_date: today
  };
}

module.exports = { combineUsers };