const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert() {
    const inputValue = textBox.value.trim();
    if (inputValue === "") {
        result.textContent = "Please enter a temperature value";
        return;
    }

    const temp = Number(inputValue);
    if (isNaN(temp)) {
        result.textContent = "Please enter a valid number";
        return;
    }

    if (toFahrenheit.checked) {
        const convertedTemp = temp * 9 / 5 + 32;
        result.textContent = convertedTemp.toFixed(1) + "°F";
    } else if (toCelsius.checked) {
        const convertedTemp = (temp - 32) * 5 / 9;
        result.textContent = convertedTemp.toFixed(1) + "°C";
    } else {
        result.textContent = "Please select a unit";
    }
}