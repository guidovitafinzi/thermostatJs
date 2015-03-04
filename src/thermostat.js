var Thermostat = function() {
  this.temperature = 20;

};

Thermostat.prototype.increase = function() {
  this.temperature ++
};

Thermostat.prototype.decrease = function() {
if (this.decrease && this.temperature === 10) {
    throw new Error("ERROR");
  }
  this.temperature --
};

Thermostat.prototype.reset = function() {
  this.temperature = 20
};