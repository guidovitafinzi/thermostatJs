var Thermostat = function() {
  this.temperature = 20;
  this.powerSaving = true;

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

Thermostat.prototype.switchOn = function() {
  this.powerSaving = true
};

Thermostat.prototype.switchOff = function() {
  this.powerSaving = false
};