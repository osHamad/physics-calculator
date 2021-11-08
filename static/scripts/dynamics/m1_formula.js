// MASS ONE
// m1 given g, r, m2
function m1GivenGRM2(g, r, m2){
    let G = 6.67e-11
    return (g * r ** 2) / (G * m2)
}


document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const g = document.getElementById('gravity-input').value
    const r = document.getElementById('radius-input').value
    const m2 = document.getElementById('mass-2-input').value

    let answer
    let image = document.getElementById('formula-img')
    
    // check which function to use
    // given g, r, m2
    if (g != '' && r != '' && m2 != ''){
        answer = m1GivenGRM2(g, r, m2) + ' kg'
        image.src = 'https://equatio-api.texthelp.com/svg/m_1%3D%5Cfrac%7BF_gr%5E2%7D%7BGm_2%7D'
    }
    else {
        answer = 'There was a problem with your input'
        image.src = ''
    }
    document.getElementById('answer').innerText = 'ANSWER: ' + answer
    
})