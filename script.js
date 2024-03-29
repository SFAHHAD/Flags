let currentFlagIndex;
const flagsArray = Object.entries(flagsData).map(([code, name]) => ({ code, name }));
let hiddenFlags = [];

window.onload = function() {
    document.getElementById('next-flag').addEventListener('click', showRandomFlag);
    document.getElementById('reveal-name').addEventListener('click', revealAndSpeakName);
    document.getElementById('hide-flag').addEventListener('click', hideFlag);
    showRandomFlag();
};

function showRandomFlag() {
    if (flagsArray.length === hiddenFlags.length) {
        alert("All flags are hidden. Resetting.");
        hiddenFlags = [];
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * flagsArray.length);
    } while (hiddenFlags.includes(randomIndex));
    currentFlagIndex = randomIndex;

    updateFlagDisplay();
}

function updateFlagDisplay() {
    const flag = flagsArray[currentFlagIndex];
    document.getElementById('flag-image').src = `flag/${flag.code}.png`;
    document.getElementById('country-name').textContent = flag.name;
    document.getElementById('country-name').style.display = "none";
    document.getElementById('next-flag').disabled = true;
}

function revealAndSpeakName() {
    revealName();
    speakCountryName(flagsArray[currentFlagIndex].name);
}

function revealName() {
    document.getElementById('country-name').style.display = "block";
    document.getElementById('next-flag').disabled = false;
}

function hideFlag() {
    hiddenFlags.push(currentFlagIndex);
    showRandomFlag();
}

function speakCountryName(countryName) {
    const msg = new SpeechSynthesisUtterance(countryName);
    msg.lang = 'ar'; // Set the language to Arabic
    window.speechSynthesis.speak(msg);
}
