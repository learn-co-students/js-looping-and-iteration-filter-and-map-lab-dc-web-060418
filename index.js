// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  // It returns an array of driver objects that have a revenue attribute that's greater than the passed-in revenue argument
  const result = drivers.filter(function(driver){
    return driver.revenue > revenue;
    });
  return result;
}

function driverNamesWithRevenueOver(drivers, revenue){
  // The difference is that it returns an array of strings representing the name of each driver who has a revenue greater than the specified amount.
  const result = driversWithRevenueOver(drivers,revenue).map(function(driver){
    return driver.name;
  });
  return result;
}

function exactMatch(drivers, keyValueObject){
  // gets key from object argument
  const keyValueObjectKey = Object.entries(keyValueObject)[0][0];
  // gets value from object argument
  const keyValueObjectValue = Object.entries(keyValueObject)[0][1];
  // filters on matching properties
  const result = drivers.filter(function(driver){
    return driver[keyValueObjectKey] == keyValueObjectValue;
  });
    return result;
}

function exactMatchToList(drivers, keyValueObject){
  // gets all of the driver objects based on arguments
  const filteredDriverObjects = exactMatch(drivers, keyValueObject);
  // maps all of those object names into an array
  const result = filteredDriverObjects.map(function(driver){
    return driver.name;
  });
  return result;
}
