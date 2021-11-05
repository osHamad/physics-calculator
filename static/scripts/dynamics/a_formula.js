// ACCELERATION
// a given f, m
function aGivenFM(f, m){
    return f/m
}


document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const f = document.getElementById('force-input').value
    const m = document.getElementById('mass-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given f, m
    if (f != '' && m != ''){
        answer = aGivenFM(f, m) + 'm/s^2'
        image.src = 'https://equatio-api.texthelp.com/svg/%5Cvec%7Ba%7D%3D%5Cvec%7B%5Cfrac%7BF%7D%7Bm%7D%7D'
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
    
})