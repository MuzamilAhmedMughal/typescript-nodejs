function carInfo(manufacturer, model, ...info) {
    const car = {
      manufacturer: manufacturer,
      model: model
    };
  
    for (let i = 0; i < info.length; i += 2) {
      car[info[i]] = info[i + 1];
    }
  
    console.log(car);
  }
  
  carInfo('Tesla', 'Model S', 'color', 'red', 'autopilot', true);
  carInfo('Ford', 'Mustang', 'year', 1969, 'color', 'blue');
  carInfo('Honda', 'Civic', 'transmission', 'automatic', 'fuel', 'gas');