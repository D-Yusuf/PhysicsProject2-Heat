import { theta } from "./projectileMotion"
import { initialVelocity } from "./projectileMotion"
import { gravity } from "./projectileMotion"

export const projectileEquations = [
    {
        name:'max-height',
        title: 'اقصى ارتفاع' ,
        unit: "m",
        symbol: 'hmax',
        equation: 'ν∘²sin²θ/2g',
        equationSolution: function() {
            const velocity = initialVelocity.val();
            const angle = theta.val()*(Math.PI/180);
            const g = gravity;
            return ((Math.pow(velocity, 2)*Math.pow(Math.sin(angle), 2)) /(2*g)).toFixed(2);
        },        
    },
    {
        name:'max-height-time',
        title: 'زمن اقصى ارتفاع' ,
        unit: 's',
        symbol: 't',
        equation: 'ν∘sinθ/g',
        equationSolution: function() {
            const velocity = initialVelocity.val();
            const angle = theta.val()*(Math.PI/180);
            const g = gravity;
            return ((Math.pow(velocity, 1)*Math.pow(Math.sin(angle), 1)) /(g)).toFixed(2);
        }, 
        
    },
    {
        name:'range',
        title: 'المدى' ,
        unit: 'm',
        symbol: 'R',
        equation: 'ν∘²sin2θ/g',
        equationSolution: function() {
            const velocity = initialVelocity.val();
            const angle = theta.val()*(Math.PI/180);
            const g = gravity;
            return ((Math.pow(velocity, 2)*Math.pow(Math.sin(2*angle), 1)) /(g)).toFixed(2);
        }, 
        
    },
    {
        name:'horizontal-speed',
        title: 'السرعة الافقية' ,
        unit: 'm/s',
        symbol: 'vᕁ',
        equation: 'ν∘cosθ',
        equationSolution: function() {
            const velocity = initialVelocity.val();
            const angle = theta.val()*(Math.PI/180);
            const g = gravity;
            return ((Math.pow(velocity, 1)*Math.pow(Math.cos(angle), 1))).toFixed(2);
        }, 
        
    },
    {
        name:'path-equation',
        title: 'معادلة المسار' ,
        unit: '',
        symbol: 'y',
        equation: 'y = tanθ·x(-g/2v°²cos²θ)x²',
        equationSolution: function() {
            const velocity = initialVelocity.val();
            const angle = theta.val()*(Math.PI/180);
            const g = gravity;
            let equation = gravity/((2*Math.pow(velocity, 2))*Math.pow(Math.cos(angle), 2))
            let yEquation =  equation;     

            return `${Math.tan(angle).toFixed(2)} x -${yEquation.toFixed(2)} x²`
        }, 
        
    },
]
