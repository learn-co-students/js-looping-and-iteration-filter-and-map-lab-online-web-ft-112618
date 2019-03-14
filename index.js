function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {return driver.revenue > revenue})
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {return driver.name})
}

function exactMatch(drivers, attributes) {
  return drivers.filter(function (driver) {
    for (const key in attributes) { return driver[key] === attributes[key]}
  })
}

function exactMatchToList(drivers, attributes) {
  return exactMatch(drivers, attributes).map(function (driver) {return driver.name})
}
