(() => {
  //make a reference to all the buttons
  const buttons = document.querySelectorAll('button'),
        audioElement = document.querySelector('audio');

  //lay the song associated with the buttons
  function playTrack()
  {
    let audioSource = this.dataset.trackref;

    audioElement.src = `audio/${audioSource}.mp3`;

    // load and play
    audioElement.load();
    audioElement.play();
  }

  //process the buttons and add some event handling
  buttons.forEach(button => button.addEventListener("click", playTrack));

})();
