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

// displacement given initial velocity, final velocity and acceleration
function dGivenV1V2A(v1, v2, a){
    return (v2 ** 2 - v1 ** 2) / (2 * a)
}

// function needs optomization
document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const v1 = document.getElementById('velocity1-input').value
    const v2 = document.getElementById('velocity2-input').value
    const t = document.getElementById('time-input').value
    const a = document.getElementById('acceleration-input').value

    let answer
    
    // check which function to use
    // given v1, t, a
    if (v2 === ''){
        answer = dGivenV1TA(v1.value, t.value, a.value)
    }
    // given v2, t, a
    else if (v1 === ''){
        answer = dGivenV2TA(v2.value, t.value, a.value)
    }
    // given v1, v2, t
    else if (a === ''){
        answer = dGivenV1V2T(v1.value, v2.value, t.value)
    }
    // given v1, v2, a
    else if (a === ''){
        answer = dGivenV1V2A(v1.value, v2.value, t.value)
    }
})