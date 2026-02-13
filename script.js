
    function calculateAge() {
        const dobInput = document.getElementById("dob").value;
        const result = document.getElementById("result");

        if (!dobInput) {
            result.innerHTML = "<span class='error'>Please select your date of birth</span>";
            return;
        }

        const dob = new Date(dobInput);
        const today = new Date();

        if (dob > today) {
            result.innerHTML = "<span class='error'>You cannot select Date of birth be in the future</span>";
            return;
        }

        let years = today.getFullYear() - dob.getFullYear();
        let months = today.getMonth() - dob.getMonth();
        let days = today.getDate() - dob.getDate();

        if (days < 0) {
            months--;
            const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += previousMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        result.innerHTML = `
            You age is <br>
            ${years} Years, ${months} Months, ${days} Days
        `;
    }
