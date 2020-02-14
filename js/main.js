(() => {
  //make a reference to all the buttons
  const playButtons = document.querySelectorAll('.playButton'),
        pauseButtons = document.querySelectorAll('.pauseButton'),
        rewindButtons = document.querySelectorAll('.rewindButton'),
        audioElement = document.querySelector('audio');

  let globalPaused = false;

  //lay the song associated with the playButtons
  function playTrack()
  {

    if(globalPaused)
    {
      console.log('paused');
      resumeTrack();
      return;  // retuern statement kills code execution
    }

    let audioSource = this.dataset.trackref;

    audioElement.src = `audio/${audioSource}.mp3`;

    // load and play
    audioElement.load();
    audioElement.play();
    // playTrack();
  }

  function resumeTrack()
  {
    audioElement.play();
  }

  function pauseTrack()
  {
    audioElement.pause();
    globalPaused = true;
  }

  function rewindTrack()
  {
    audioElement.currentTime = 0;
  }

  //process the playButtons and add some event handling
  playButtons.forEach(button => button.addEventListener("click", playTrack));
  pauseButtons.forEach(button => button.addEventListener("click", pauseTrack));
  rewindButtons.forEach(button => button.addEventListener("click", rewindTrack));

})();
