document.getElementById('unit-conversion-button').addEventListener('click', ()=>{
    getUnitPage('unit_conversion')
})

function getUnitPage(variableName){
    window.location.href = '/units/tools/' + variableName
}