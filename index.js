// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter((driver)=>driver['revenue'] > revenue)
}

function driverNamesWithRevenueOver(drivers,revenue) {
    return driversWithRevenueOver(drivers,revenue).map((driver)=>driver['name'])
}

function exactMatch(drivers, driver_obj) {
    return drivers.filter((driver)=> (driver['name']===driver_obj['name'] || driver['revenue'] ===driver_obj['revenue']))
}

function exactMatchToList(drivers,driver_obj) {
    return exactMatch(drivers,driver_obj).map((driver)=>driver['name'])
}