// FINAL VELOCITY
// final velocity given v1, a, d
function v2GivenV1AD(v1, a, d){
    return Math.sqrt(v1 ** 2 + 2 * a * d)
}

// final velocity given a, t, d
function v2GivenATD(a, t, d){
    return ( a * t ** 2 + 2 * d) / (2 * t)
}

// final velocity given v1, a, t
function v2GivenV1AT(v1, a, t){
    return a * t + v1
}

// final velocity given v1, t, d
function v2GivenV1TD(v1, t, d){
    return (-t * v1 + 2 * d) / (t)
}

document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const v1 = document.getElementById('velocity1-input').value
    const a = document.getElementById('acceleration-input').value
    const t = document.getElementById('time-input').value
    const d = document.getElementById('displacement-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given v1, a, t
    if (v1 != '' && a != '' && t != ''){
        answer = dGivenV1AT(v1, a, t) + 'm/s'
        image.src = 'https://equatio-api.texthelp.com/svg/%5Cvec%7Bv_2%7D%3D%5Cvec%7Bv_1%7D%2B%5Cvec%7Ba%7D%5CDelta%20t'
    }
    // given v1, a, d
    else if (v1 != '' && a != '' && d != ''){
        answer = v2GivenV1AD(v1, a, d) + 'm/s'
        image.src = 'https://equatio-api.texthelp.com/svg/%5Cvec%7Bv_2%7D%3D%5Csqrt%7B%5Cvec%7Bv_1%7D%5E2%2B2%5Cvec%7Ba%7D%5Cvec%7B%5CDelta%20d%7D%7D'
    }
    // given a, t, d
    else if (a != '' && t != '' && d != ''){
        answer = v2GivenATD(a, t, d) + 'm/s'
        image.src = 'https://equatio-api.texthelp.com/svg/%5Cvec%7Bv_2%7D%3D%5Cfrac%7B2%5Cvec%7B%5CDelta%20d%7D%2B%5Cvec%7Ba%7D%5CDelta%20t%5E2%7D%7B2%5CDelta%20t%7D'
    }
    // given v1, t, d
    else if (v1 != '' && t != '' && d != ''){
        answer = v2GivenV1TD(v1, t, d) + 'm/s'
        image.src = 'https://equatio-api.texthelp.com/svg/%5Cvec%7Bv_2%7D%3D%5Cfrac%7B-%5CDelta%20t%5Cvec%7Bv_1%7D%2B2%5Cvec%7B%5CDelta%20d%7D%7D%7Bt%7D'
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
})