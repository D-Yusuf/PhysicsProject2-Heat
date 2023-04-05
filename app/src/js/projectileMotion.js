import { projectileEquations } from "./data";
const initialVelocity = $("#initial-velocity");
const theta = $("#throw-angle");
const calculateBtn = $("#calculate-btn");
const outputSection = $('output-section')

calculateBtn.on("click", render);

function getCheckedBoxes() {

  let checkedBoxes = [];
  for (let box of $('.output-checkbox:checked')) {
    // console.log(box)
    checkedBoxes.push(box);
  }
  return checkedBoxes;
}


function getEquationBox() {
    let equationBox = [];
    const outputs = getCheckedBoxes()
    for(let i = 0; i < outputs.length; i++){
        for(let equation of projectileEquations){
            if (equation.name.includes(outputs[i].name)){
                equationBox.push(equation)
            }
        }
    }
    // return equationBox;
    console.log(equationBox)
}
function render(){
    getEquationBox()
}
