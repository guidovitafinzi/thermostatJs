describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });


  describe('default temperature', function() {

    it('start at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('changing temperature', function() {

    it('increase temperature', function() {
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21)
    });

    it('decrease temperature', function() {
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(19)
    });

    it('has a min temperature', function() {
      thermostat.temperature = 10
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(10)
    });

    it('can be reset to 20', function() {
      thermostat.temperature = 15
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('power saving', function() {

    it('is on by default', function() {
      expect(thermostat.powerSaving).toEqual(true);
    });

    it('can be switched on', function() {
      thermostat.powerSaving = false
      thermostat.switchOn();
      expect(thermostat.powerSaving).toEqual(true);
    });

    it('can be switched off', function () {
      thermostat.switchOff();
      expect(thermostat.powerSaving).toEqual(false);
    });

    it('has a max temperature if power saving is on', function() {
      thermostat.temperature = 25
      thermostat.increase();
      expect(thermostat.temperature).toEqual(25)
    });

    it('has a max temperature if power saving is off', function() {
      thermostat.powerSaving = false
      thermostat.temperature = 32
      thermostat.increase();
      expect(thermostat.temperature).toEqual(32)
    });
  });

  describe('display energy usage', function() {

    it('display low if temperature < 18', function() {
      thermostat.temperature = 18
      thermostat.decrease();
      expect(thermostat.energyUsage()).toEqual("low")
    });

    it('display medium if temperature < 25', function() {
      thermostat.temperature = 17
      thermostat.increase();
      expect(thermostat.energyUsage()).toEqual("medium")
    });

    it('display high if temperature > 25', function() {
      thermostat.temperature = 25
      thermostat.increase();
      expect(thermostat.energyUsage()).toEqual("high")
    });
  });

});