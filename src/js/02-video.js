import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const KEY_STORAGE = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  setTime(KEY_STORAGE, data.seconds);
}


function setTime(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getTime(key) {
  return JSON.parse(localStorage.getItem(key));
}

player.setCurrentTime(getTime(KEY_STORAGE));
