const returnFirstTwoDrivers = arr => {
  return arr.slice(0, 2);
};

const returnLastTwoDrivers = arr => {
  return arr.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = int => {
  return value => {
    return value * int;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arr, func) {
  return func(arr);
}
