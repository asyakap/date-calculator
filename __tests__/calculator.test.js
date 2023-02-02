import Calculator from './../src/js/weekday-calculator.js'; 

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    let date = "01/01/2015";
    let notDate = "15/16/2015"
    calculator = new Calculator(date);
    console.log(calculator.date);
  });

  test('it should correctly create an object with a date and a weekday', () => {
    expect(calculator.date).toBe("01/01/2015");
    expect(calculator.weekday).toBe("");
  });

  test('it should correctly recognize if an input is a date or not', () => {
    expect(calculator.ValidDate("date")).toBe(true);
    expect(calculator.ValidDate("notDate")).toBe(false);
  });


});