document.getElementById('force-button').addEventListener('click', ()=>{
    getUnitPage('force')
})

document.getElementById('mass-button').addEventListener('click', ()=>{
    getUnitPage('mass')
})

document.getElementById('acceleration-button').addEventListener('click', ()=>{
    getUnitPage('acceleration')
})

document.getElementById('force-normal-button').addEventListener('click', ()=>{
    getUnitPage('force_normal')
})

document.getElementById('force-friction-button').addEventListener('click', ()=>{
    getUnitPage('force_friction')
})

document.getElementById('friction-coefficient-button').addEventListener('click', ()=>{
    getUnitPage('friction_coefficient')
})

document.getElementById('gravity-button').addEventListener('click', ()=>{
    getUnitPage('gravity')
})

document.getElementById('radius-button').addEventListener('click', ()=>{
    getUnitPage('radius')
})

document.getElementById('mass-1-button').addEventListener('click', ()=>{
    getUnitPage('mass_one')
})

document.getElementById('mass-2-button').addEventListener('click', ()=>{
    getUnitPage('mass_two')
})

function getUnitPage(variableName){
    window.location.href = 'dynamics/' + variableName
}