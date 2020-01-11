const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('Eggy Bread Park', 10000000);
    dinosaur1 = new Dinosaur('Chicken Rex', 'carnivore', 5)
    dinosaur2 = new Dinosaur('Bananasaurus', 'herbivore', 100);
    dinosaur3 = new Dinosaur('Paddy', 'omnivore', 100);
    dinosaur4 = new Dinosaur('bronchitasaraus', 'flexitarian', 100);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Eggy Bread Park');
  });

  it('should have a name - getter', function() {
    const actual = park.getName();
    assert.strictEqual(actual, 'Eggy Bread Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10000000);
  });

  it('should have a collection of dinosaurs', function() {
    const expected = [];
    assert.deepStrictEqual(park.dinosaurArray, expected);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur('Webpacker');
    const expected = ['Webpacker']
    assert.deepStrictEqual(park.dinosaurArray, expected)
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur('pidod');
    park.addDinosaur('mole');
    park.removeDinosaur('mole');
    const expected = ['pidod']
    const actual = park.dinosaurArray;
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
