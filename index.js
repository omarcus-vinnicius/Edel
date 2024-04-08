
const cellphone = document.getElementById("tel");

cellphone.addEventListener("input", () => {

    var clearValue = cellphone.value.replace(/\D/g, "").substring(0, 11);

    var numberArray = clearValue.split("");

    var numberFormat = "";

    if (numberArray.length > 0)
        numberFormat += `(${numberArray.slice(0, 2).join("")}) `

    if (numberArray.length > 2)
        numberFormat += `${numberArray.slice(2, 7).join("")}`

    if (numberArray.length > 7)
        numberFormat += `-${numberArray.slice(7, 11).join("")}`

    cellphone.value = numberFormat;

})

const email = document.getElementById("email");

Email.send({

})