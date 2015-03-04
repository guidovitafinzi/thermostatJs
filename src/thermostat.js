var Thermostat = function() {
  this.defaultTemperature = 20;
  this.powerSaving = true;
  this.maxTempPowerSavingOn = 25;
  this.maxTempPowerSavingOff = 32;
  this.minTemperature = 10;
  this.temperature = this.defaultTemperature;

};

Thermostat.prototype.increase = function() {
  if (this.increase && this.powerSaving == true && this.temperature == this.maxTempPowerSavingOn) {
    return this.temperature = this.maxTempPowerSavingOn
  }
  else if (this.increase && this.powerSaving == false && this.temperature == this.maxTempPowerSavingOff) {
    return this.temperature = this.maxTempPowerSavingOff
  }
  this.temperature ++
};

Thermostat.prototype.decrease = function() {
  if (this.decrease && this.temperature === this.minTemperature) {
    return this.temperature == this.minTemperature;
  }
  this.temperature --
};

Thermostat.prototype.reset = function() {
  if (this.temperature != this.defaultTemperature) {
    return this.temperature = this.defaultTemperature
  }
  return this.temperature
};

Thermostat.prototype.switchOn = function() {
  return this.powerSaving = true
};

Thermostat.prototype.switchOff = function() {
  return this.powerSaving = false
};