const Park = function (name, ticketPrice, dinosaurArray) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurArray = [];
}

Park.prototype.getName = function () {
  return this.name;
};

Park.prototype.addDinosaur = function (newDinosaur) {
  this.dinosaurArray.push(newDinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  const indexOfDinosaur = this.dinosaurArray.indexOf(dinosaur);
  this.dinosaur.splice(indexOfDinosaur, 1)
};




module.exports = Park;
