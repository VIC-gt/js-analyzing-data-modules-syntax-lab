function combineUsers(...arrays) {
  let mergedUsers = [].concat(...arrays);
  
  // Fix: Use US date format MM/DD/YYYY
  let today = new Date().toLocaleDateString('en-US');
  
  return {
    users: mergedUsers,
    merge_date: today
  };
}

module.exports = { combineUsers };