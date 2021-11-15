// DSITANCE
// d given w, f
function dGivenWF(w, f){
    return w / f
}

document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const w = document.getElementById('work-input').value
    const f = document.getElementById('force-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given w, f
    if (w != '' && f != ''){
        answer = dGivenWF(w, f) + ' m'
        image.src = 'https://equatio-api.texthelp.com/svg/%5CDelta%20d%3D%5Cfrac%7Bw%7D%7BF%7D'
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
})