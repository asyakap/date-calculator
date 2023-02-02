export default class Calculator {

  constructor(date) {
    this.date = date;
    this.weekday = "";
  }

  ValidDate(date) {
    if (Object.prototype.toString.call(date) === "[object Date]") {
      return true;
    } else {
      return false;
    }
  }



}


