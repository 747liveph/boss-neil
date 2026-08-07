let online = 8426;
let jackpot = 15.80;

setInterval(() => {

    online += Math.floor(Math.random() * 5) + 1;

    document.getElementById("playersOnline").textContent =
        online.toLocaleString() + "+";

    jackpot += Math.random() * 0.03;

    document.getElementById("jackpotWon").textContent =
        "₱" + jackpot.toFixed(2) + "M+";

    const times = [
        "1-3 Mins",
        "2-4 Mins",
        "2-5 Mins",
        "3-5 Mins"
    ];

    document.getElementById("withdrawTime").textContent =
        times[Math.floor(Math.random() * times.length)];

}, 2500);
