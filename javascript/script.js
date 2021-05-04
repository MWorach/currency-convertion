let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let amount = amountElement.value;
    let result;
    let currencyName;
    let EUR = 4.56;
    let USD = 3.76;
    let GBP = 5.24;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
            currencyName = "EUR";
            break;
        case "USD":
            result = amount / USD;
            currencyName = "USD";
            break;
        case "GBP":
            result = amount / GBP;
            currencyName = "GBP";
            break;
    }
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});