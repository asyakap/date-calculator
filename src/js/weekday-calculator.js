export default class Calculator {

  constructor(date) {
    this.date = date;
    this.weekday = "";
    this.today = "02/02/2023";
    this.todaysWeekday = "thursday";
  }

  ValidDate(date) {
    date = new Date(date);
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
  }

  CountDiff(date, today) {
    
  }
  
}



