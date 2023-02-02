import Calculator from './../src/js/weekday-calculator.js'; 

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    let date = "09/09/1985";
    let today = "02/02/2023";
    calculator = new Calculator(date);
  });

  test('it should correctly create an object with a date and a weekday', () => {
    expect(calculator.date).toBe("09/09/1985");
    expect(calculator.weekday).toBe("");
  });

  test('it should correctly recognize if an input is a date or not', () => {
    expect(calculator.ValidDate(calculator.date)).toBe(true);
    let date = "15/16/2015";
    calculator = new Calculator(date);
    expect(calculator.ValidDate(calculator.date)).toBe(false);
    date = "abc";
    calculator = new Calculator(date);
    expect(calculator.ValidDate(calculator.date)).toBe(false);
  });

  test('it should correctly count difference in days between two dates', () => {
    expect(calculator.CountDiff(calculator.date, calculator.today)).toBe(13660);
  });

  test('it should correctly determine which weekday is the input date is', () => {
    expect(calculator.WhichDay(calculator.date, calculator.today)).toBe("monday");
  });


});