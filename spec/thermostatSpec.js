describe('Thermostat', function(){
  var thermostat;


  describe('default temperature', function() {
    it('start at 20 degrees', function() {
      thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('changing temperature', function() {

    it('increase temperature', function() {
      thermostat = new Thermostat();
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21)
    });

    it('decrease temperature', function() {
      thermostat = new Thermostat();
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(19)
    });
  });





});