// FORCE
// f given m, a
function fGivenMA(m, a){
    return m*a
}


document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const m = document.getElementById('mass-input').value
    const a = document.getElementById('acceleration-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given m, a
    if (m != '' && a != ''){
        answer = fGivenMA(m, a) + 'N'
        image.src = 'https://equatio-api.texthelp.com/svg/%5Cvec%7BF%7D%3Dm%5Cvec%7Ba%7D'
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
    
})