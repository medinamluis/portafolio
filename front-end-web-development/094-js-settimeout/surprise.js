const surpriseSection = document.getElementById('surprise');

function showSurprise() {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}
  
const randomTime = Math.random() * 4000   // random time in (0, 4000ms)
setTimeout(showSurprise, randomTime);

// with arrow function:
// setTimeout( () => surpriseSection.textContent = '🎉 Surprise! 🎉', randomTime );