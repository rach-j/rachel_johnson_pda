var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.strictEqual(calculator.runningTotal, 5);
  });

  it('can subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
    calculator.previousTotal = 4;
    calculator.subtract(7);
    assert.strictEqual(calculator.runningTotal, -3);
    calculator.previousTotal = 0;
    calculator.subtract(5);
    assert.strictEqual(calculator.runningTotal, -5);
  });

  it('can multiply', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15);
    calculator.previousTotal = 5;
    calculator.multiply(3);
    assert.strictEqual(calculator.runningTotal, 15);
  });

  it('can divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
    calculator.previousTotal = 7;
    calculator.divide(21);
    assert.strictEqual(calculator.runningTotal, 7/21);
  });

  it('can concatenate number clicks', function(){
    calculator.numberClick(1)
    assert.strictEqual(calculator.runningTotal, 1);
    calculator.numberClick(6);
    assert.strictEqual(calculator.runningTotal, 16);
    calculator.numberClick(9);
    assert.strictEqual(calculator.runningTotal, 169);
  });

  it('can chain operation clicks', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 4);
    calculator.operatorClick('-');
    calculator.numberClick('2');
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 2);
    calculator.operatorClick('*');
    calculator.numberClick('8');
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 16);
    calculator.operatorClick('/');
    calculator.numberClick('4');
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 4);
  });

  it('can clear the running total without affecting the calculation', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
    assert.strictEqual(calculator.previousOperator, null);
    assert.strictEqual(calculator.previousTotal, 4);
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
    assert.strictEqual(calculator.previousOperator, '+');
    assert.strictEqual(calculator.previousTotal, 2);
  });

  it('can recognise 0', function(){
    calculator.numberClick(0);
    assert.strictEqual(calculator.runningTotal, 0);
  });


});
