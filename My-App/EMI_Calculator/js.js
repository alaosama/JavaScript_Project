const LoanAmount = document.getElementById("loan_amount");
const loanTenure = document.getElementById("loan_tenure");
const loanRate = document.getElementById("loan_interest");

const loanEmi = document.querySelector(".loan_emi");
const loanPrinciple = document.querySelector(".loan_principle");
const loanTotal = document.querySelector(".loan_total");
const loanInterest = document.querySelector(".loan_interest_rate");

const submitBtn = document.querySelector(".calculator-btn");

submitBtn.addEventListener("click", function () {
    const amount = LoanAmount.value;
    const tenure = loanTenure.value * 12; // 1Year = 12 months
    const rate = loanRate.value / 12 / 100; // loan rate per year / 100 - loan percentage

    const emi = (amount * rate * (1 + rate) ** tenure) / ((1 + rate) ** tenure - 1);
    const total = emi * tenure; // total amount to be paid including interest
    const interest = total - amount; // interest = total amount - principle amount 

    loanEmi.innerHTML = Math.floor(emi);
    loanPrinciple.innerHTML = Math.floor(amount);
    loanTotal.innerHTML = Math.floor(total);
    loanInterest.innerHTML = Math.floor(interest);

    // Loan Chart
    const xValues = ["Principle", "Interest"];
    const yValues = [amount, Math.floor(interest)];

    const barColors = ["#4961251", "#000000"];

    new Chart("loanChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display: false
            }
        }
    });
});
