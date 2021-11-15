document.getElementById('kenimatics-button').addEventListener('click', ()=>{
    getUnitPage('kenimatics')
})

document.getElementById('dynamics-button').addEventListener('click', ()=>{
    getUnitPage('dynamics')
})

document.getElementById('energy-button').addEventListener('click', ()=>{
    getUnitPage('energy')
})

document.getElementById('unit-conversion-button').addEventListener('click', ()=>{
    getUnitPage('unit_conversion')
})

function getUnitPage(unitName){
    window.location.href = 'units/' + unitName
}