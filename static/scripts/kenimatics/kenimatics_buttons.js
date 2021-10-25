document.getElementById('velocity-1-button').addEventListener('click', ()=>{
    getUnitPage('initial_velocity')
})

document.getElementById('velocity-2-button').addEventListener('click', ()=>{
    getUnitPage('final_velocity')
})

document.getElementById('time-button').addEventListener('click', ()=>{
    getUnitPage('time')
})

document.getElementById('displacement').addEventListener('click', ()=>{
    getUnitPage('displacement')
})

document.getElementById('acceleration').addEventListener('click', ()=>{
    getUnitPage('acceleration')
})

function getUnitPage(variableName){
    window.location.href = 'kenimatics/' + variableName
}