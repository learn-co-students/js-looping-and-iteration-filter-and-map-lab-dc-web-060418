// Code your solution here:
function driversWithRevenueOver(drivers, num){
    return drivers.filter(function(driver){
        return driver.revenue > num;
    })
}

function driverNamesWithRevenueOver(drivers, num) {
    return driversWithRevenueOver(drivers, num).map(function(driver){
        return driver.name;
    });
}

function exactMatch(drivers, matchElement) {
    return drivers.filter(function(driver){
        match = false;
        for (const key in driver) {
            if(driver[key]=== matchElement[key]) {
                match = true;
            }
        }
        return match;
    })
}

function exactMatchToList(drivers, matchElement) {
    return exactMatch(drivers, matchElement).map(function(driver){
        return driver.name;
    })
}