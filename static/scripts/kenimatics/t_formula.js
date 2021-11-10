// TIME
// time given v1, v2, d
function tGivenV1V2D(v1, v2, d){
    return (2 * d) / (v2 + v1)
}

// time given v1, v2, a
function tGivenV1V2A(v1, v2, a){
    return (v2 - v1) / a
}

document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const v1 = document.getElementById('velocity1-input').value
    const v2 = document.getElementById('velocity2-input').value
    const a = document.getElementById('acceleration-input').value
    const d = document.getElementById('displacement-input').value

    let answer
    let image = document.getElementById('formula-img')
    const unit = ' s'
    
    // check which function to use
    // given v1, v2, a
    if (v1 != '' && v2 != '' && a != ''){
        answer = tGivenV1V2A(v1, v2, a) + unit
        image.src = 'https://equatio-api.texthelp.com/svg/%5Cvec%7B%5CDelta%20t%7D%3D%5Cfrac%7B%5Cvec%7Bv_2%7D-%5Cvec%7Bv_1%7D%7D%7B%5Cvec%7Ba%7D%7D'
    }
    // given v1, v2, d
    else if (v1 != '' && v2 != '' && d != ''){
        answer = tGivenV1V2D(v1, v2, d) + unit
        image.src = 'https://equatio-api.texthelp.com/svg/%5Cvec%7B%5CDelta%20t%7D%3D%5Cfrac%7B2%5Cvec%7B%5CDelta%20d%7D%7D%7B%5Cvec%7Bv_1%7D%2B%5Cvec%7Bv_2%7D%7D'
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
})