import { assert, expect } from 'chai';
import { sum, sayHello, getUsers, getCaptain, checkTip } from '../demo/demo.js';

describe('sum()', function () {
  it('sum should return a+b', function () {
    assert.equal(sum(5, 5), 10);
  })
})

describe('sayHello()', function () {
  it('sayHello should return hello', function () {
    expect(sayHello()).to.have.a.string('hello');
  })
  it('sayHello should return a string', function () {
    assert.typeOf(sayHello(), 'string');
  })
})

describe('sayHello', () => {
  it('sayHello should return string', () => {
    expect(sayHello()).to.be.a('string')
    assert.equal(typeof sayHello(), 'string')
  })
  it('sayHello should contain "hello"', () => {
    expect(sayHello().toLocaleLowerCase()).to.have.string('hello')
    assert.equal(sayHello().split(' ').some(x => x.toLocaleLowerCase() === 'hello'), true)
  })
})

describe('getUsers()', function () {
  it('getUsers should be an array', function () {
    assert.typeOf(getUsers(), 'array')
  })
  it('getUsers should have a lenght of 6', function () {
    expect(getUsers()).to.have.lengthOf(6);
  })
  it('getUsers should have a lenght of 6', function () {
    expect(getUsers()).to.have.lengthOf(6);
  })
})

describe('getCaptain()', function () {
  it('getCaptain should return luffy', function () {
    assert.equal(getCaptain(), 'luffy');
  })
})

describe('checkTip()', function () {
  it('should return 20 %', function () {
    assert.equal(checkTip(20, 100), 20);
  })
  it('should be a number', function () {
    assert.typeOf(checkTip(),'number');
  })
  it('should be at least 20', function () {
    assert.isAtLeast(checkTip(100, 20),20);

  })

})