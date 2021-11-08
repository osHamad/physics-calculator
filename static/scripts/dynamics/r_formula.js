// RADIUS
// r given g, m1, m2
function rGivenGM1M2(g, m1, m2){
    let G = 6.67e-11
    return Math.sqrt((G * m1 * m2) / (g))
}


document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const g = document.getElementById('gravity-input').value
    const m1 = document.getElementById('mass-1-input').value
    const m2 = document.getElementById('mass-2-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given g, m1, m2
    if (g != '' && m1 != '' && m2 != ''){
        answer = rGivenGM1M2(g, m1, m2) + ' m'
        image.src = 'https://equatio-api.texthelp.com/svg/%5Cbegin%7Barray%7D%7Bl%7Dr%3D%5Csqrt%7B%5Cfrac%7BGm_1m_2%7D%7BF_g%7D%7D%5Cend%7Barray%7D'
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
    
})