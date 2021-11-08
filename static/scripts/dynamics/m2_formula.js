// MASS TWO
// m2 given g, r, m1
function m2GivenGRM1(g, r, m1){
    let G = 6.67e-11
    return (g * r ** 2) / (G * m1)
}


document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const g = document.getElementById('gravity-input').value
    const r = document.getElementById('radius-input').value
    const m1 = document.getElementById('mass-1-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given g, r, m1
    if (g != '' && r != '' && m1 != ''){
        answer = m2GivenGRM1(g, r, m1) + ' kg'
        image.src = 'https://equatio-api.texthelp.com/svg/m_2%3D%5Cfrac%7BF_gr%5E2%7D%7BGm_1%7D'
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
    
})