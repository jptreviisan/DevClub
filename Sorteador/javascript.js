const buttonSortear = document.querySelector("button")


function generateNumber() {

    const min = Math.ceil(document.querySelector(".numero1").value)
    const max = Math.floor(document.querySelector(".numero2").value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    alert(result)
}

buttonSortear.addEventListener("click", generateNumber)