// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver,key,value) {
  let newDriver = Object.assign({}, driver, { [key]: value });
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

/*function deleteFromDriverByKey(driver, key) {

  let newDriver1 = {...driver};
  delete driver.key;
  return newDriver1;
  //const newObj = Object.assign({}, driver);
  //return newObj;
}
*/
destructivelyDeleteFromdriverByKey(driver, key) {
  delete driver.key;
  //return driver;
}
