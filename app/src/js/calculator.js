let inputEl = document.getElementById("input-el");
let convertBtn = document.getElementById("convert-btn");
let firstText = document.getElementById("first-box");
let secondText = document.getElementById("second-box");
let thirdText = document.getElementById("third-box");

let celcius;
let fehrenhite;
let kelvin;

inputEl.addEventListener('click', ()=>{inputEl.value = '';})

convertBtn.addEventListener('click', render);

function render(){
    // const C_to_F = (celcius * 9/5) + 32;
    // const C_to_K = celcius * 1 + 273;
    const convertedUnits = convert();
    let celciusObject = convertedUnits.find(unit => unit.name === 'Celcius');
    let fehrenhiteObject = convertedUnits.find(unit => unit.name === 'Fehrenhite');
    let kelvinObject = convertedUnits.find(unit => unit.name === 'Kelvin');
    
    firstText.innerHTML = `
    ${celcius}°C  = ${celciusObject.fehrenhite}°F  <br/>
    ${celcius}°C  = ${celciusObject.kelvin}K `
    // ---------------------------------------------------
    secondText.innerHTML = `
    ${fehrenhite}°F  = ${fehrenhiteObject.celcius}°C  <br/>
    ${fehrenhite}°F  = ${fehrenhiteObject.kelvin}K `
    // ---------------------------------------------------
    thirdText.innerHTML = `
    ${kelvin}K  = ${kelvinObject.celcius}°C  <br/>
    ${kelvin}K  = ${kelvinObject.fehrenhite}°F `

function convert(){
    celcius = inputEl.value;
    fehrenhite = inputEl.value;
    kelvin = inputEl.value;
    const unitsConversion = [
        {
            name: 'Celcius',
            unit: '°C',
            fehrenhite: Math.round((celcius * 9/5) + 32),
            kelvin : celcius * 1 + 273,
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
    return unitsConversion
};
}