// GRAVITY
// g given r, m1, m2
function gGivenRM1M2(r, m1, m2){
    let G = 6.67e-11
    return (G * m1 * m2) / (r ** 2)
}


document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const r = document.getElementById('radius-input').value
    const m1 = document.getElementById('mass-1-input').value
    const m2 = document.getElementById('mass-2-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given g, m1, m2
    if (r != '' && m1 != '' && m2 != ''){
        answer = gGivenRM1M2(r, m1, m2) + ' N/kg or m/s^2'
        image.src = 'https://equatio-api.texthelp.com/svg/F_g%3D%5Cfrac%7BGm_1m_2%7D%7Br%5E2%7D'
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
    
})