// WORK
// w given f, d
function wGivenFD(f, d){
    return f * d
}


document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const f = document.getElementById('force-input').value
    const d = document.getElementById('distance-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given f, d
    if (f != '' && d != ''){
        answer = wGivenFD(f, d) + ' J'
        image.src = 'https://equatio-api.texthelp.com/svg/w%3DF%5CDelta%20d'
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
})