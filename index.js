/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let numberInput = document.getElementById("number")
const convertBtn = document.getElementById("convert")
let length = document.getElementById("length-convert")
let volume = document.getElementById("volume-convert")
let mass = document.getElementById("mass-convert")



convertBtn.addEventListener("click", function (){
    const numberValue = numberInput.value     
    const parsedNumber = parseFloat(numberValue)
    if (!isNaN(parsedNumber)){
        const meter = parsedNumber
        const feet = meter * 3.281
        const feetToMeters = parsedNumber / 3.281
        length.innerHTML = `
            ${numberValue} meters = ${feet.toFixed(3)} feet | 
            ${numberValue} feet = ${feetToMeters.toFixed(3)} meters`
        const liter = parsedNumber
        const gallon = liter * 0.264
        const gallonToLiters = parsedNumber / 0.264
        volume.innerHTML = `
            ${numberValue} liters = ${gallon.toFixed(3)} gallons | 
            ${numberValue} gallons = ${gallonToLiters.toFixed(3)} liters`
        const kilos = parsedNumber
        const pounds = kilos * 2.204
        const poundsToKilos = parsedNumber / 2.204
        mass.innerHTML = `
            ${numberValue} kilos = ${pounds.toFixed(3)} pounds | 
            ${numberValue} pounds = ${poundsToKilos.toFixed(3)} kilos`
    }
})
