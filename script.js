let audioPlayer = document.getElementById('audio-player');
let playButton = document.getElementById('play-btn');
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
        playButton.textContent = 'Reproducir';
    } else {
        audioPlayer.play();
        playButton.textContent = 'Pausar';
    }
    isPlaying = !isPlaying;
}

function changeTrack() {
    // Puedes agregar más canciones aquí si lo deseas
    let tracks = ["Radio.mp3", "OtroTrack.mp3", "Musica.mp3"];
    let currentTrack = document.getElementById('track-name').textContent;

    // Cambia el archivo de audio a otro track
    let nextTrackIndex = (tracks.indexOf(currentTrack) + 1) % tracks.length;
    let nextTrack = tracks[nextTrackIndex];

    audioPlayer.src = nextTrack;
    audioPlayer.play();
    document.getElementById('track-name').textContent = nextTrack;
    playButton.textContent = 'Pausar';
    isPlaying = true;
}

function changeVolume(volume) {
    audioPlayer.volume = volume / 100;
}
