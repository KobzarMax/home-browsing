const videos = document.querySelectorAll("#videoTeaser4");

videos.forEach((video) => {
    if (video.paused) {
      video.play();  
    } else {
      video.pause();
    }
})