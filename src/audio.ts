let audio: HTMLAudioElement | null = null;

export function getWeddingAudio() {
  if (!audio) {
    audio = new Audio("/Musika.mp3");
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "auto";
  }
  return audio;
}

export async function playWeddingMusic() {
  const track = getWeddingAudio();
  if (!track.paused) return;
  await track.play();
}
