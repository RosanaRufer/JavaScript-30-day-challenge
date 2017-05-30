// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function togglePlay(){
    let func = video.paused ? 'play' : 'pause';
    video[func]();
}

function updateButton(){
    toggle.textContent = this.paused ? '▶':'⏸';
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
let isScrubbing = false;
function scrub(e){
     let newPercent = e.offsetX *100 / progress.offsetWidth;
     let newTime = (video.duration * newPercent) / 100;
     video.currentTime = newTime;
}


video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('mousemove', (e) => isScrubbing && scrub(e));

progress.addEventListener('mousedown', () => {
    isScrubbing = true;
});
progress.addEventListener('mouseup', () => isScrubbing = false);
progress.addEventListener('mouseout', () => isScrubbing = false);