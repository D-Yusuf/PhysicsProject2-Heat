export const projectileEquations = [
    {
        name:'max-height',
        unit: "m",
        symbol: 'hmax',
        equation: 'ν∘²sin²θ/2g'
        
    },
    {
        name:'max-height-time',
        unit: 's',
        symbol: 't',
        equation: 'ν∘sinθ/g'
        
    },
    {
        name:'range',
        unit: 'm',
        symbol: 'R',
        equation: 'ν∘²sin2θ/g'
        
    },
    {
        name:'horizontal-speed',
        unit: 'm/s',
        symbol: 'vᕁ',
        equation: 'ν∘cosθ'
        
    },
    {
        name:'path-equation',
        unit: '',
        symbol: 'y',
        equation: 'y = tanθ·x(-g/2v°²cos²θ)x²'
        
    },
]
export function getEquations(){
    return projectileEquations
}