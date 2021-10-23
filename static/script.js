document.getElementById('kenimatics-button').addEventListener('click', ()=>{
    getUnitPage('kenimatics')
})

document.getElementById('dynamics-button').addEventListener('click', ()=>{
    getUnitPage('dynamics')
})

function getUnitPage(unitName){
    window.location.href = 'units/' + unitName
}