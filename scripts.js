document.getElementById("colorForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get user inputs
    const number = parseInt(document.getElementById("number").value);
    const color = document.getElementById("color").value.trim();

    // Validate the input color
    const isValidColor = (color) => {
        const temp = document.createElement("div");
        temp.style.color = color;
        return temp.style.color !== "";
    };

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear previous output

    if (!isValidColor(color)) {
        outputDiv.innerHTML = `<p style="color: red;">Invalid color! Please enter a valid color name or HEX value.</p>`;
        return;
    }

    // Display user inputs
    outputDiv.innerHTML = `
    <h2>Submitted Answers:</h2>
    <p><strong>Number:</strong> ${number}</p>
    <p><strong>Favorite Color:</strong> <span style="color: ${color};">${color}</span></p>
    <h3>Repeated Color:</h3>
  `;

    // Generate repeated colors
    const repeatedColors = document.createElement("p");
    for (let i = 0; i < number; i++) {
        const span = document.createElement("span");
        span.textContent = `${color} `;
        span.style.color = color;
        repeatedColors.appendChild(span);
    }

    outputDiv.appendChild(repeatedColors);
});