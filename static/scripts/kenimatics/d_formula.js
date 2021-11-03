// DISPLACEMENT
// displacement given v1, a, t
function dGivenV1AT(v1, a, t){
    return v1 * t + 0.5 * a * t ** 2
}

// displacement given v1, a, t
function dGivenV2AT(v2, a, t){
    return v2 * t - 0.5 * a * t ** 2
}

// displacement given v1, v2, t
function dGivenV1V2T(v1, v2, t){
    return (v1/2 + v2/2) * t
}

// displacement given v1, v2, a
function dGivenV1V2A(v1, v2, a){
    return (v2 ** 2 - v1 ** 2) / (2 * a)
}

document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const v1 = document.getElementById('velocity1-input').value
    const v2 = document.getElementById('velocity2-input').value
    const a = document.getElementById('acceleration-input').value
    const t = document.getElementById('time-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given v1, a, t
    if (v1 != '' && a != '' && t != ''){
        answer = dGivenV1AT(v1, t, a) + 'm'
        image.src = 'https://equatio-api.texthelp.com/svg/%5CDelta%20d%3D%5Cvec%7Bv_1%7D%5CDelta%20t%2B%5Cfrac%7B1%7D%7B2%7D%5Cvec%7Ba%7D%5CDelta%20t%5E2'
    }
    // given v2, a, t
    else if (v2 != '' && a != '' && t != ''){
        answer = dGivenV2AT(v2, a, t) + 'm'
        image.src = 'https://equatio-api.texthelp.com/svg/%5CDelta%20d%3D%5Cvec%7Bv_2%7D%5CDelta%20t-%5Cfrac%7B1%7D%7B2%7D%5Cvec%7Ba%7D%5CDelta%20t%5E2'
    }
    // given v1, v2, t
    else if (v1 != '' && v2 != '' && t != ''){
        answer = dGivenV1V2T(v1, v2, t) + 'm'
        image.src = 'https://equatio-api.texthelp.com/svg/%5CDelta%20d%3D%5Cfrac%7B%5Cvec%7Bv_1%7D%2B%5Cvec%7Bv_2%7D%7D%7B2%7D%5CDelta%20t'
    }
    // given v1, v2, a
    else if (v1 != '' && v2 != '' && t != ''){
        answer = dGivenV1V2A(v1, v2, a) + 'm'
        image.src = 'https://equatio-api.texthelp.com/svg/%5CDelta%20d%3D%5Cfrac%7B%5Cvec%7Bv_2%7D%5E2-%5Cvec%7Bv_1%7D%5E2%7D%7B2%5Cvec%7Ba%7D%7D'
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
})