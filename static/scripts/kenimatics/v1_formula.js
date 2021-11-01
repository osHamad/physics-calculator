// INITIAL VELOCITY
// v1 given v2, a, t
function v1GivenV2AT(v2, a, t){
    return -a * t + v2
}

// v1 given v2, a, d
function v1GivenV2AD(v2, a, d){
    return Math.sqrt(-2 * a * d + v2 ** 2)
}

// v1 given a, t, d
function v1GivenATD(a, t, d){
    return (-a * t ** 2 + 2 * d) / (2 * t)
}

function v1GivenV2TD(v2, t, d){
    return (-t * v2 + 2 * d) / t
}

// function needs optomization
document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const v1 = document.getElementById('time-input').value
    const v2 = document.getElementById('velocity2-input').value
    const d = document.getElementById('displacement-input').value
    const a = document.getElementById('acceleration-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given v1, v2, d
    if (v2 != '' && t != '' && a != ''){
        answer = v1GivenV2AT(v2, t, a) + 'm/s'
        image.src = ''
    }
    else if (v2 != '' && d != '' && a != ''){
        answer = v1GivenV2AD(v2, d, a) + 'm/s'
        image.src = ''
    }
    else if (a != '' && t != '' && d != ''){
        answer = v1GivenATD(a, t, d) + 'm/s'
        image.src = ''
    }
    else if (v2 != '' && t != '' && a != ''){
        answer = v1GivenV2TD(v2, t, d) + 'm/s'
        image.src = ''
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
    
})