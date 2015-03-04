var Thermostat = function() {
  this.temperature = 20;
  this.powerSaving = true;

};

Thermostat.prototype.increase = function() {
  if (this.increase && this.powerSaving == true && this.temperature == 25) {
    throw new Error("ERROR");
  }
  else if (this.increase && this.powerSaving == false && this.temperature == 32) {
    throw new Error("ERROR");
  }
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