import { projectileEquations } from "./data";
const calculateBtn = $("#calculate-btn");
const outputSection = $('#output-section')

export const initialVelocity = $("#initial-velocity");
export const theta = $("#throw-angle");
export const gravity = 10;

calculateBtn.on("click", render);
function render(){
    const renderedEquations = getEquationBox();
    let renderedBoxes = '';
    for(let equation of renderedEquations){
        renderedBoxes += `
        <div class="bg-white p-6">
        <span class="text-info flex absolute">
            <div
            class="tooltip"
            data-tip="${equation.equation}"
            >
            <i
            class="fa-sharp sm:text-2xl text-xl fa-solid fa-circle-info"
            ></i>
            </div>
        </span>
            <h2 class="text-xl text-title font-bold">${equation.title}</h2>
            <p class="text-info">
                ${equation.symbol} = ${equation.equationSolution()} ${equation.unit}
            </p>
        </div>
        `;
        
    }
    outputSection.html(renderedBoxes)
    console.log(outputSection.html())
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

function getCheckedBoxes() {

  let checkedBoxes = [];
  for (let box of $('.output-checkbox:checked')) {
    // console.log(box)
    checkedBoxes.push(box);
  }
  return checkedBoxes;
}








