const playBtn = document.querySelector('#play-btn');
const progress = document.querySelector('#progress');
const songList = document.querySelector('#song-list');

const songs = [
    {
        name: 'song1',
        id: 1
    },
    {
        name: 'song2',
        id: 2
    },
    {
        name: 'song3',
        id: 3,
    },
    {
        name: 'song4',
        id: 4
    },
    {
        name: 'song5',
        id: 5
    },
    {
        name: 'song6',
        id: 6
    }];


const audio = new Audio('./assets/song6.mp3');



for (let song of songs) {
    const li = document.createElement('li');
    li.innerText = song.name;
    li.setAttribute('id', song.id);
    li.classList.add('song-item');
    songList.append(li);
}


playBtn.addEventListener('click', function () {
    audio.paused ? audio.play() : audio.pause();
    if (playBtn.children[0].classList.contains('fa-play-circle')) {
        playBtn.children[0].classList.remove('fa-play-circle');
        playBtn.children[0].classList.add('fa-pause-circle')
    } else {
        playBtn.children[0].classList.remove('fa-pause-circle');
        playBtn.children[0].classList.add('fa-play-circle')
    }
});


audio.addEventListener('timeupdate', function () {
    const currentProgress = audio.currentTime * 100 / audio.duration;
    progress.value = currentProgress;
});

progress.addEventListener('change', function () {
    const updatedTime = parseInt(audio.duration * progress.value / 100);
    audio.currentTime = updatedTime;
});

songList.addEventListener('click', function (e) {
    const songId = e.target.getAttribute('id');
    audio.src = `./assets/song${songId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.remove('fa-play-circle');
    playBtn.children[0].classList.add('fa-pause-circle')
});





  