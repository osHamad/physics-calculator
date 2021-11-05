// FRICTION COEFFICIENT
// mu given ff, fn
function muGivenFfFn(ff, fn){
    return ff/fn
}


document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const ff = document.getElementById('forcef-input').value
    const fn = document.getElementById('forcen-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given ff, fn
    if (ff != '' && fn != ''){
        answer = muGivenFfFn(ff, fn)
        image.src = 'https://equatio-api.texthelp.com/svg/%5Cmu%3D%5Cvec%7B%5Cfrac%7BF_f%7D%7B%5Cvec%7BF_N%7D%7D%7D'
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
    
})