document.getElementById('calculate-button').addEventListener('click', ()=> {
    const answer = document.getElementById('answer')
    const lengthFrom = document.getElementById('conversion-units-1').value
    const lengthTo = document.getElementById('conversion-units-2').value
    const lengthValue = document.getElementById('length-input').value
    const conversionRate = rateToMeter[lengthTo.toLowerCase()][0] / rateToMeter[lengthFrom.toLowerCase()][0]
    answer.innerText = 'CONVERTED: ' + conversionRate * lengthValue.toString() + rateToMeter[lengthTo.toLowerCase()][1]
    setSide(conversionRate, lengthValue)
})

function setSide(con, l) {
    const conversionRate = document.getElementById('conversion-rate')
    const length = document.getElementById('length-given')
    const rate = document.getElementById('rate-given')
    const theDiv = document.getElementById('formula-div')
    conversionRate.innerText=con
    length.innerText=l
    rate.innerText=con
    theDiv.style.display = 'inline'
}

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