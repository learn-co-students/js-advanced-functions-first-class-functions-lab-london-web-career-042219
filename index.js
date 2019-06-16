// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];


let returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2)
}

let returnLastTwoDrivers = (drivers) => {
    return drivers.slice(drivers.length-2,drivers.length)
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers ]

function createFareMultiplier ( multiplier) {
    return function(fare) { return multiplier * fare }
}

let fareDoubler = createFareMultiplier (2)
    
let fareTripler = createFareMultiplier (3)

function selectDifferentDrivers(drivers, functionDriver) {
    return functionDriver(drivers)
}
