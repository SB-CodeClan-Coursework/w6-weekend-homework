const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    park = new Park('Eggy Bread Park', 10000000);
    dinosaur1 = new Dinosaur('Chicken Rex', 'carnivore', 5)
    dinosaur2 = new Dinosaur('Bananasaurus', 'herbivore', 100);
    dinosaur3 = new Dinosaur('Paddy', 'omnivore', 200);
    dinosaur4 = new Dinosaur('Bronchitasaraus', 'flexitarian', 300);
    dinosaurArray = [dinosaur1, dinosaur2, dinosaur3, dinosaur4]
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
    // park.allDinosaurs
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.deepStrictEqual(park.dinosaurs.length, 4);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.deepStrictEqual(park.dinosaurs.length, 3);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.removeDinosaur(dinosaur1);
    assert.deepStrictEqual(park.dinosaurs.length, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    actual = park.mostPopular;
    assert.deepStrictEqual(actual, dinosaur4);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    actual = park.findBySpecies('Bananasaurus');
    assert.deepStrictEqual(actual, [dinosaur2]);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    assert.strictEqual(park.totalVisitorsPerDay(), 605);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    actual = park.visitorsPerYear();
    assert.deepStrictEqual(actual, 220825);
  });

  it('should be able to calculate total revenue for one year', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    actual = park.annualRevenue();
    assert(actual, 4);
  });

  // it('should be able to remove all dinosaurs of a certain species', function() {
  //
  //   assert.strictEqual(actual, expected)
  // });

});
