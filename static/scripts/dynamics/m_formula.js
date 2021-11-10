// MASS
// m given f, a
function mGivenFA(f, a){
    return f/a
}


document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const f = document.getElementById('force-input').value
    const a = document.getElementById('acceleration-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given f, a
    if (f != '' && a != ''){
        answer = mGivenFA(f, a) + ' kg'
        image.src = 'https://equatio-api.texthelp.com/svg/m%3D%5Cfrac%7B%5Cvec%7BF%7D%7D%7B%5Cvec%7Ba%7D%7D'
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
    
})