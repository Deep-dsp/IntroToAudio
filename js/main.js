(() => {
  //make a reference to all the buttons
  const playButtons = document.querySelectorAll('.playButton'),
        pauseButtons = document.querySelectorAll('.pauseButton'),
        rewindButtons = document.querySelectorAll('.rewindButton'),
        audioElement = document.querySelector('audio');

  //lay the song associated with the playButtons
  function playTrack()
  {
    let audioSource = this.dataset.trackref;

    audioElement.src = `audio/${audioSource}.mp3`;

    // load and play
    audioElement.load();
    audioElement.play();
  }

  function pauseTrack()
  {
    audioElement.pause();
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
