// formulas for all variables, solved for all varialbes
// DISPLACEMENT
// displacement given initial velocity, time and acceleration
function dGivenV1TA(v1, t, a){
    return v1 * t + 0.5 * a * t ** 2
}

// displacement given final velocity, time and acceleration
function dGivenV2TA(v2, t, a){
    return v2 * t - 0.5 * a * t ** 2
}

// displacement given initial velocity, final velocity and time
function dGivenV1V2T(v1, v2, t){
    return ((v1 + v2) / 2) * t
}

// FINAL VELOCITY
// final velocity given initial velocity, acceleration and time
function v2GivenV1TA(v1, t, a){
    a = parseFloat(a)
    v1 = parseFloat(v1)
    t = parseFloat(t)
    return v1 + a * t
}

// final velocity given initial velocity, acceleration and displacement
function v2GivenV1AD(v1, a, d){
    a = parseFloat(a)
    v1 = parseFloat(v1)
    d = parseFloat(d)
    return Math.sqrt(v1 ** 2 * a * d)
}

// ACCELERATION
// acceleration given initial velocity, final velocity and time
function aGivenV1V2T(v1, v2, t){
    return (v2 - v1) / t
}

// function needs optomization
document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const v1 = document.getElementById('velocity1-input')
    const v2 = document.getElementById('velocity2-input')
    const t = document.getElementById('time-input')
    const a = document.getElementById('acceleration-input')
    const d = document.getElementById('displacement-input')

    let answer
    
    // check which function to use
    // displacement functions
    if (d == null){
        // given v1, t and a
        if (v1.value != '' && t.value != '' && a.value != ''){
            answer = dGivenV1TA(v1.value, t.value, a.value)
        }
        // given v2, t, a
        else if (v2.value != '' && t.value != '' && a.value != ''){
            answer = dGivenV2TA(v2.value, t.value, a.value)
        }
        // given v1, v2, t
        else if (v1.value != '' && v2.value != '' && t.value != ''){
            answer = dGivenV1V2T(v1.value, v2.value, t.value)
        }
    // final velocity functions
    } else if (v2 == null){
        // given v1, t, a
        if (v1.value != '' && t.value != '' && a.value != ''){
            answer = v2GivenV1TA(v1.value, t.value, a.value)
        // given v1, a, d
        } else if (v1.value != '' && a.value != '' && d.value != ''){
            answer = v2GivenV1AD(v1.value, a.value, d.value)
        }
    }
    
    
})