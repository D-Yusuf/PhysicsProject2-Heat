let inputEl = $("#input-el");
let convertBtn = $("#convert-btn");
let firstText = $("#first-box");
let secondText = $("#second-box");
let thirdText = $("#third-box");

let celcius;
let fehrenhite;
let kelvin;

inputEl.click(() => { inputEl.val(''); });

convertBtn.click(render);

function render() {
  const convertedUnits = convert();
  let celciusObject = convertedUnits.find(unit => unit.name === 'Celcius');
  let fehrenhiteObject = convertedUnits.find(unit => unit.name === 'Fehrenhite');
  let kelvinObject = convertedUnits.find(unit => unit.name === 'Kelvin');

  firstText.html(`
    ${celcius}°C  = ${celciusObject.fehrenhite}°F  <br/>
    ${celcius}°C  = ${celciusObject.kelvin}K `);

  secondText.html(`
    ${fehrenhite}°F  = ${fehrenhiteObject.celcius}°C  <br/>
    ${fehrenhite}°F  = ${fehrenhiteObject.kelvin}K `);

  thirdText.html(`
    ${kelvin}K  = ${kelvinObject.celcius}°C  <br/>
    ${kelvin}K  = ${kelvinObject.fehrenhite}°F `);
}

function convert() {
  celcius = inputEl.val();
  fehrenhite = inputEl.val();
  kelvin = inputEl.val();
  const unitsConversion = [
    {
      name: 'Celcius',
      unit: '°C',
      fehrenhite: Math.round((celcius * 9/5) + 32),
      kelvin: celcius * 1 + 273,
    },
    {
      name: 'Fehrenhite',
      unit: '°F',
      celcius: Math.round((fehrenhite - 32) * 5/9),
      kelvin: Math.round(((fehrenhite - 32) * 5/9) + 273),
    },
    {
      name: 'Kelvin',
      unit: 'K',
      celcius: kelvin - 273,
      fehrenhite: Math.round(((kelvin - 273) * 9/5) + 32),
    },
  ]
  return unitsConversion;
}
