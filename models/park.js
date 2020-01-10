const Park = function (name, ticketPrice, dinosaurArray) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurArray = [];
}

Park.prototype.getName = function () {
  return this.name;
};

// Park.prototype.getDinosaurArray = function () {
//   return this.dinosaurArray;
// };

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurArray.push(newDinosaur);
};

Park.prototype.removeDinosaur = function () {
  this.dinosaurArray.pop()
};


};

module.exports = Park;
