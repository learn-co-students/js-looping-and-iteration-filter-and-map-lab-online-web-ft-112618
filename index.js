// Code your solution here:
function driversWithRevenueOver(drivers, number) {
  return drivers.filter(driver => driver.revenue > number);
};

function driverNamesWithRevenueOver(drivers, number) {
  return driversWithRevenueOver(drivers, number).map(driver => driver.name);
};

function exactMatch(drivers, attribute) {
  const key = Object.keys(attribute)[0], value = attribute[key];
  return drivers.filter(driver => driver[key] === value);
};

function exactMatchToList(drivers, attribute) {
  return exactMatch(drivers, attribute).map(driver => driver.name);
}
