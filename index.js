function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue
  })
}

 function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name
  })
}

 function exactMatch(drivers, attribute) {
  return drivers.filter(function (driver) {
    let attributes = false

     for (const key in attribute) {
      attributes = driver[key] === attribute[key]
    }

     return attributes
  })
}

 function exactMatchToList(drivers, attributes) {
  return exactMatch(drivers, attributes).map(function (driver) {
      return driver.name
  })
}