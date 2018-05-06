var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should update to display the running total when numbers are clicked in succession', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number3')).click();
  element(by.css('#number9')).click();
  element(by.css('#number4')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('394');
});

it('should update to display number clicked following an operator click', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number3')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number4')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('4');
  element(by.css('#operator_subtract')).click();
  element(by.css('#number2')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2');
});

it('should update display when the = operator is clicked to show result of calculation', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number3')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('5');
});

it('should update display when the = operator is clicked to show result of calculation following a chain of operations', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number3')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number1')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2');
});

it('should update display when any non-= operators are clicked to show running total prior to that click', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number3')).click();
  element(by.css('#operator_add')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('3');
  element(by.css('#number2')).click();
  element(by.css('#operator_subtract')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('5');
  element(by.css('#number1')).click();
  element(by.css('#operator_multiply')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('4');
  element(by.css('#number2')).click();
  element(by.css('#operator_divide')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('8');
});

it('should show 0 when clear button pressed', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number3')).click();
  element(by.css('#clear')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('0');
});

it('should be able to perform calculations using negative numbers', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number3')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number7')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-4');
  element(by.css('#operator_multiply')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-20');
});

it('should be able to perform operations on 0', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number0')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number7')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-7');
  element(by.css('#number0')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('0');
  element(by.css('#number0')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2');
  element(by.css('#number0')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('0');
});

it('should be able to perform calculations on large numbers', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number8')).click();
  element(by.css('#number8')).click();
  element(by.css('#number8')).click();
  element(by.css('#number8')).click();
  element(by.css('#number8')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('8888711112');
});

it('should be able to perform calculations with a decimal result', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number9')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number8')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('1.125');
});

it('should be able to divide by 0', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number9')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('error - cannot divide by zero');
});

});
