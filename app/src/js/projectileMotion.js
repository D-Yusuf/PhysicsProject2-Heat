import { projectileEquations } from "./data";
const calculateBtn = $("#calculate-btn");
const outputSection = $('#output-section')

export const initialVelocity = $("#initial-velocity");
export const theta = $("#throw-angle");
export const gravity = 10;

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
            if (equation.name == outputs[i].name){
                equationBox.push(equation)
            }
        }
    }
    return equationBox;
    
}
function render(){
    const renderedEquations = getEquationBox();
    let renderedBoxes = '';
    for(let equation of renderedEquations){
        renderedBoxes += `
        <div class="bg-white p-6">
            <h2 class="text-xl text-title font-bold">${equation.title}</h2>
            <p class="text-info">
                ${equation.symbol} = ${equation.equationSolution()} ${equation.unit}
            </p>
        </div>
        `;
        
    }
    outputSection.html(renderedBoxes)
    
    // console.log(renderedBoxes)
}



