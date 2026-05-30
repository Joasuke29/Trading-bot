// Get elements from HTML
const balanceInput = document.getElementById("balanceInput");
const riskInput = document.getElementById("riskInput");
const slInput = document.getElementById("slInput");
const pipInput = document.getElementById("pipInput");

const calculateBtn = document.getElementById("calculateBtn");
const lotResult = document.getElementById("lotResult");

// When button is clicked
calculateBtn.addEventListener("click", calculateLot);

function calculateLot() {
    // Read values
    const balance = parseFloat(balanceInput.value);
    const risk = parseFloat(riskInput.value);
    const stopLoss = parseFloat(slInput.value);
    const pipValue = parseFloat(pipInput.value);

    // Validation
    if (!balance || !risk || !stopLoss || !pipValue) {
        lotResult.textContent = "Please fill all fields correctly.";
        return;
    }

    if (stopLoss <= 0) {
        lotResult.textContent = "Stop loss must be greater than 0.";
        return;
    }

    if (risk <= 0 || risk > 100) {
        lotResult.textContent = "Risk must be between 1 and 100.";
        return;
    }

    // Step 1: calculate risk amount
    const riskAmount = balance * (risk / 100);

    // Step 2: calculate lot size
    const lotSize = riskAmount / (stopLoss * pipValue);

    // Output result
    lotResult.textContent = "Recommended Lot Size: " + lotSize.toFixed(2);
}
console.log("JavaScript connected!");