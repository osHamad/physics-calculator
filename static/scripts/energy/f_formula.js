// FORCE
// f given w, d
function fGivenWD(w, d){
    return w / d
}


document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const w = document.getElementById('work-input').value
    const d = document.getElementById('distance-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given w, d
    if (w != '' && d != ''){
        answer = fGivenWD(w, d) + ' N'
        image.src = 'https://equatio-api.texthelp.com/svg/F%3D%5Cfrac%7Bw%7D%7B%5CDelta%20d%7D'
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
})