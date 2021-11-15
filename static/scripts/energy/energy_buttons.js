document.getElementById('work-button').addEventListener('click', ()=>{
    getUnitPage('work')
})

document.getElementById('force-button').addEventListener('click', ()=>{
    getUnitPage('force')
})

document.getElementById('distance-button').addEventListener('click', ()=>{
    getUnitPage('distance')
})



function getUnitPage(variableName){
    window.location.href = 'energy/' + variableName
}