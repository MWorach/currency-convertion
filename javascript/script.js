{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.56;
        const rateUSD = 3.76;
        const rateGBP = 5.24;
        let currencyName;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;
                currencyName = "EUR";
            case "USD":
                return amount / rateUSD;
                currencyName = "USD";
            case "GBP":
                return amount / rateGBP;
                currencyName = "GBP";
        }

        const updateResultText = (amount, result, currency) => {
            const resultElement = document.querySelector(".js-result");
            resultElement.innerText = `${result.toFixed(2)} ${currency}`;
        }

        const onFormSubmit = (event) => {
                event.preventDefault();

                const currencyElement = document.querySelector(".js-currency");
                const amountElement = document.querySelector(".js-amount");

                const currency = currencyElement.value;
                const amount = amountElement.value;

                const result = calculateResult(amount, currency);
                updateResultText(amount, result, currency);
            };

            const init = () => {
                const formElement = document.querySelector(".js-form");

                formElement.addEventListener("submit", onFormSubmit)
            };

            init();

        }