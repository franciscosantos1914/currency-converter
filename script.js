const currencyTable = {
    KZ: {
        EUR: 0.0011,
        USD: 0.0012,
        BRL: 0.0060
    },
    EUR: {
        KZ: 920.04,
        USD: 1.09,
        BRL: 5.54
    },
    USD: {
        KZ: 847.42,
        EUR: 0.92,
        BRL: 5.10
    },
    BRL: {
        KZ: 166.03,
        EUR: 0.18,
        USD: 0.20
    }
}

const enteredValue = document.getElementById("amount")
const toCurrency = document.getElementById("toCurrency")
const fromCurrency = document.getElementById("fromCurrency")

document.getElementById("convertButton").addEventListener("click", function (evt) {
    let conversion = currencyTable[toCurrency.value][fromCurrency.value]
    let result = Number(enteredValue.value) / conversion
    result = Number(result).toFixed(2)
    document.getElementById("resultText").innerText = `Resultado: ${result} ${toCurrency.value}`
})

// keyed Collections
const map = new Map()
map.set("key1", "value1")
console.log(map.get("key1"))

const set = new Set()
set.add(1)
set.add(2)

set.forEach(val => {
    console.log(val)
})

// WeakMap e WeakSet
// JSON
// if(2 == 2){ }