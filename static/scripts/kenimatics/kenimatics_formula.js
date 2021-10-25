// formulas for all variables, solved for all varialbes
// DISPLACEMENT
// displacement given initial velocity, time and acceleration
function dGivenV1TA(v1, t, a){
    return v1 * t + 0.5 * a * t ** 2
}

// displacement given final velocity, time and acceleration
function dGivenV1TA(v2, t, a){
    return v2 * t - 0.5 * a * t ** 2
}

// displacement given initial velocity, final velocity and time
function dGivenV1V2T(v1, v2, t){
    return ((v1 + v2) / 2) * t
}

// FINAL VELOCITY
// final velocity given initial velocity, acceleration and time
function v2GivenV1AT(v1, a, t){
    return v1 + a * t
}

// final velocity given initial velocity, acceleration and displacement
function v2GivenV1AD(v1, a, d){
    return Math.sqrt(v1 ** 2 * a * d)
}

// ACCELERATION
// acceleration given initial velocity, final velocity and time
function aGivenV1V2T(v1, v2, t){
    return (v2 - v1) / t
}

document.getElementById('calculate-button').addEventListener('click', ()=>{
    const calculatorVar = [
    [document.getElementById('velocity1-input'), 'v1'],
    [document.getElementById('velocity2-input'), 'v2'],
    [document.getElementById('time-input'), 't'],
    [document.getElementById('acceleration-input'), 'a'],
    [document.getElementById('displacement-input'), 'd']
    ]
    // store variable we are calculating
    let mainVar
    // storing available variables
    let availableVars = []
    // check which variable we are calculating
    for (let i=0; i<Object.keys(calculatorVar).length; i++){
        if (calculatorVar[i][0] == null){
            mainVar = calculatorVar[i][1]
        } else if (calculatorVar[i][0].value != ''){     // check if the inputs are filled in
            availableVars.push(calculatorVar[i][1])
        }
    }
    const findFunction = {
        'v2': {}
        // make it so that you can find the required function (found above) by seeing the mainVar and the availableVars
    }
    
})