function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver){
      return driver.name;
    });
};

function exactMatch(drivers, samezies){
  return drivers.filter(function (driver){
    let matches = false;

    for (const key in samezies){
      matches = driver[key] === samezies[key];
    };

    return matches;
  });
};

function exactMatchToList(drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function (driver) {
      return driver.name;
    });
}