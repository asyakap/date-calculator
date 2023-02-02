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
    date = new Date(date);
    today = new Date(today);
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
    const utc2 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  
}


}
