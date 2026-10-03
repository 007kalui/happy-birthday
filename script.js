/* =========================
   OPEN GIFT
========================= */
function openGift() {
    const music = document.getElementById("bg-music");

    music.volume = 0.5;

    music.play()
        .then(() => {
            console.log("Music is playing!");
        })
        .catch((error) => {
            console.log("Music failed to play:", error);
        });

    nextSection("cake-section");
}

/* =========================
   CHANGE SECTION
========================= */

function nextSection(sectionId) {

    const currentSection =
        document.querySelector(".screen.active");

    const nextSection =
        document.getElementById(sectionId);

    if (currentSection) {
        currentSection.classList.remove("active");
    }

    setTimeout(() => {

        nextSection.classList.add("active");

    }, 300);

}


/* =========================
   CANDLE
========================= */

const candles =
    document.querySelectorAll(".candle");

const cakeNext =
    document.getElementById("cake-next");

const blowText =
    document.getElementById("blow-text");


candles.forEach(candle => {

    candle.addEventListener("click", () => {

        candle.classList.add("off");

        const remainingCandles =
            document.querySelectorAll(
                ".candle:not(.off)"
            );

        if (remainingCandles.length === 0) {

            blowText.innerHTML =
                "Wish made. ✨";

            cakeNext.classList.remove("hidden");

        }

    });

});


/* =========================
   YES BUTTON
========================= */

function sayYes() {

    const message =
        document.getElementById("yes-message");

    message.classList.add("show");

    createConfetti();

}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const symbols = [
        "🤍",
        "✨",
        "♡",
        "🕯️",
        "✦"
    ];

    for (let i = 0; i < 30; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            Math.random() * 15 + 15 + "px";

        confetti.style.zIndex = "999";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration =
            Math.random() * 3 + 2;

        confetti.animate(

            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(360deg)`,
                    opacity: 0
                }
            ],

            {
                duration:
                    duration * 1000,

                easing: "ease-out"
            }

        );

        setTimeout(() => {

            confetti.remove();

        }, duration * 1000);

    }

}
