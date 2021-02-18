var expenses = {
    personal: 0,
    savings: 0,
    food: 0,
    entertainment: 0,
    transport: 0,
    utilities: 0
};

function editExpenses() {
    expenses.entertainment = document.getElementById("entertainment").value;
    expenses.food = document.getElementById("food").value;
    expenses.personal = document.getElementById("personal").value;
    expenses.savings = document.getElementById("savings").value;
    expenses.transport = document.getElementById("transport").value;
    expenses.utilities = document.getElementById("utilities").value;
};

if (health == "low") {
    function lowHealth() {
        document.getElementById("#background").style.backgroundImage = "images/Homepage/Low Health BG.png";
    }
} else if (health == "mid") {
    function midHealth() {
        document.getElementById("#background").style.backgroundImage = "images/Homepage/mid_health.png";
    }
} else {
    function highHealth() {
        document.getElementById("#background").style.backgroundImage = "images/Homepage/High Health BG.png"
    }
};


