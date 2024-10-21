const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".moedas");
const currencyInicial = document.querySelector(".valorinicial");

async function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector( ".div1-value-to-convert");
  const currencuValueConverted = document.querySelector(".div1-value");
  const valores = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL").then(res => res.json())
  const dolarToday = valores.USDBRL.high
  const euroToday = valores.EURBRL.high;
  const libraToday = valores.GBPBRL.high;
  
  

  console.log(valores)

  if (currencySelect.value == "Dolar") {
    currencuValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  if (currencySelect.value == "Euro") {
    currencuValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }
  if (currencySelect.value == "Libra") {
    currencuValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value == "Real" && currencyInicial.value == "Real") {
    currencuValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
  }

  //* CONVERSÃO DE DOLAR //*

  if (currencyInicial.value == "Dolar" && currencySelect.value == "Libra") {
    currencuValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue * 0.79);
  }

  if (currencyInicial.value == "Dolar" && currencySelect.value == "Euro") {
    currencuValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue * 0.93);
  }

  if (currencyInicial.value == "Dolar" && currencySelect.value == "Real") {
    currencuValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencyInicial.value == "Dolar" && currencySelect.value == "Dolar") {
    currencuValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue);
  }

  //* CONVERSAO DE LIBRA //*

  if (currencyInicial.value == "Libra" && currencySelect.value == "Dolar") {
    currencuValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue * 1.26);
  }

  if (currencyInicial.value == "Libra" && currencySelect.value == "Euro") {
    currencuValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue * 1.18);
  }

  if (currencyInicial.value == "Libra" && currencySelect.value == "Real") {
    currencuValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue / libraToday);
  }
  if (currencyInicial.value == "Libra" && currencySelect.value == "Libra") {
    currencuValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue);
  }

  //*CONVERSAO DE EURO//*

  if (currencyInicial.value == "Euro" && currencySelect.value == "Libra") {
    currencuValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue * 0.79);
  }

  if (currencyInicial.value == "Euro" && currencySelect.value == "Dolar") {
    currencuValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue * 0.93);
  }

  if (currencyInicial.value == "Euro" && currencySelect.value == "Real") {
    currencuValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencyInicial.value == "Euro" && currencySelect.value == "Euro") {
    currencuValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency1() {
  const currencyName1 = document.getElementById("currency-name1");
  const currencyImg1 = document.querySelector(".currency-bandeira1");

  if (currencyInicial.value == "Dolar") {
    currencyName1.innerHTML = "Dolár Americano";
    currencyImg1.src = "assets/estados-unidos.png";
  }
  if (currencyInicial.value == "Euro") {
    currencyName1.innerHTML = "Euro";
    currencyImg1.src = "assets/euro.png";
  }
  if (currencyInicial.value == "Libra") {
    currencyName1.innerHTML = "Libra";
    currencyImg1.src = "assets/libra 1.png";
  }
  if (currencyInicial.value == "Real") {
    currencyName1.innerHTML = "Real";
    currencyImg1.src = "assets/brasil 2.png";
  }

  convertValues();
}

function changeCurrency() {
  const currencyName = document.getElementById("curency-name");
  const currencyImg = document.querySelector(".currency-bandeira");

  if (currencySelect.value == "Dolar") {
    currencyName.innerHTML = "Dolár Americano";
    currencyImg.src = "assets/estados-unidos.png";
  }
  if (currencySelect.value == "Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "assets/euro.png";
  }
  if (currencySelect.value == "Libra") {
    currencyName.innerHTML = "Libra";
    currencyImg.src = "assets/libra 1.png";
  }
  if (currencySelect.value == "Real") {
    currencyName.innerHTML = "Real";
    currencyImg.src = "assets/brasil 2.png";
  }


  convertValues();
}



currencyInicial.addEventListener("change", changeCurrency1);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
