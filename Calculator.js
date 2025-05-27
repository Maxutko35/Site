document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("calculator-form");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const weight = parseFloat(document.getElementById("weight").value);
      const reps = parseFloat(document.getElementById("reps").value);

      if (isNaN(weight) || isNaN(reps) || weight <= 0 || reps <= 0) {
        resultDiv.textContent = "Please enter valid numbers.";
        return;
      }

      const oneRepMax = (-1.89) + (1.16 * weight) + (1.68 * reps);
      resultDiv.textContent = `Estimated 1RM: ${oneRepMax.toFixed(2)} kg`;
    });
  });
