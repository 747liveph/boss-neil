// ===============================
// BOSS NEIL LANDING PAGE
// script.js
// ==============================

// ===============================
// LOADING SCREEN
// ===============================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");
    const main = document.getElementById("main-content");

    setTimeout(function () {

        loader.style.opacity = "0";
        loader.style.transition = "0.6s ease";

        setTimeout(function () {

            loader.style.display = "none";

            main.style.display = "block";

            main.style.opacity = "0";

            setTimeout(function () {

                main.style.transition = "0.8s ease";

                main.style.opacity = "1";

            },100);

        },600);

    },2500);

});


// ===============================
// LIVE STATS
// ===============================

let players = 8426;
let jackpot = 15.80;

const withdrawTime = [

    "1-3 Mins",
    "2-4 Mins",
    "2-5 Mins",
    "3-5 Mins"

];

function updateStats(){

    players += Math.floor(Math.random()*5)+1;

    jackpot += (Math.random()*0.03);

    document.getElementById("playersOnline").innerHTML =
    players.toLocaleString() + "+";

    document.getElementById("jackpotWon").innerHTML =
    "₱" + jackpot.toFixed(2) + "M+";

    document.getElementById("withdrawTime").innerHTML =
    withdrawTime[Math.floor(Math.random()*withdrawTime.length)];

}

setInterval(updateStats,2500);


// ===============================
// CARD REVEAL ANIMATION
// ===============================

document.addEventListener("DOMContentLoaded",function(){

    const cards = document.querySelectorAll(

        ".hero-box,.stat-card,.promo-card,.game-card"

    );

    cards.forEach(function(card,index){

        card.style.opacity="0";

        card.style.transform="translateY(25px)";

        setTimeout(function(){

            card.style.transition=".6s";

            card.style.opacity="1";

            card.style.transform="translateY(0px)";

        },300+(index*120));

    });

});


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons = document.querySelectorAll(".register-btn");

buttons.forEach(function(btn){

    btn.addEventListener("mouseenter",function(){

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",function(){

        btn.style.transform="scale(1)";

    });

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ===============================
// FUTURE ANIMATIONS
// ===============================

function initFutureAnimations(){

    // Floating particles
    // Activity popup
    // Live notifications
    // Count-up animations

}


// ===============================
// PAGE READY
// ===============================

console.log("Boss Neil Landing Page Loaded Successfully");
