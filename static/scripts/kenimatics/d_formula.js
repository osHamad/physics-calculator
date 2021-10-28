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
    let image
    
    // check which function to use
    // given v1, t, a
    if (v1 != '' && t != '' && a != ''){
        answer = dGivenV1TA(v1, t, a)
    }
    // given v2, t, a
    else if (v2 != '' && t != '' && a != ''){
        answer = dGivenV2TA(v2, t, a)
    }
    // given v1, v2, t
    else if (v1 != '' && v2 != '' && t != ''){
        answer = dGivenV1V2T(v1, v2, t)
    }
    // given v1, v2, a
    else if (v1 != '' && v2 != '' && t != ''){
        answer = dGivenV1V2A(v1, v2, t)
    }
    else {
        answer = 'There was a problem with your input'
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer + 'm'
})