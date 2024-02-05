const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".moedas")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".div1-value-to-convert")
    const currencuValueConverted = document.querySelector(".div1-value")
    const dolarToday = 4.96
    const euroToday = 5.34
    const libraToday = 6.25

    if (currencySelect.value == "Dolar") {

        currencuValueConverted.innerHTML = new Intl.NumberFormat("en-US", { 
                style: "currency",
                currency: "USD" }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "Euro"){

        currencuValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { 
            style: "currency",
            currency: "EUR" }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "Libra"){

        currencuValueConverted.innerHTML = new Intl.NumberFormat("en-GB", { 
            style: "currency",
            currency: "GBP" }).format(inputCurrencyValue / euroToday)
    }
    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { 
        style: "currency",
        currency: "BRL" }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById("curency-name")
    const currencyImg = document.querySelector(".currency-bandeira")

    if (currencySelect.value == "Dolar"){
        currencyName.innerHTML = "Dolár Americano"
        currencyImg.src = "assets/brasil 2.png"
    }
    if (currencySelect.value == "Euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "assets/euro.png"
    }
    if (currencySelect.value == "Libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "assets/libra 1.png"
    }

    convertValues()
}

currencySelect.addEventListener("change",changeCurrency);
convertButton.addEventListener("click", convertValues);