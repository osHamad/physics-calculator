// TIME
// time given v1, v2, d
function tGivenV1V2D(v1, v2, d){
    return (2 * d) / (v2 + v1)
}

// time given v1, v2, a
function tGivenV1V2D(v1, v2, a){
    return (v2 - v1) / a
}

// function needs optomization
document.getElementById('calculate-button').addEventListener('click', ()=>{
    // store all variables
    const v1 = document.getElementById('velocity1-input').value
    const v2 = document.getElementById('velocity2-input').value
    const d = document.getElementById('displacement-input').value
    const a = document.getElementById('acceleration-input').value

    let answer
    
    // check which function to use
    // given v1, v2, t
    if (a === ''){
        answer = dGivenV1V2D(v1, v2, d)
    }
    else if (d === ''){
        answer = tGivenV1V2D(v1, v2, a)
    }
    
})