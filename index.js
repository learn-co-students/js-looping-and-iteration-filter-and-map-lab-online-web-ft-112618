// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name)
}

function exactMatch(drivers, attribute) {
  return drivers.filter(driver => driver[Object.keys(attribute)]  === Object.values(attribute)[0])
}

function exactMatchToList(drivers, attributes) {
  return exactMatch(drivers, attributes).map(driver => driver.name)
}
