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
      expect(thermostat.temperature).toEqual(10)
      expect(function() {
        thermostat.decrease();
      }).toThrowError("ERROR");
    });

    it('can be reset to 20', function() {
      thermostat.temperature = 15
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });

  });





});