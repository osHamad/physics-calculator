// FORCE NORMAL
// fn given ff, mu
function fnGivenFfMu(ff, mu){
    return ff/mu
}


document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const ff = document.getElementById('forcef-input').value
    const mu = document.getElementById('frictionc-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given ff, mu
    if (ff != '' && mu != ''){
        answer = fnGivenFfMu(ff, mu) + 'N'
        image.src = 'https://equatio-api.texthelp.com/svg/%5Cvec%7BF_N%7D%3D%5Cfrac%7B%5Cvec%7BF_f%7D%7D%7B%5Cmu%7D'
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
    
})