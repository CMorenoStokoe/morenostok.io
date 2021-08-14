function dismiss(){
    document.getElementById('dismiss').style.display='none';
};

/* Loading bar */
const videos = document.querySelectorAll('video');
function hideLoadingBar(){
    const loadingBar = document.getElementById('loadingBar');
    loadingBar.classList.add("animate__fadeOut");
    const btn = document.getElementById('enterBtn');
    btn.classList.add("animate__fadeIn");
    btn.style.visibility = "visible";
}
videos.forEach(
    function (video){
        video.onloadeddata = () => {
            var bar = document.getElementById('loadingBarBar');
            var width = Number(bar.getAttribute('aria-valuenow'));
            const newVal = width + (75/videos.length);
            bar.setAttribute('aria-valuenow', newVal);
            bar.style.width = `${newVal}%`;
            if(newVal>97){hideLoadingBar();};
        };
    }
);
setTimeout(hideLoadingBar, 4000)