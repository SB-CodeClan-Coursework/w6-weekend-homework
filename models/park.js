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

Park.prototype.addDinosaur = function (newDinosaur) {
  this.dinosaurArray.push(newDinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  const indexOfDinosaur = this.dinosaurArray.indexOf(dinosaur);
  this.dinosaur.splice(indexOfDinosaur, 1)
};

// Taxi.prototype.removePassengerByName = function (passenger) {
//   const indexOfPassenger = this.passengers.indexOf(passenger);
//   this.passengers.splice(indexOfPassenger, 1);
// }



module.exports = Park;
