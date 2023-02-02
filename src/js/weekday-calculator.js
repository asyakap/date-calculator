export default class Calculator {

  constructor(date) {
    this.date = date;
    this.weekday = "";
  }

  ValidDate(date) {
    date = new Date(date);
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
  }


  
}



