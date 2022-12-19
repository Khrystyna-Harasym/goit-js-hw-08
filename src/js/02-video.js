import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const throttle = require('lodash.throttle');



const onPlay = function (event) {
  // data is an object containing properties specific to that event
  localStorage.setItem('videoplayer-current-time', event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
const time = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(time)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
