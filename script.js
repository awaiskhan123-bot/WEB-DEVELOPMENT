document.addEventListener("DOMContentLoaded", () => {
    const ageForm = document.getElementById("age-form");
    const resultDiv = document.getElementById("result");
  
    ageForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const dobInput = document.getElementById("dob").value;
  
      if (!dobInput) {
        resultDiv.textContent = "Please enter a valid date.";
        resultDiv.classList.remove("hidden");
        return;
      }
  
      const dob = new Date(dobInput);
      const today = new Date();

      let age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      const dayDiff = today.getDate() - dob.getDate();
  
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }
  
      resultDiv.textContent = `You are ${age} years old.`;
      resultDiv.classList.remove("hidden");
    });
  });
  
