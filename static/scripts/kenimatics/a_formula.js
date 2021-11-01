// ACCELERATION
// acceleration given v1, v2, t
function aGivenV1V2T(v1, v2, t){
    return (v2 - v1)/t
}

// acceleration given v1, v2, d
function aGivenV1V2D(v1, v2, d){
    return (v2 ** 2 - v1 ** 2) / (2 * d)
}

// acceleration given v1, t, d
function aGivenV1DT(v1, t, d){
    return 2 * (d - v1 * t) / t ** 2
}

// acceleration given v2, t, d
function aGivenV2DT(v2, t, d){
    return -2 * (d - v2 * t) / t ** 2
}

// function needs optomization
document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const v1 = document.getElementById('velocity1-input').value
    const v2 = document.getElementById('velocity2-input').value
    const d = document.getElementById('displacement-input').value
    const t = document.getElementById('time-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given v1, v2, t
    if (v1 != '' && v2 != '' && t != ''){
        answer = aGivenV1V2T(v1, v2, t) + 'm/s^2'
        image.src = 'https://equatio-api.texthelp.com/svg/%5Cvec%7Ba%7D%3D%5Cfrac%7Bv_2-v_1%7D%7B%5CDelta%20t%7D'
    }
    // given v1, v2, d
    else if (v1 != '' && v2 != '' && d != ''){
        answer = aGivenV1V2D(v1, v2, d) + 'm/s^2'
        image.src = 'https://equatio-api.texthelp.com/svg/%5Cvec%7Ba%7D%3D%5Cfrac%7B%5Cvec%7Bv_2%7D%5E2-%5Cvec%7Bv_1%7D%5E2%7D%7B2%5CDelta%20d%7D'
    }
    // given v1, d, t
    else if (v1 != '' && d != '' && t != ''){
        answer = aGivenV1DT(v1, t, d) + 'm/s^2'
        image.src = 'https://equatio-api.texthelp.com/svg/%5Cvec%7Ba%7D%3D%5Cfrac%7B2%5Cleft(%5CDelta%20d-%5Cvec%7Bv_1%7D%5CDelta%20t%5Cright)%7D%7B%5CDelta%20t%5E2%7D'
    }
    // given v2, d, t
    else if (v2 != '' && d != '' && t != ''){
        answer = aGivenV2DT(v2, t, d) + 'm/s^2'
        image.src = 'https://equatio-api.texthelp.com/svg/%5Cvec%7Ba%7D%3D%5Cfrac%7B-2%5Cleft(%5CDelta%20d-%5Cvec%7Bv_2%7D%5CDelta%20t%5Cright)%7D%7B%5CDelta%20t%5E2%7D'
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
    
})