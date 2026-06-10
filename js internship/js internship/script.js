// Color Change Button
const btn = document.getElementById("colorBtn");

btn.addEventListener("click", function () {
    btn.style.backgroundColor = "green";
    btn.style.color = "white";
});

// Greeting Alert
function showGreeting() {
    let hour = new Date().getHours();

    if (hour < 12) {
        alert("Good Morning!");
    }
    else if (hour < 18) {
        alert("Good Afternoon!");
    }
    else {
        alert("Good Evening!");
    }
}

// Calculator
function addNumbers() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let sum = num1 + num2;

    document.getElementById("result").innerHTML =
        "Result: " + sum;
}