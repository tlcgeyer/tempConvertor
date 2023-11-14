function convertTemperature() {

    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');


    const resultElement = document.getElementById('result');

    if (celsiusInput.value !== '') {

        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        resultElement.innerText = `Result: ${fahrenheitValue.toFixed(2)} °F`;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    } else if (fahrenheitInput.value !== '') {

        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        const celsiusValue = (fahrenheitValue - 32) * 5/9;
        resultElement.innerText = `Result: ${celsiusValue.toFixed(2)} °C`;
        celsiusInput.value = celsiusValue.toFixed(2);
    } else {
        resultElement.innerText = 'Result: ';
    }
}