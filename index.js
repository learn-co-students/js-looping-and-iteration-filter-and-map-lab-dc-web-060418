// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(driver => driver.name);
}

function exactMatch(drivers, attrs) {
  return drivers.filter(function(driver) {
    for (key in attrs) {
      if (attrs[key] !== driver[key]) {
        return false;
      }
    }
    return true;
  });
}

function exactMatchToList(drivers, attrs) {
  return exactMatch(drivers, attrs).map(driver => driver.name);
}
