/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEl = document.getElementById("input-el");
let convertBtn = document.getElementById("convert-btn");
let firstText = document.getElementById("meter-feet");
let secondText = document.getElementById("litre-gallon");
let thirdText = document.getElementById("kilogram-pound");
const metric = {
  meter: (value) => {
    return (value / 3.281).toFixed(3);
  },
  litre: (value) => {
    return (value / 0.264).toFixed(3);
  },
  kilogram: (value) => {
    return (value / 2.204).toFixed(3);
  },
};
const imperial = {
  foot: (value) => {
    return (value * 3.281).toFixed(3);
  },
  gallon: (value) => {
    return (value * 0.264).toFixed(3);
  },
  pound: (value) => {
    return (value * 2.204).toFixed(3);
  },
};


export function compare(changeText, value, metricKey, imperialKey, metricFunction, imperialFunction) {
    
    changeText.innerHTML = `${value} ${metricKey} = ${imperialFunction} ${imperialKey} <br> ${value} ${imperialKey} = ${metricFunction} ${metricKey}`
  
}
// Self calling function
export function compareAll(){
  let value = inputEl.value
  compare(firstText,value, "meters", "feet", metric.meter(value), imperial.foot(value))
  compare(secondText,value, "litres", "gallons", metric.litre(value), imperial.gallon(value))
  compare(thirdText,value, "kilograms", "pounds", metric.kilogram(value), imperial.pound(value))
}

convertBtn.addEventListener("click",()=>compareAll())
inputEl.addEventListener("focus", ()=>inputEl.value = "")


