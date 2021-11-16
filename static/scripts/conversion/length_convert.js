document.getElementById('calculate-button').addEventListener('click', ()=> {
    const answer = document.getElementById('answer')
    const lengthFrom = document.getElementById('conversion-units-1').value
    const lengthTo = document.getElementById('conversion-units-2').value
    const lengthValue = document.getElementById('length-input').value
    const converted = rateToMeter[lengthTo.toLowerCase()][0] / rateToMeter[lengthFrom.toLowerCase()][0] * lengthValue
    answer.innerText = 'CONVERTED: ' + converted.toString() + rateToMeter[lengthTo.toLowerCase()][1]
})

// conversion units from current unit to meter
// map unit symbols to unit names for printing answer
const rateToMeter = {
    'kilometer': [0.001,'km'],
    'meter' : [1,'m'],
    'centimeter' : [100,'cm'],
    'millimeter': [1000,'mm'],
    'micrometer': [1e+6,'µm'],
    'nanometer': [1e+9, 'nm']
}