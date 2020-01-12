const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.getName = function () {
  return this.name;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  this.dinosaurs.pop(dinosaur)
};

Park.prototype.mostPopular = function () {
  
};

Park.prototype.findBySpecies = function (species) {
  let result = [];
  result = this.dinosaurs.filter(dinosaur => species === dinosaur.species);
  return result;
};

Park.prototype.totalVisitorsPerDay = function () {
  let total = 0;
  this.dinosaurs.forEach((dinosaur) => {
    total += dinosaur.guestsAttractedPerDay;
  });
  return total;
};

Park.prototype.visitorsPerYear = function () {
  total = this.totalVisitorsPerDay() * 365;
  return total;
};

Park.prototype.annualRevenue = function () {
  total = this.visitorsPerYear() * 365;
  return total
};

module.exports = Park;
