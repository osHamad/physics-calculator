// FINAL VELOCITY
// final velocity given v1, a, d
function v2GivenV1AD(v1, a, d){
    return Math.sqrt(v1 ** 2 + 2 * a * d)
}

// final velocity given t, d, a
function v2GivenATD(a, t, d){
    return ( a * t ** 2 + 2 * d) / (2 * t)
}

// final velocity given v1, a, t
function v2GivenATD(v1, a, t){
    return a * t + v1
}

// final velocity given v1, a, t
function v2GivenATD(v1, t, d){
    return (-t * v1 + 2 * d) / (t)
}

document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const v1 = document.getElementById('velocity1-input').value
    const t = document.getElementById('time-input').value
    const d = document.getElementById('displacement-input').value
    const a = document.getElementById('acceleration-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given v1, t, a
    if (v1 != '' && t != '' && a != ''){
        answer = dGivenV1TA(v1, t, a) + 'm/s'
        image.src = ''
    }
    // given v1, a, d
    else if (v1 != '' && a != '' && d != ''){
        answer = v2GivenV1AD(v1, a, d) + 'm/s'
        image.src = ''
    }
    // given v1, a, t
    else if (v1 != '' && a != '' && t != ''){
        answer = v2GivenATD(v1, a, t) + 'm/s'
        image.src = ''
    }
    // given v1, t, d
    else if (v1 != '' && t != '' && d != ''){
        answer = v2GivenATD(v1, t, d) + 'm/s'
        image.src = ''
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
})