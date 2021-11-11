document.getElementById('length-button').addEventListener('click', ()=>{
    getUnitPage('length')
})

function getUnitPage(variableName){
    window.location.href = 'unit_conversion/' + variableName
}