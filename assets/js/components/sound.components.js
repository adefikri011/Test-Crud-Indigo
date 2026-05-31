const SoundComponent = {
  successSoundPath: "assets/sounds/success.mp3",

  setSuccessSoundPath: (path) => {
    SoundComponent.successSoundPath = path;
  },

  playSuccess: () => {
    if (!SoundComponent.successSoundPath) {
      return;
    }

    const audio = new Audio(SoundComponent.successSoundPath);
    audio.volume = 0.35;
    audio.play().catch(() => {
    });
  }
};
window.SoundComponent = SoundComponent;