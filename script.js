let counter = 0;
let startTime;
let oneMinTaps = [];
let fiveMinTaps = [];

function startTimer() {
    startTime = new Date();
    setInterval(updateTime, 1000);
}

function updateTime() {
    const now = new Date();
    const elapsedTime = now - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    document.getElementById('time').textContent = 
        String(hours).padStart(2, '0') + ':' + 
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0');

    calculateAverages();
}

function incrementCounter() {
    if (!startTime) startTimer();
    
    counter++;
    document.getElementById('counter').textContent = counter;

    const now = new Date();
    oneMinTaps.push(now);
    fiveMinTaps.push(now);

    const oneMinAgo = new Date(now - 60 * 1000);
    const fiveMinAgo = new Date(now - 5 * 60 * 1000);

    oneMinTaps = oneMinTaps.filter(tapTime => tapTime > oneMinAgo);
    fiveMinTaps = fiveMinTaps.filter(tapTime => tapTime > fiveMinAgo);
}

function calculateAverages() {
    const oneMinAvg = oneMinTaps.length;
    const fiveMinAvg = (fiveMinTaps.length / 5).toFixed(2);

    document.getElementById('oneMinAvg').textContent = oneMinAvg;
    document.getElementById('fiveMinAvg').textContent = fiveMinAvg;
}
