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

function deleteFromDriverByKey(driver, key) {
  delete driver.key;
  let newDriver = {...driver};
  return newDriver;
  //const newObj = Object.assign({}, driver);
  //return newObj;
}

/*destructivelyDeleteFromdriverByKey(driver, key) {

}
*/
