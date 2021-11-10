// FORCE FRICTION
// ff given mu, fn
function ffGivenMuFn(mu, fn){
    return mu * fn
}


document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const mu = document.getElementById('frictionc-input').value
    const fn = document.getElementById('forcen-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given mu, fn
    if (mu != '' && fn != ''){
        answer = ffGivenMuFn(mu, fn) + ' N'
        image.src = 'https://equatio-api.texthelp.com/svg/%5Cvec%7BF_f%7D%3D%5Cmu%5Cvec%7BF_n%7D'
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
    
})