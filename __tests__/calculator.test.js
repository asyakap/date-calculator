import Calculator from './../src/js/weekday-calculator.js'; 

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    let date = "01/01/2015";
    calculator = new Calculator(date);
    console.log(calculator.date);
  });

  test('it should correctly create an object with a date and a weekday', () => {
    expect(calculator.date).toBe("01/01/2015");
    expect(calculator.weekday).toBe("");
  });


});